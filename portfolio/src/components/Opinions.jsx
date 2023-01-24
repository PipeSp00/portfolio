import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import contact from '../multimedia/contact.svg'
import opinion1 from '../multimedia/opinion1.jpg'
import opinion2 from '../multimedia/opinion2.jpg'
import opinion3 from '../multimedia/opinion3.jpg'
import { OpinionsCard } from "./OpinionsCard";



export const Opinions = () => {

    return (
<div>
        <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={4000} stopOnHover={true} showThumbs={false}>
           <OpinionsCard/>
        </Carousel>
    </div>
    )
    
}