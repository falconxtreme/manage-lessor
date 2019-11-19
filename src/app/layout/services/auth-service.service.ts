// This is the provider registration example code
 
import { configureTnsOAuth, TnsOAuthClient, ITnsOAuthTokenResult } from "nativescript-oauth2";
 
import {
  TnsOaProvider,
  TnsOaProviderOptionsGoogle,
  TnsOaProviderGoogle
} from "nativescript-oauth2/providers";

let client: TnsOAuthClient = null;

export function configureOAuthProviders(){
    const googleProvider = configureOAuthProviderGoogle();

    configureTnsOAuth([googleProvider]);    
}

function configureOAuthProviderGoogle(){
    const googleProviderOptions:TnsOaProviderOptionsGoogle ={
        openIdSupport: 'oid-full',
        clientId: '126355649777-c8jqnsru5ccum7ektan9h9bf3btfp077.apps.googleusercontent.com',
        redirectUri: 'com.googleusercontent.apps.126355649777-c8jqnsru5ccum7ektan9h9bf3btfp077:/auth',
        urlScheme: 'com.googleusercontent.apps.126355649777-c8jqnsru5ccum7ektan9h9bf3btfp077',
        scopes: ['email']
    };
    const googleProvider = new TnsOaProviderGoogle(googleProviderOptions);
    return googleProvider;
}

export function tnsOAuthLogin(providerType){
    client = new TnsOAuthClient(providerType);

    client.loginWithCompletion((tokenResult: ITnsOAuthTokenResult, error)=> {
        if(error){
            console.error('There was an error logging in.');
            console.error(error);
        }else{
            console.log('Logged in successfully.');
            console.log(tokenResult);
        }
    });
}