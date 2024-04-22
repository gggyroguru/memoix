import React from 'react';

const Input = ({title, name, input, inputChange, disabled}) => {
    return (
        <div className={'flex flex-col gap-3'}>
            <span className={'px-3 capitalize'}>{title}</span>


            {name === 'description' && disabled ?
                <span className={'px-3 py-1.5 rounded-lg bg-blue-500'}>
                <a href={input} target={'_blank'}>{input}</a>
                </span> :

                <input className={'px-3 py-1.5 rounded-lg bg-blue-500 outline-none'} name={name} value={input}
                       onChange={(e) => inputChange(e)} disabled={disabled}/>
            }
        </div>
    );
};

export default Input;