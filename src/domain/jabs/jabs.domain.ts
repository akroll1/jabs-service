import {
    IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  validate,
} from "class-validator";
import { JabType } from "src/common/enums";

export type IJab = Pick<
  Jab,
  "email" | "type" | "canContact" | "createdAt" | "updatedAt"
>;

export class Jab implements IJab {
    static async newJab(email: string, type: JabType): Promise<Jab> {
        const jab = new Jab();
        Object.assign(jab, {
            email,
            type,
        });
        await jab.validateOrThrow();
        return jab;
    }

    static async fromData(data: Partial<IJab> | any): Promise<Jab> {
        const jab = new Jab();
        Object.assign(jab, {
            ...data,
            // FIX 1: Convert Mongoose Date objects to ISO Strings for the Domain
            createdAt: data.createdAt instanceof Date 
                ? data.createdAt.toISOString() 
                : data.createdAt,
                
            // FIX 2: Do NOT use new Date() here. Use the data passed in.
            updatedAt: data.updatedAt instanceof Date 
                ? data.updatedAt.toISOString() 
                : data.updatedAt,
        });
        await jab.validateOrThrow();
        return jab;
    }

    @IsString()
    @IsEmail()
    email: string;

    @IsEnum(JabType)
    type: JabType;

    @IsBoolean()
    canContact: boolean;

    @IsString()
    @IsOptional()
    createdAt?: string;

    @IsString()
    @IsOptional()
    updatedAt?: string;

    async validateOrThrow() {
        const errors = await validate(this);
        if (errors.length > 0)
        throw new Error(errors.map((x) => x.toString()).join(","));
    }
}