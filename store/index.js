
import { configureStore, createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const loadedAction = bool => ({
    type: 'loadedAction',
    payload: {
        loaded: bool
    }
})

function getAuthentication(state = {data: []}, action) {
    switch (action.type) {
        case 'loadedAction':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

const store = configureStore(
    {
        reducer: {
            authentcation: getAuthentication
        },
    }
);

export default store