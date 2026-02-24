
import { JabType, UnsubscribeFromSourceOptions } from "@/common";
import { JabsMongo } from "src/models/jabs";

export class JabsService {
    // async sendWelcomeEmail(email: string): Promise<void> {
    //     await sendWelcomeEmailSES(email);
    // }

    async subscribeToType(email: string, type: JabType): Promise<boolean> {
        const subscription = await JabsMongo.findOneAndUpdate(
        {
            email,
            type,
        },
        {
            email,
            type,
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
