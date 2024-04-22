import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.value.push(action.payload)
        },
        updateNote: (state, action) => {
            // const note = action.payload
            // // console.log(action.payload.key)
            state.value.splice(action.payload.key, 1, {
                title: action.payload.title,
                description: action.payload.description,
            })
        },
        removeNote: (state, action) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const {addNote, updateNote, removeNote} = notesSlice.actions
export default notesSlice.reducer