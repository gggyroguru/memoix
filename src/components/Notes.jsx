import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card.jsx";
import {removeNote, updateNote} from "../store/slices/notesSlice.js";
import {isEdit} from "../store/slices/editSlice.js";
import {toast} from "sonner";

const Notes = () => {

    const [input, setInput] = useState({})
    const [edit, setEdit] = useState(undefined)
    const notes = useSelector(state => state.notes.value);

    const dispatch = useDispatch()

    const editNote = (key, note) => {
        dispatch(isEdit(true))
        setInput(note)
        setEdit(key)
    }

    const inputChange = (e) => {
        setInput((input) => ({...input, [e.target.name]: e.target.value}));
    }

    const saveNote = (key, note) => {
        const savedNote = {
            key, ...note
        }

        dispatch(updateNote(savedNote))
        dispatch(isEdit(false))
        setEdit(undefined)
        toast.success("Notes updated")
    }

    const deleteNote = (key) => {

        dispatch(removeNote(key))
        toast.success("Notes deleted")
    }

    return (
        <div className={''}>
            {
                notes?.length > 0 &&
                <div>
                    <div className={'text-2xl'}>Notes</div>
                    <div className={'mt-6 flex flex-col gap-9'}>
                        {
                            notes?.map((note, key) => (
                                <Card input={key === edit ? input : note} key={key}
                                      button1={key === edit ? saveNote : editNote} button2={deleteNote} i={key}
                                      inputChange={inputChange} disabled={key !== edit} edit={key === edit}
                                      from={'notes'} bg={'indigo'}/>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Notes;