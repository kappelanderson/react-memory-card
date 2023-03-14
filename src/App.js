import React, { useState, useEffect} from "react";
import Cards from "./Cards";
import "./index.css"
import russia from "./images/russia.png"
import argentina from "./images/argentina.png"
import australia from "./images/australia.png"
import brazil from "./images/brazil.png"
import canada from "./images/canada.png"
import china from "./images/china.png"
import france from "./images/france.png"
import germany from "./images/germany.png"
import india from "./images/india.png"
import italy from "./images/italy.png"
import japan from "./images/japan.png"
import mexico from "./images/mexico.png"
import southafrica from "./images/southafrica.png"
import spain from "./images/spain.png"
import uk from "./images/uk.png"
import us from "./images/us.png"
















function App(){
    let cardsArr = [{
        id: 0,
        name: 'Argentina',
        src: argentina,
        clicked: false
    },
    {
        id: 1,
        name: 'Australia',
        src: australia,
        clicked: false
    },
    {
        id: 2,
        name: 'Brazil',
        src: brazil,
        clicked: false
    },
    {
        id: 3,
        name: 'Canada',
        src: canada,
        clicked: false
    },
    {
        id: 4,
        name: 'China',
        src: china,
        clicked: false
    },
    {
        id: 5,
        name: 'France',
        src: france,
        clicked: false
    },
    {
        id: 6,
        name: 'Germany',
        src: germany,
        clicked: false
    },
    {
        id: 7,
        name: 'India',
        src: india,
        clicked: false
    },
    {
        id: 8,
        name: 'Italy',
        src: italy,
        clicked: false
    },
    {
        id: 9,
        name: 'Japan',
        src: japan,
        clicked: false
    },
    {
        id: 10,
        name: 'Mexico',
        src: mexico,
        clicked: false
    },
    {
        id: 11,
        name: 'Russia',
        src: russia,
        clicked: false
    },
    {
        id: 12,
        name: 'South Africa',
        src: southafrica,
        clicked: false
    },
    {
        id: 13,
        name: 'Spain',
        src: spain,
        clicked: false
    },
    {
        id: 14,
        name: 'United Kingdom',
        src: uk,
        clicked: false
    },
    {
        id: 15,
        name: 'United States',
        src: us,
        clicked: false
    },
    
]
    const [cards, setCards] = useState(() => cardsArr)
    const [score, setScore] = useState(()=> 0)
    const [bestScore, setBestScore] = useState(()=> 0)

    useEffect(() => {
        suffleCards()
      }, []);


    let suffleCards = ()=>{
        let newArr = [...cards]
        newArr.sort(()=> Math.random() - 0.5)
        setCards(newArr)
        
    }
    
    let ResetGame = ()=> {
        setScore(0)
        let newArr = [...cards]
        newArr.forEach(card => card.clicked = false)
        setCards(newArr)

    }
    let checkGameOver = (e) =>{
        let cardFound = [...cards].find((card)=> card.id == e.target.id)

        if(cardFound.clicked === true){
            if(score > bestScore){
                setBestScore(score)
            }
            ResetGame()


            console.log('game over')
        }
        else{
            let newArr = [...cards]
            newArr[newArr.indexOf(cardFound)].clicked = true
            setCards(newArr)
            suffleCards()
            setScore((prevScore) => prevScore + 1)

        }

    }
    
    return(
        <div>
            <div className="headerwrapper">
                <header>
                    <p>Score: {score}</p>
                    <p>Best Score: {bestScore}</p>
                </header>
            </div>
            <Cards cards={cards} checkGameOver={checkGameOver}/>
        </div>
    )
}

export default App