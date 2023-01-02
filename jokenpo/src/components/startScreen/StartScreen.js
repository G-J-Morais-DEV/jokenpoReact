import './StartScreen.css'

// imgs
import Jokenpo1 from '../../assets/jokenpo1.png'
import Jokenpo2 from '../../assets/jokenpo2.png'
import Jokenpo3 from '../../assets/jokenpo3.png'

const StartScreen = () => {
  return (
    <div className="gameStart">
        <h1>Jokenpo</h1>
        <button>Novo Jogo</button>
        <div className="containerGame">
            <div className="playerOneBox">
                <div className="carouselChoices">
                    <img src={Jokenpo1} alt="paper" />
                    <img src={Jokenpo2} alt="scissors" />
                    <img src={Jokenpo3} alt="rock" />
                </div>
                <button className='buttonPlayer'>Player 1</button>
            </div>
            <div className="playerTwoBox">
                <div className="carouselChoices">
                    <img src={Jokenpo1} alt="paper" />
                    <img src={Jokenpo2} alt="scissors" />
                    <img src={Jokenpo3} alt="rock" />
                </div>
                <button className='buttonPlayer'>Player 2</button>
            </div>
        </div>
    </div>
  )
}

export default StartScreen