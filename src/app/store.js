import { configureStore } from "@reduxjs/toolkit";

import { StaffSlice } from "../components/staff/StaffSlice.js";

export default configureStore({
    reducer: {
        staff: StaffSlice.reducer
    },
});
