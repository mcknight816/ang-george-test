import {AuthConfig} from 'angular-oauth2-oidc';
import {environment} from "../../environments/environment";


export const authConfig: AuthConfig = {
  issuer: 'https://keycloak.bluntsoftware.com/auth/realms/human-resources',
  redirectUri: window.location.origin + '/callback',
  clientId: "client-id",
  scope: 'openid profile email roles offline_access',
  responseType: 'code',
  showDebugInformation: false,
  logoutUrl: 'https://keycloak.bluntsoftware.com/auth/realms/human-resources/protocol/openid-connect/logout'
};
