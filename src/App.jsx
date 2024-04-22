import './App.css'
import {useEffect, useState} from "react";
import Card from "./components/Card.jsx";
import Notes from "./components/Notes.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addNote} from "./store/slices/notesSlice.js";
import {toast, Toaster} from "sonner";

const getStorage = () => {
    const storage = localStorage.getItem("storage");
    if (storage) {
        return JSON.parse(storage)
    } else {
        return []
    }
}

const App = () => {

    const [input, setInput] = useState({
        title: '',
        description: ''
    })
    const notes = useSelector(state => state.notes.value);
    const edit = useSelector(state => state.edit.value);

    const dispatch = useDispatch()

    const inputChange = (e) => {
        setInput((input) => ({...input, [e.target.name]: e.target.value}));
    }

    const create = () => {
        if (input.title && input.description) {

            if (!edit) {

                dispatch(addNote(input))
                setInput({
                    title: '',
                    description: ''
                })
                toast.success("Notes added")
            } else {
                toast.error("Saved first")
            }
        } else {
            toast.error("Please enter a title and description");
        }

    }

    useEffect(() => {
        if (getStorage()) {
            getStorage().forEach((item) => {
                dispatch(addNote(item))
            })
        }
    }, []);

    useEffect(() => {
        if (getStorage()) {
            localStorage.setItem("storage", JSON.stringify(notes));
        }
    }, [notes]);


    return (
        <div className={'w-[90%] m-auto'}>
            <Toaster position={'top-right'} expand={true} richColors={true} duration={1500} gap={16}/>
            <div className={'mt-6 text-center font-medium text-3xl'}>Memoix</div>
            <div className={'mt-6 w-[90%] max-w-[36rem] m-auto'}>
                <Card input={input} inputChange={inputChange} button1={create} from={'create'} bg={'indigo'}/>
            </div>

            <div className={'mt-10 w-[90%] max-w-[36rem] m-auto'}>
                <Notes/>
            </div>

        </div>
    );
};

export default App;