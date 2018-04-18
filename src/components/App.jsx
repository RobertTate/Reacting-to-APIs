import React, { Component } from 'react';
import Films from './Films';
import People from './People';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="card-img-top" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli" />
                <Films />
                <People />
            </React.Fragment>
        );
    }
}


export default App;


