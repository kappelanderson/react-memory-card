import React, { useState, useEffect} from "react";
import Cards from "./Cards";
import "./index.css"

function App(){
    let cardsArr = [{
        id: 0,
        name: 'Argentina',
        src: 'http://hoster2.onlinebadgemaker.com/2b171b9a1cd6daaf17d9815c8db7cd8650c865fa85af3.png',
        clicked: false
    },
    {
        id: 1,
        name: 'Australia',
        src: 'http://hoster2.onlinebadgemaker.com/9451dbe2d8633986b971c71f6c1af0b250c868637d5d6.png',
        clicked: false
    },
    {
        id: 2,
        name: 'Brazil',
        src: 'http://hoster2.onlinebadgemaker.com/ceafdfa17b205021972ce87a9e5de94450c871e7daedc.png',
        clicked: false
    },
    {
        id: 3,
        name: 'Canada',
        src: 'http://hoster2.onlinebadgemaker.com/370470a40eca01be258c8a53e2fa1d9050c8772797d60.png',
        clicked: false
    },
    {
        id: 4,
        name: 'China',
        src: 'http://hoster2.onlinebadgemaker.com/f4de52e82d2f93a7508e5499e5d5302b50c8799ed25fa.png',
        clicked: false
    },
    {
        id: 5,
        name: 'France',
        src: 'http://hoster2.onlinebadgemaker.com/406b17b2f687f47647d84b86e357b1d250c886f067212.png',
        clicked: false
    },
    {
        id: 6,
        name: 'Germany',
        src: 'http://hoster2.onlinebadgemaker.com/5a2891e590cdb82adf9c1bcc168e493150c8894dbf10d.png',
        clicked: false
    },
    {
        id: 7,
        name: 'India',
        src: 'http://hoster2.onlinebadgemaker.com/eabd863fc9d50f8a12e082397a32584450c88ed654126.png',
        clicked: false
    },
    {
        id: 8,
        name: 'Italy',
        src: 'http://hoster2.onlinebadgemaker.com/8dc55fd05846082262846857b13c673c50c8919880a6b.png',
        clicked: false
    },
    {
        id: 9,
        name: 'Japan',
        src: 'http://hoster2.onlinebadgemaker.com/b77a67600a27909296c75e2cb0a92a3450c892322dbb5.png',
        clicked: false
    },
    {
        id: 10,
        name: 'Mexico',
        src: 'http://hoster2.onlinebadgemaker.com/5a80c06cb9190012d04e2bae8010040450c8a392a5d73.png',
        clicked: false
    },
    {
        id: 11,
        name: 'Russia',
        src: 'http://hoster2.onlinebadgemaker.com/7a8ab087450fe97f56e6df9a200a11b950ca117253be4.png',
        clicked: false
    },
    {
        id: 12,
        name: 'South Africa',
        src: 'http://hoster2.onlinebadgemaker.com/76e5f5d564ca36320608062cfe88a79650ca15af535bf.png',
        clicked: false
    },
    {
        id: 13,
        name: 'Spain',
        src: 'http://hoster2.onlinebadgemaker.com/a4f46601053685cb0b265798f860e71a50ca16c72ab9e.png',
        clicked: false
    },
    {
        id: 14,
        name: 'United Kingdom',
        src: 'http://hoster2.onlinebadgemaker.com/3e70ea9d62d3af9b9513a562e575c3e350cb5fa9d65a4.png',
        clicked: false
    },
    {
        id: 15,
        name: 'United States',
        src: 'http://hoster2.onlinebadgemaker.com/02fd40cf4ff9c4864af235734fae67d050cb6005aec8f.png',
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