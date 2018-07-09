export interface OAuth {
    app_tokens?: {[appKey: string]: string};
    access_token: string;
    expires_in: number;
    refresh_token: string;
}
