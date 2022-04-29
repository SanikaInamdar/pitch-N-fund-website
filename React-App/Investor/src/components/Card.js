import React from "react";
// import More from '../img/more.svg';
import Wishlist from '../img/wishlist.svg';
import Graph from './Graph'

function Card(props) {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <p className="card-text ask">Ask : {props.ask}</p>
                <p className="card-text equity">Equity : {props.equity}</p>
                <div className="button-container">
                    <button className="btn btn-primary">Invest</button>
                    {/* <img className="button" src={More} alt="" /> */}
                    <img className="button" src={Wishlist} alt="" />
                </div>
            </div>
            <div className="chart-container">
                <Graph equity={props.equity}/>
            </div>
        </div>
    );
}

export default Card;