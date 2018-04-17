import React, { Component, Fragment } from 'react';
import Card from './Card';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            buttonOn: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((result) => result.json())
            .then((films) => {
                this.setState({
                    films
                })
            });
    };


    render() {
        if (this.state.buttonOn === true) {
            return (
                <Fragment>
                    <img className="card-img-top" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli" />
                    <button 
                    type="button" 
                    className="btn btn-primary btn-lg"
                    onClick={(event) => { this.setState({ buttonOn: false }) }}
                    >Films Loaded!</button>
                    {this.state.films.map((film) =>
                        <Card key={film.id} film={film} />
                    )}
                </Fragment>
            )
        } else {
            return (
            <Fragment>
                <img className="card-img-top" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli" />
                <button type="button" 
                className="btn btn-primary btn-lg"
                onClick={(event) => { this.setState({ buttonOn: true }) }}
                >Load Films</button>
            </Fragment>
            )
        }

    }
}


export default Films;


