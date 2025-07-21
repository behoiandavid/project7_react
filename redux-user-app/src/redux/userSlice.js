import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.list.push({ id: Date.now(), name: action.payload });
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;