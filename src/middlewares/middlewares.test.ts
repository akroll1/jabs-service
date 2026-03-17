import type { NextFunction, Request, Response } from "express";

import { cloudfrontSecretMiddleware } from "./cloudfront-secret-middleware";
import { extractToken } from "./helpers/extract-token";
import { validateCloudFrontSecret } from "./helpers/validate-cloudfront-secret";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function mockReq(overrides: Partial<Request> = {}): Request {
  return {
    params: {},
    body: {},
    auth: { sub: "user123", isAnonymous: "false" },
    headers: {},
    ip: "127.0.0.1",
    ...overrides,
  } as unknown as Request;
}

function mockRes() {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

// ---------------------------------------------------------------------------
// extractToken
// ---------------------------------------------------------------------------

describe("extractToken", () => {
  it("should return null when no Authorization header is present", () => {
    expect(extractToken({})).toBeNull();
  });

  it("should strip 'Bearer ' prefix from Authorization header", () => {
    expect(extractToken({ Authorization: "Bearer mytoken123" })).toBe(
      "mytoken123"
    );
  });

  it("should work with lowercase 'authorization' header", () => {
    expect(extractToken({ authorization: "Bearer mytoken123" })).toBe(
      "mytoken123"
    );
  });

  it("should return the raw value when no 'Bearer ' prefix is present", () => {
    expect(extractToken({ Authorization: "mytoken123" })).toBe("mytoken123");
  });

  it("should use the first element when the header is an array", () => {
    expect(
      extractToken({ Authorization: ["Bearer first", "Bearer second"] })
    ).toBe("first");
  });
});

// ---------------------------------------------------------------------------
// validateCloudFrontSecret
// ---------------------------------------------------------------------------

describe("validateCloudFrontSecret", () => {
  it("should return true when no secret is in headers and no env secret is set", () => {
    expect(validateCloudFrontSecret({}, undefined)).toBe(true);
  });

  it("should return false when a secret is received but no env secret is configured", () => {
    expect(
      validateCloudFrontSecret({ "x-origin-secret": "anything" }, undefined)
    ).toBe(false);
  });

  it("should return false when the received secret does not match the env secret", () => {
    expect(
      validateCloudFrontSecret({ "x-origin-secret": "wrong" }, "correct")
    ).toBe(false);
  });

  it("should return true when the received secret matches the env secret", () => {
    expect(
      validateCloudFrontSecret({ "x-origin-secret": "correct" }, "correct")
    ).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// cloudfrontSecretMiddleware
// ---------------------------------------------------------------------------

describe("cloudfrontSecretMiddleware", () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it("should return 500 when CLOUDFRONT_SECRET env var is not set", () => {
    delete process.env.CLOUDFRONT_SECRET;
    const res = mockRes();
    cloudfrontSecretMiddleware(
      mockReq(),
      res,
      jest.fn() as unknown as NextFunction
    );
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: "Server Configuration Error",
    });
  });

  it("should call next() in local development (IS_OFFLINE=true), skipping secret check", () => {
    process.env.CLOUDFRONT_SECRET = "secret";
    process.env.IS_OFFLINE = "true";
    const next = jest.fn();
    cloudfrontSecretMiddleware(
      mockReq(),
      mockRes(),
      next as unknown as NextFunction
    );
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("should call next() in local development (NODE_ENV=development), skipping secret check", () => {
    process.env.CLOUDFRONT_SECRET = "secret";
    process.env.IS_OFFLINE = "false";
    process.env.NODE_ENV = "development";
    const next = jest.fn();
    cloudfrontSecretMiddleware(
      mockReq(),
      mockRes(),
      next as unknown as NextFunction
    );
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("should return 403 when the x-origin-secret header does not match", () => {
    process.env.CLOUDFRONT_SECRET = "correct-secret";
    process.env.IS_OFFLINE = "false";
    process.env.NODE_ENV = "production";
    const req = mockReq({ headers: { "x-origin-secret": "wrong-secret" } });
    const res = mockRes();
    cloudfrontSecretMiddleware(req, res, jest.fn() as unknown as NextFunction);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      error: "Forbidden",
      message: "Direct access restricted.",
    });
  });

  it("should call next() when the x-origin-secret header matches", () => {
    process.env.CLOUDFRONT_SECRET = "correct-secret";
    process.env.IS_OFFLINE = "false";
    process.env.NODE_ENV = "production";
    const req = mockReq({ headers: { "x-origin-secret": "correct-secret" } });
    const next = jest.fn();
    cloudfrontSecretMiddleware(req, mockRes(), next as unknown as NextFunction);
    expect(next).toHaveBeenCalledTimes(1);
  });
});
