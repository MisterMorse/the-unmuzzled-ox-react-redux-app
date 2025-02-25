import { configureStore } from "@reduxjs/toolkit";

import staffReducer from "../components/staff/StaffSlice.js";

export default configureStore({
    reducer: {
        staff: staffReducer
    },
});
