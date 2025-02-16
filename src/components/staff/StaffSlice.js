import { createSlice } from "@reduxjs/toolkit";

export const StaffSlice = createSlice({
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

export const { saveMessage } = StaffSlice.actions;
export default StaffSlice.reducer;