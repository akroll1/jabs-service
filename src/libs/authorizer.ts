import { createRemoteJWKSet, jwtVerify } from 'jose';
import { Config } from '../../config';

// Firebase publishes the RS256 public keys used to sign ID tokens as a JWKS.
// createRemoteJWKSet fetches and caches these keys (refreshing as they rotate),
// so this is created once per module load and reused across warm invocations.
const FIREBASE_JWKS_URL = 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';
const jwks = createRemoteJWKSet(new URL(FIREBASE_JWKS_URL));

// Firebase ID tokens set `iss` to https://securetoken.google.com/<projectId>
// and `aud` to <projectId>, so we can derive the audience from the issuer.
const projectId = Config.FIREBASE_JWT_ISS.split('/').pop() as string;

export const authorizer = async (token: string): Promise<boolean> => {
    if (!token) {
        console.log(`No token found.`);
        return false;
    }

    try {
        await jwtVerify(token, jwks, {
            algorithms: ['RS256'],
            issuer: Config.FIREBASE_JWT_ISS,
            audience: projectId,
        });
        return true;
    } catch (err) {
        console.log('Token verification failed:', err);
        return false;
    }
};
