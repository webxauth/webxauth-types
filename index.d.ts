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
}

export interface BonuzJWTPayload extends JWTPayload, UserDetail {
	bonuzId: number;
	walletAddress: string;
}

export type authenticationPayload = {
	bonuzToken: string;
	walletAddress: string;
	privateKey: string;
};

declare enum WebViewMessageType {
	ACTION = "action",
	DATA = "data",
}

declare enum WebViewActions {
	WALLET_CONNECT = "walletConnect",
}

declare enum WebViewDataNames {
	AUTHENTICATION = "authentication",
}

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
		WebViewDataNames.AUTHENTICATION,
		authenticationPayload & UserDetail
	> {}

export interface WebViewWalletConnectAction
	extends WebViewMessageActionType<WebViewActions.WALLET_CONNECT> {}
export interface WebViewMessageAction {
	type: WebViewMessageType.ACTION;
	payload: WebViewWalletConnectAction;
}
export interface WebviewMessageData {
	type: WebViewMessageType.DATA;
	payload: WebViewAuthenticationPayload;
}

export type WebViewMessage = WebViewMessageAction | WebviewMessageData;
