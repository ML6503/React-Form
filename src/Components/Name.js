import React from 'react';

const Name = ({ id, label, type, handleInput }) => (
    <div className="input-wrapper">
        <label className="label" htmlFor={id}>{label}</label>
        <input 
            className="input"
            data-testid="input-name"
            placeholder={label}
            id={id}
            required
            pattern="\S+ \S+.*"
            type={type}
            onInput={(event) => {handleInput(event.target.value, id)}} 
        />
    </div>
);

export default Name;
