import { useState } from 'react';

//css
import './StartScreen.css'

//components
import ImageSlider from './ImageSlider';


const StartScreen = () => {

    const [choice, setChoice] = useState(0)

    const handlePlayerButton = (e) => {

        console.log(e)

        var randomChoice = Math.floor((Math.random() * 3) + 1);
        setChoice(randomChoice)
    }


    return (
        <div className="gameStart">
            <h1>Jokenpo</h1>
            <button>Novo Jogo</button>
            <div className="containerGame">
                <div className="playerOneBox" data-box="1">
                        <ImageSlider choice={choice}/>                    
                    <button className='buttonPlayer' data-player="1" onClick={handlePlayerButton}>Player 1</button>
                </div>
                <div className="playerTwoBox">
                        <ImageSlider choice={choice}/>
                    <button className='buttonPlayer' data-player="2" onClick={handlePlayerButton}>Player 2</button>
                </div>
            </div>
        </div>
    )
}

export default StartScreen