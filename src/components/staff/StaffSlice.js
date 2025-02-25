import { createSlice } from "@reduxjs/toolkit";

export const staffSlice = createSlice({
    name: "staff",
    initialState: {
        staff: [],
        message: ""
    },
    reducers: {
        saveMessage: (state, action) => {
            state.message = action.payload
        }
    }
})

export const { saveMessage } = staffSlice.actions;
export default staffSlice.reducer;
