import React from 'react';

// to create Form class with state
// this Form to get from props input json with Name, DOB, Gender
// and to have Submit button
// on Submit

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: {},
            DOB: {},
            Gender: {},
        };

        this.onSubmit=this.onSubmit.bind(this);
        this.handleInput=this.handleInput.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        alert('output: ' + JSON.stringify(this.state));
    }

    handleInput(input, id) {
        console.log(input);
        if (id === 'name') {
            this.setState({Name: input})      
        } else if (id === 'dob') {
            this.setState({DOB: input})
        } else if (id === 'gender') {
            this.setState({Gender: input})
        }
        
    }

    render()  {
            
        return (
            <form className="form" onSubmit={this.onSubmit} data-testid="form">
                {
                    this.props.input.map(el => {
                        //return input for every el
                        if(el.id === "name") {
                            return (
                                <div key={el.id} className="input-wrapper">
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <input 
                                        className="input"
                                        data-testid="input-name"
                                        placeholder={el.label}
                                        id={el.id}
                                        required
                                        pattern="\S+ \S+.*"
                                        type={el.type}
                                        onInput={(event) => {this.handleInput(event.target.value, el.id)}} 
                                    />
                                </div>
                            );
                        } else if(el.id === "dob") {
                            const minAge = 18;
                            const d = new Date();
                            d.setFullYear(d.getFullYear() - minAge);
                            return (
                                <div key={el.id} className="input-wrapper">
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <input 
                                        className="input"
                                        data-testid="input-dob"
                                        placeholder={el.type}
                                        id={el.id}
                                        required
                                        type={el.type}
                                        max={d.toJSON().slice(0, 10)} 
                                        onInput={(event) => {this.handleInput(event.target.value, el.id)}}                                        
                                    />
                                </div>
                            );
                        } else if (el.id === "gender") {
                            return (
                                <div key={el.id} className="input-wrapper">
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <select
                                    data-testid="input-gender" 
                                    className="input" 
                                    name={el.name}
                                    id={el.id}
                                    value={this.state.Gender.value}
                                    onChange={(event) => {this.handleInput(event.target.value, el.id)}}
                                    >   
                                        <option value="0">---</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </div>
                            );
                        }
                        return false;
                    })
                    
                }
                <button className="submit" type='submit'>Submit</button>
            </form>
        );
    }    
}
export default Form; 
