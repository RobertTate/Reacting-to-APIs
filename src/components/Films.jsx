import React, { Component, Fragment } from 'react';
import Card from './Card';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
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
        return (
            <Fragment>
                {this.state.films.map((film) =>
                    <Card key={film.id} film={film} />
                )}
            </Fragment>
        )
    }
}


export default Films;


