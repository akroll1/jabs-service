
import { JabType } from "@/common";
import { Jab } from "@/common/interfaces";
import { JabsMongo } from "src/models/jabs";

export class JabsService {
    async subscribeToType(options: Partial<Jab>): Promise<boolean> {
        const subscription = await JabsMongo.findOneAndUpdate(
            {
                email: options.email,
                type: options.type,
            },
            {
                ...options,
                canContact: true,
                unsubscribedAt: null,
            },
            {
                upsert: true,
                new: true,
            }
        );

        return !!subscription;
    }

    async unsubscribeFromType(email: string, type: JabType): Promise<void> {
        if (type === JabType.ALL) {
            await JabsMongo.updateMany(
                { email },
                {
                    canContact: false,
                    unsubscribedAt: new Date(),
                }
            );
            return;
        }

        await JabsMongo.findOneAndUpdate(
            { email, type },
            {
                canContact: false,
                unsubscribedAt: new Date(),
            }
        );
    }
}
