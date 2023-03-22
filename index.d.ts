interface JWTPayload {
	iss: string;
	sub: string;
	aud: string | string[];
	jti?: string;
	exp: number;
	iat: number;
	[propName: string]: unknown;
}

interface UserDetail {
	name?: string;
	email?: string;
	profilePicture?: string;
	handle?: string;
	providers?: string[];
	phoneNumber?: string;
}

export interface BonuzJWTPayload extends JWTPayload, UserDetail {
	bonuzId: number;
	walletAddress: string;
}

export type authenticationPayload = {
	idToken: string;
	provider: string;
	providerId: string;
	walletAddress?: string;
	privateKey?: string;
};

declare const DATA = "data";
declare const ACTION = "action";

declare const WALLET_CONNECT = "walletConnect";
declare const AUTHENTICATION = "authentication";

interface WebViewMessageActionType<target extends string = string> {
	target: target;
}

interface WebViewMessageDataType<
	name extends string = string,
	data extends object = object
> {
	name: name;
	data: data;
}

export interface WebViewAuthenticationPayload
	extends WebViewMessageDataType<
		typeof AUTHENTICATION,
		authenticationPayload & UserDetail
	> {}

export interface WebViewWalletConnectAction
	extends WebViewMessageActionType<typeof WALLET_CONNECT> {}
export interface WebViewMessageAction {
	type: typeof ACTION;
	payload: WebViewWalletConnectAction;
}
export interface WebViewMessageData {
	type: typeof DATA;
	payload: WebViewAuthenticationPayload;
}

export type WebViewMessage = WebViewMessageAction | WebViewMessageData;
