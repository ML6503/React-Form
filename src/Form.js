import React from 'react';
import Name from './Components/Name';
import DOB from './Components/DOB';
import Gender from './Components/Gender';
import Contacts from './Components/Contacts';
import Guardian from './Components/Guardian';

const componentsLabels = {
    name: Name,
    dob: DOB,
    gender: Gender,
    contact: Contacts,
    guardian: Guardian,
};


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
            Contacts: [],
            Guardian: {},
        };

        this.onSubmit=this.onSubmit.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.renderComponent = this.renderComponent.bind(this);
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
        } else if (id === 'mobile') {
            this.setState({Contacts: [...this.state.Contacts, {mobile: input}]})
        } else if (id === 'home') {
            this.setState({Contacts: [...this.state.Contacts, {home: input}]})
        } else if (id === 'guardian' ) {
            this.setState({Guardian: input})
        }
    }

    renderComponent(c) {
        const InputComponent = componentsLabels[c.id];
        return <InputComponent key={c.id} {...c} handleInput={this.handleInput}/>
    }

    render()  {
        return (
            <form className="form" onSubmit={this.onSubmit} data-testid="form">
                {
                    this.props.input.map(el => this.renderComponent(el))
                }
                <button className="submit" type='submit'>Submit</button>
            </form>
        );
    }    
}
export default Form; 
