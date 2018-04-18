import React from 'react';

const styles = {
    width: '18rem',
};

const Peoplecard = (props) => {

    return (

        <div className="card" style={styles}>
            <img className="card-img-top" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli" />
            <div className="card-body">
                <h5 className="card-title">{props.people.name}</h5>
                <p className="card-text">Age: {props.people.age}</p>
                <p className="card-text">Gender: {props.people.gender}</p>
                <a href={props.people.url} className="btn btn-primary" target="_blank">Info Page</a>
            </div>
        </div>


    )
};


export default Peoplecard;
