import {useState, useEffect, useCallback} from 'react'

// imgs
import Jokenpo1 from '../../assets/jokenpo1.png';
import Jokenpo2 from '../../assets/jokenpo2.png';
import Jokenpo3 from '../../assets/jokenpo3.png';


const slides = [
    {img:Jokenpo1 , title: 'paper'},
    {img:Jokenpo2 , title: 'scissors'},
    {img:Jokenpo3 , title: 'rock'},
]

const ImageSlider = ({choice}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // let time = 1000;
    let currentImageIndex = 0;
    
    const nextImage = useCallback(() =>{
        currentImageIndex++
        if(currentImageIndex >= slides.length)
            currentImageIndex = 0;
        setCurrentIndex(currentImageIndex);
    })

    const startCarousel = useCallback((time) => {


        if(time > 0){
            setInterval(()=>{
                nextImage()
             }, time)
        }
    },[nextImage])


    // const whichBox = ()=>{
    //     const buttons = document.querySelectorAll('[data-player]');
    // }

    useEffect(() => {
        if(choice === 0 ){
            window.addEventListener("load", startCarousel(1000))
        }
        if(choice > 0){
            startCarousel(0);
            setCurrentIndex(choice - 1);
            // whichBox();
        }
    }, [choice, startCarousel])
    
    return (
        <div className="carouselChoices">
            <img src={slides[currentIndex].img} alt={slides[currentIndex].title} />
        </div>
    )
}

export default ImageSlider;