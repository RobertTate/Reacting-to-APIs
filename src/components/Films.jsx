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
                    <button
                        type="button"
                        className="btn btn-primary btn-lg align-items-center"
                        onClick={(event) => { this.setState({ buttonOn: false }) }}
                    >Films Loaded!</button>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {this.state.films.map((film) =>
                                    <Card key={film.id} film={film} />
                                )}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <button type="button"
                        className="btn btn-primary btn-lg align-self-center"
                        onClick={(event) => { this.setState({ buttonOn: true }) }}
                    >Load Films</button>
                </Fragment>
            )
        }

    }
}


export default Films;


