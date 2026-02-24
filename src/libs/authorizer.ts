
import * as admin from 'firebase-admin';
import * as serviceAccount from '../../service-account-key.json'
import { Config } from '../../config';

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
    }),
});

export const authorizer = async (token: string): Promise<boolean> => {
    if(!token) {
        console.log(`No token found.`);
        return false;
    }
    const verifiedToken = await admin.auth().verifyIdToken(token);
    if(verifiedToken && Config.FIREBASE_JWT_ISS === verifiedToken.iss) {
        return true;
    }
    return false;
}