import React, { useEffect } from 'react'
import Aos from  "aos";
import "aos/dist/aos.css"
import Course from "./course/Courses"
import Reviewslist from "./review/Reviewslist"

function App() {

	useEffect(() => {
		Aos.init();
	}, [])
	
  return (
	<>
	<div>
 	  <Reviewslist />	
 <Course />
          
	</div>

	</>
  )
}

export default App










