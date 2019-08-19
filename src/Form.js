import React from 'react';
import Name from './Components/Name';
import DOB from './Components/DOB';
import Gender from './Components/Gender';
import ErrorBoundary from './ErrorBoundary';

const componentsLabels = {
    name: Name,
    dob: DOB,
    gender: Gender,
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
        }
        
    }

    renderComponent(c) {
        const InputComponent = componentsLabels[c.id];
        return (
            <ErrorBoundary key={c.id}>
                <InputComponent  {...c} handleInput={this.handleInput}/>
            </ErrorBoundary>
        );
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
