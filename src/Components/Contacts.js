import React from 'react';

const Contacts = ({ id, telOptions, handleInput }) => (
    telOptions.map(tel => (
        <div className="input-wrapper" key={tel.key}>
            <label className="label" htmlFor={tel.key}>{tel.label}</label>
            <input 
                className="input"
                data-testid="input-contact"
                placeholder={tel.label}
                id={tel.key}                              
                type={tel.type}
                onInput={(event) => {handleInput(event.target.value, tel.key)}} 
            />        
        </div>
    ))
);

export default Contacts;