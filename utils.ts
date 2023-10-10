import { NativeAuthResult, NativeAuthServer, NativeAuthServerConfig } from "@multiversx/sdk-native-auth-server";
import { API_URL } from "./constantes";

export const config: NativeAuthServerConfig = {
    apiUrl: API_URL,
    acceptedOrigins: ["https://mx-template-dapp.vercel.app"],
    maxExpirySeconds: 86400
  };

export const decodeToken = async (token: string | undefined) : Promise<NativeAuthResult> => {

    if (!token) {
        throw new Error('Missing Token.')
    }

    const server = new NativeAuthServer(config);
  
    const tokenClean = token.replace('Bearer ', '');
  
    return await server.validate(tokenClean);
};