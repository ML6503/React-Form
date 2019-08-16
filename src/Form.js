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
            Gender: 1,
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
                                <div key={el.id}>
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <input 
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
                                <div key={el.id}>
                                    <label className="label" htmlFor={el.id}>{el.label}</label>
                                    <select 
                                    className="genderbox" 
                                    name={el.name}
                                    value={this.state.Gender.value}
                                    onChange={(event) => {this.handleInput(event.target.value, el.id)}}
                                    >
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
