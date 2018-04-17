import React from 'react';

const styles = {
    width: '18rem'
};

const Card = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="card" style={styles}>
                    <img className="card-img-top" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli" />
                    <div className="card-body">
                        <h5 className="card-title">{props.film.title}</h5>
                        <p className="card-text">{props.film.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
};


export default Card;




