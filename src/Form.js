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
            <form className="form" onSubmit={this.onSubmit}>
                {
                    this.props.input.map(el => {
                        //return input for every el
                        if(el.id === "name") {
                            return (
                                <div key={el.id}>
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <input 
                                        placeholder={el.type}
                                        id={el.id}
                                        required
                                        pattern="\S+ \S+.*"
                                        onInput={(event) => {this.handleInput(event.target.value, el.id)}} 
                                    />
                                </div>
                            );
                        } else if(el.id === "dob") {
                            return (
                                <div key={el.id}>
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <input 
                                        placeholder={el.type}
                                        id={el.id}
                                        required                                       
                                    />
                                </div>
                            );
                        } else if (el.id === "gender") {
                            return (
                                <div key={el.id}>
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <select name={el.name}>
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
