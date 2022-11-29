import React from "react";

function Cards(props){


    return(
        <div className="cards">
            {props.cards.map((card)=> {
                return(
            <>
            <img src={card.src} key={card.id} id={card.id} onClick={props.checkGameOver}/>
            </>)}
            )}
        </div>
    )
}
export default Cards