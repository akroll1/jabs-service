
import { JabType, UnsubscribeFromSourceOptions } from "@/common";
import { Jab } from "@/common/interfaces";
import { JabsMongo } from "src/models/jabs";

export class JabsService {
    // async sendWelcomeEmail(email: string): Promise<void> {
    //     await sendWelcomeEmailSES(email);
    // }

    async subscribeToType(options: Partial<Jab>): Promise<boolean> {
        const subscription = await JabsMongo.findOneAndUpdate(
        {
            email: options.email,
            type: options.type,
        },
        {
            ...options,
        },
        {
            upsert: true,
            new: true,
        }
        );
        if (subscription) {
        return true;
        }
        return false;
    }

    async unsubscribeFromSource(
        options: UnsubscribeFromSourceOptions
    ): Promise<void> {
        const { id, source } = options;
        // Analytics will be added here later for tracking unsubscriptions
        if(source === JabType.WELCOME) {
            await JabsMongo.findOneAndDelete({ email: id, source });
            return;
        }
        return;
    }
}
