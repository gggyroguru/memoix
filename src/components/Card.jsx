import Input from "./Input.jsx";

const Card = ({input, inputChange, button1, button2 = () => {}, from, i=0, edit, disabled = false}) => {

    /*const [input, setInput] = useState({
        title: ``,
        description: ``
    })*/

    /*const inputChange = (e) => {
        setInput((input) => ({...input, [e.target.name]: e.target.value}));
    }*/


    return (
        <div className={`w-full px-6 py-5 flex flex-col gap-3 rounded-3xl bg-blue-600`}>
            {
                Object.keys(input).map(key =>
                <Input key = {key} title={key} name={key} input={input[key]} inputChange={inputChange} disabled={disabled}/>)
            }
            {from === `create` && <div className={`mt-1.5 text-end`}>
                <button className={`px-3 py-1.5 rounded-lg bg-amber-600`} onClick={button1}>Create</button>
            </div>}
            {from === `notes` && <div className={`flex justify-end gap-3`}>
                    <button className={`px-3 py-1.5 rounded-lg ${edit?`bg-green-600`:`bg-neutral-900`}`} onClick={() => button1(i, input)}>{edit?`Save`:`Edit`}</button>

                <button className={`px-3 py-1.5 rounded-lg bg-red-600`} onClick={() => button2(i)}>Delete</button>
            </div>}
        </div>
    );
};

export default Card;