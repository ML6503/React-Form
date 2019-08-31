import React from 'react';

const Gender = ({ id, label, value, handleInput }) => (
<div key={id} className="input-wrapper">
    <label className="label" htmlFor={id}>{label}</label>
    <select
    data-testid="input-gender" 
    className="input" 
    id={id}
    value={value}
    onChange={(event) => {handleInput(event.target.value, id)}}
    >   
        <option value="0">---</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
    </select>
</div>
);

export default Gender;
