import { createSlice } from "@reduxjs/toolkit";

export const StaffSlice = createSlice({
    name: "staff",
    initialState: {
        getStaff: 'hi.'
    },
    reducers: {
        greeting: (state) => {
            state.getStaff += 'hey.'
        }
    }
})

// let greeting;
export const {greeting} = StaffSlice.actions;
export default StaffSlice.reducer;