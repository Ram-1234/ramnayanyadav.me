import React from 'react'

const Carousel = (props) => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            {props.children}
        </div>
    </div>
    )
}

export default Carousel