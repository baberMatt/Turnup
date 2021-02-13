import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "./style.css"
import wb1 from '../../assets/wolfboy1.png'
import taco from '../../assets/taco2.png'
import sugar from '../../assets/sugarsmoke.png'



const Carousell = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  let random = Math.floor(Math.random() * 10); 
  let carouselBrowse = [];
  carouselBrowse.push(props.browse[random])
  carouselBrowse.push(props.browse[random])
  carouselBrowse.push(props.browse[random])
  console.log(carouselBrowse)

  
  const items = [
    {
      src: wb1,
      altText: 'Slide 1',
      caption: ''
    },
    {
      src: taco,
      altText: 'Slide 2',
      caption: ''
    },
    {
      
      src: sugar,
      altText: 'Slide 3',
      caption: ''
    }
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        
        <img  src={item.src} alt={item.altText} />
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carousell;


