import React from 'react';



const DeckNavigation = (props) =>  {
    return (
       <div className="deck-navigation">
            <a href="#">
                <i className="material-icons arrow">
                arrow_back_ios
                </i>
            </a>
            <p className="count">1/{props.cardNumber}</p>
            <a href="#">
                <i className="material-icons arrow">
                arrow_forward_ios</i>
            </a>
       </div>
    )
}

export default DeckNavigation;