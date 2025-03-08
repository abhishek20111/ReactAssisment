// src/redux/store.ts
import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer, RootState } from "./reducers/reducers";
import { AnyAction } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
