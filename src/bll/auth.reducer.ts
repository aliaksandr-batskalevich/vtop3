import {ThunkDispatchType} from "../utils/hooks";
import axios from "axios";
import {HttpApi} from "../dal/http.api";

type AuthStateType = {
	isAuth: boolean
	isAuthing: boolean
	isNationalityInit: boolean
	nationalities: Array<string>
};

export type AuthActionsType = ReturnType<typeof setIsAuth>
	| ReturnType<typeof setIsAuthing>
	| ReturnType<typeof setIsNationalityInit>
	| ReturnType<typeof setNationalities>;

const authInitState: AuthStateType = {
	isAuth: false,
	isAuthing: false,
	isNationalityInit: false,
	nationalities: [],
};

enum AuthActions {
	SET_IS_AUTH = 'SET_IS_AUTH',
	SET_IS_AUTHING = 'SET_IS_AUTHING',
	SET_IS_NATIONALITY_INIT = 'SET_IS_NATIONALITY_INIT',
	SET_NATIONALITIES = 'SET_NATIONALITIES',
}

export const authReducer = (state: AuthStateType = authInitState, action: AuthActionsType): AuthStateType => {
	switch (action.type) {
		case AuthActions.SET_IS_AUTH:
		case AuthActions.SET_IS_AUTHING:
		case AuthActions.SET_IS_NATIONALITY_INIT:
		case AuthActions.SET_NATIONALITIES:
			return {...state, ...action.payload};
		default:
			return state;
	}
};

const setIsAuth = (isAuth: boolean) => {
	return {
		type: AuthActions.SET_IS_AUTH,
		payload: {isAuth}
	} as const;
};
const setIsAuthing = (isAuthing: boolean) => {
	return {
		type: AuthActions.SET_IS_AUTHING,
		payload: {isAuthing}
	} as const;
};
const setIsNationalityInit = (isNationalityInit: boolean) => {
	return {
		type: AuthActions.SET_IS_NATIONALITY_INIT,
		payload: {isNationalityInit}
	} as const;
};
const setNationalities = (nationalities: Array<string>) => {
	return {
		type: AuthActions.SET_NATIONALITIES,
		payload: {nationalities}
	} as const;
};

export const getAllNationalities = () => async (dispatch: ThunkDispatchType) => {
	try {
		const response = await HttpApi.getAllNationality();
		const nationalities = response
			.map(n => n.demonyms.eng.m)
			.filter(n => n)
			.sort();

		dispatch(setNationalities(nationalities));
		dispatch(setIsNationalityInit(true));
	} catch (error) {
		let errorMessage: string;
		if (axios.isAxiosError(error)) {
			errorMessage = error.response
				? error.response.data.message
				: error.message;

		} else {
			//@ts-ignore
			errorMessage = error.message;
		}
		console.log(errorMessage);
		return Promise.reject(errorMessage);
	}
}