import React from 'react';

const minAge = 18;
const d = new Date();
d.setFullYear(d.getFullYear() - minAge);


const DOB = ({ id, label, type, handleInput }) => (
    <div key={id} className="input-wrapper">
        <label className="label" htmlFor={id}>{label}</label>
        <input 
            className="input"
            data-testid="input-dob"
            placeholder={type}
            id={id}
            required
            type={type}
            max={d.toJSON().slice(0, 10)} 
            onInput={(event) => {handleInput(event.target.value, id)}}                                        
        />
    </div>
);

export default DOB;
