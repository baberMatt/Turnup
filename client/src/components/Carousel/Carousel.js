import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "./style.css"
import placeholder from '../../assets/4short.png'



const Carousell = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [carouselEvents, setCarouselEvents] = useState([ {eventName: "none", images: {banner: ""}, briefDetails: ""}])

  let random = Math.floor(Math.random() * 10);
  let carouselBrowse = [];
  carouselBrowse.push(props.browse[random])
  carouselBrowse.push(props.browse[random])
  carouselBrowse.push(props.browse[random])

  const items = [
    {
      src: "",
      altText: 'Slide 1',
      caption: ''
    },
    {
      src: "",
      altText: 'Slide 2',
      caption: ''
    },
    {

      src: "",
      altText: 'Slide 3',
      caption: ''
    }
  ];

  useEffect(() => {
    let eventRating = props.browse.map((item) => { return item.attendees.length })
    let topValues = [...eventRating].sort((a, b) => b - a).slice(0, 3);
    let eventsForCarousel = props.browse.filter(item => item.attendees.length >= topValues[2])
    if (eventsForCarousel.length) {
    setCarouselEvents(eventsForCarousel)
    }
  }, [props.browse])


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === carouselEvents.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? carouselEvents.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = carouselEvents.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {item.images.banner !== "none" ? <img style={{ height: "50vh", objectFit: "cover" }} id="bannerImage" src={'../../../uploads/eventImage/' + item.images.banner} /> : <img id="bannerImage" src={placeholder} />}
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (

    <div id="carouselOver">
      <div id="carouselText">
        <a href={'/event/' + carouselEvents[activeIndex].eventString} > <h1 className="display-1 text-right mx-3">{carouselEvents[activeIndex].eventName}</h1> </a>
        <p className="text-right mr-4">{carouselEvents[activeIndex].briefDetails}</p>
      </div>

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
    </div>
  );
}

export default Carousell;


