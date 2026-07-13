
import * as admin from 'firebase-admin';
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { Config } from '../../config';

type ServiceAccountSecret = {
    project_id: string;
    client_email: string;
    private_key: string;
};

// Cache the initialized app across warm Lambda invocations (same pattern as the Atlas connection)
let firebaseApp: admin.app.App | null = null;

const initFirebase = async (): Promise<admin.app.App> => {
    if (firebaseApp) return firebaseApp;

    const client = new SecretsManagerClient({
        region: process.env.AWS_REGION || 'us-east-1',
    });

    const { SecretString } = await client.send(
        new GetSecretValueCommand({ SecretId: Config.FIREBASE_SERVICE_ACCOUNT_SECRET_ARN })
    );

    if (!SecretString) throw new Error('Firebase service account secret is empty.');

    const serviceAccount: ServiceAccountSecret = JSON.parse(SecretString);

    firebaseApp = admin.initializeApp({
        credential: admin.credential.cert({
            projectId: serviceAccount.project_id,
            clientEmail: serviceAccount.client_email,
            // Secrets stored as console key-value pairs can double-escape newlines
            privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
        }),
    });

    return firebaseApp;
};

export const authorizer = async (token: string): Promise<boolean> => {
    if(!token) {
        console.log(`No token found.`);
        return false;
    }
    const app = await initFirebase();
    const verifiedToken = await app.auth().verifyIdToken(token);
    if(verifiedToken && Config.FIREBASE_JWT_ISS === verifiedToken.iss) {
        return true;
    }
    return false;
}
