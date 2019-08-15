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
            Gender:{},
        };

        this.onSubmit=this.onSubmit.bind(this);
        this.handleInput=this.handleInput.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
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
            <div>
                {
                    this.props.input.map(el => {
                        //return input for every el
                        if(el.id === "name") {
                            return (
                                <>
                                    <label htmlFor={el.id}>{el.label}</label>
                                    <input 
                                        placeholder={el.type}
                                        id={el.id}
                                        required
                                        pattern="\S+ \S+.*"
                                        onInput={(event) => {this.handleInput(event.target.value, el.id)}} 
                                    />
                                </>
                            );
                        } else if(el.id === "dob") {
                            return (
                                <>
                                    <label htmlFor={el.id}>{el.label}</label>
                                    <input 
                                        placeholder={el.type}
                                        id={el.id}
                                        required                                       
                                    />
                                </>
                            );
                        } else if (el.id === "gender") {
                            return (
                                <>
                                    <label htmlFor={el.id}>{el.label}</label>
                                    <select name={el.name}>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </>
                            );
                        }
                    })
                    
                }
                <button type='submit' onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }    
}
export default Form; 
