import {configureStore} from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice.js";
import editSlice from "./slices/editSlice.js";

const store = configureStore({
    reducer : {
        notes: notesSlice,
        edit: editSlice
    }
});

export default store