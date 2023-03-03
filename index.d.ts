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
