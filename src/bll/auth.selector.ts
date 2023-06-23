import {RootStateType} from "./store";

export const getIsAuth = (state: RootStateType): boolean => state.auth.isAuth;
export const getIsAuthing = (state: RootStateType): boolean => state.auth.isAuthing;
export const getIsNationalityInit = (state: RootStateType): boolean => state.auth.isNationalityInit;
export const getNationalities = (state: RootStateType): Array<string> => state.auth.nationalities;
