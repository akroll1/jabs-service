import { APIGatewayProxyEventHeaders } from "aws-lambda";

export const validateCloudFrontSecret = (headers: APIGatewayProxyEventHeaders | undefined, envSecret?: string): boolean => {
    
    const receivedSecret = headers?.['x-origin-secret'] || headers?.['X-Origin-Secret'];
    
    if (!envSecret && receivedSecret) return false; 
    
    if (receivedSecret && receivedSecret !== envSecret) return false; 
    
    return true; 
}