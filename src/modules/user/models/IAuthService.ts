export interface TokenDecoded {
   sub: string;
   auth_time: number;
   exp: number;
   iat: number;
   username: string;
 }

export interface LoginAuthServiceResponse {
   AccessToken: string;
   ExpiresIn: number;
   RefreshToken: string;
   decodedAccessToken: TokenDecoded;
   isLoginByQrCode: boolean;
   meta: {
     email: string;
     name: string;
     custom_attributes: {};
   };
 }