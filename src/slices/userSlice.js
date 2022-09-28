import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserLogin } from "../firebase-auth";
import { setError } from "./errorSlice";

const initialState = {
    token: null,
    uid: null,
    email: null

}

export const fetchSignInAction = createAsyncThunk(
    'user/fetchLogin',
    async (params, { dispatch }) => {
        try{
            const { accessToken, email, uid } = await fetchUserLogin(params.email, params.password);
            return { accessToken, email, uid };
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signOut(state) {
            return {
                ...state,
                email: null,
                token: null,
                id: null,
            }
        },
    },
    extraReducers: {
        [fetchSignInAction.fulfilled]: (state, action) => {
            state.token = action.payload.accessToken;
            state.uid = action.payload.uid;
            state.email = action.payload.email;
        }
    }
});

const {  actions, reducer } = userSlice;

export const { signOut } = actions;
export default reducer;