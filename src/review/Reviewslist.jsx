import React from 'react'
import SlideHead from './SlideHead'
import Cutting from './Cutting'
import Cardreview from "./Cardreview"
import Pslider from "./Pslider"
import Cslider from "./Cslider"
import Color from './Color';
import Play from "./Play"
import Player from "./Player"
import Footerb from '../course/Footerb'
import Footertop from '../course/Footertop'
function Reviewslist() {
  return (

    <>
    <div>
    <SlideHead />
	<Play />
	<Cutting />  
    <Player />
	<Cardreview />
    <Pslider />
	<Cslider />
	<Color />
	<Footertop />
	<Footerb /> 
    </div>

    </>
  )
}

export default Reviewslist