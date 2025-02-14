import React, { useEffect } from 'react'
import Aos from  "aos";
import "aos/dist/aos.css"
import Footerb from './Footerb';
import Footertop from "./Footertop"
import Model from './Model';
import Syllabus from './Syllabus'
import Choose from './Choose';

function App() {
	useEffect(() => {
		Aos.init();
	}, [])
  return (
	<>
	<div>
		 <Model /> 
		 <Choose />
		 <Syllabus />
		 <Footertop />
		<Footerb /> 
	</div>

	</>
  )
}

export default App
