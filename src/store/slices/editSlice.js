import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        isEdit: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {isEdit} = editSlice.actions
export default editSlice.reducer