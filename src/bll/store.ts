import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AuthActionsType, authReducer} from "./auth.reducer";

const rootReducer = combineReducers({
	auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStateType = ReturnType<typeof rootReducer>;

export type RootActionsType = AuthActionsType;
