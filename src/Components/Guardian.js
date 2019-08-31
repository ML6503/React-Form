import React from 'react';

class Guardian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false};

        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(event) {
       const disabled = event.target.checked;          
       this.setState({disabled});
        
    }    

    render() {
        const { id, label, type, handleInput } = this.props;
        return (
            <div className="input-wrapper">
                <label className="label" htmlFor={id}>{label}</label>
                <input 
                    className="input"
                    data-testid="input-name"
                    placeholder={label}
                    id={id}                       
                    type={type}
                    onInput={(event) => {this.handleChecked(event)}} 
                />
                {this.state.disabled === true &&
                    <input 
                    className="input"
                    data-testid="input-name"
                    placeholder={label}
                    id={id}                       
                    type='text'
                    required                
                    onInput={(event) => {handleInput(event.target.value, id)}} 
                />
                }
            
                
            </div>
        )
    }
}

export default Guardian;