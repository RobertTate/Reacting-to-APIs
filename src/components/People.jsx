import React, { Component, Fragment } from 'react';
import Peoplecard from './Peoplecard';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peoples: [],
            buttonOn: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((result) => result.json())
            .then((peoples) => {
                this.setState({
                    peoples
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
                    >People Loaded!</button>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {this.state.peoples.map((people) =>
                                    <Peoplecard key={people.id} people={people} />
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
                    >Load People</button>
                </Fragment>
            )
        }

    }
}


export default People;
