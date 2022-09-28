import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: null,
    reducers: {
        setError(_, action) {
                return action.payload;
            },
            resetError() {
                return null;
            }
        }
});

const { actions, reducer } = errorSlice;
export const { setError, resetError } = actions;
export default reducer;