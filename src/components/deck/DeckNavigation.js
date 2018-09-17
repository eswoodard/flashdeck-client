import React from 'react';



const DeckNavigation = () =>  {
    return (
       <div className="deck-navigation">
            <a href="#"><i class="arrow left"></i></a>
            <p className="count">1/10</p>
            <a href="#"><i class="arrow right"></i></a>
       </div>
    )
}

export default DeckNavigation;