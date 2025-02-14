import React from 'react'
import { Button, Grid, Typography,} from '@mui/material'
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { VscChevronRight } from "react-icons/vsc";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import  logo from "../assets/logo.png"
import Download from "../assets/Download.png"
import playstore from "../assets/playstore.png"


function Footertext() {

  return (

    <div className=' back main h-[40vh] w-[100%]  border-t-2 border-orange-500 -ml-12'>
    <Grid className='flex gap-16 justify-center back '>

<Grid className='mt-2 ml-14 text-gray-500 text-base'>
<div className=' flex gap-2 mt-3 h-[15vh] w-[40vh]'><img src={logo} className="h-[100%] w-[100%]" alt="" /></div>

<div className=' flex gap-2 mt-3 w-[47vh]'>Enroll in our free program at Zinmatt and<br />gain valuable skills in digital marketing,<br />website development, graphics designing, <br />and Facebook Ads. Unlock the door to <br />limitless possibilities in the digital realm – <br />start your learning journey with us today!</div>
</Grid>

<Grid className='mt-4 '>
<Typography className=" font-bold text-2xl" variant='p'>Quick Links</Typography>
 <div className='flex gap-2 mt-3'> <span>Download the App</span></div>
 <div className='flex gap-2 mt-3'> <span>About Us</span></div>
 <div className='flex gap-2 mt-3'> <span>Contact</span></div>
 <div className='flex gap-2 mt-3'> <span>Privacy Policy</span></div>
 <div className='flex gap-2 mt-3'> <span>Terms Condition</span></div>
 <div className='flex gap-2 mt-3'> <span>Disclaimer</span></div>
</Grid>

<Grid className='mt-4'>
<Typography className=" font-bold text-xl " variant='p'>Contact Info</Typography>
<div className=' flex gap-2 mt-3'><SlLocationPin className='mt-1.5 text-lg' /><span>Gate No:-7, Regent 
    Theatre,The<br />Hub, 3rd Floor Besides, Near<br />Gandhi Maidan Rd, Patna, Bihar <br />800004 </span></div>
<div className='flex gap-2 mt-3'><TfiEmail className='mt-1.5 text-lg' /><span>Support@zinmatt.com</span></div>
<div className='flex gap-2 mt-3 '><LuPhoneCall className='mt-1.5 text-lg' /><span>+91-8969353544</span></div>
</Grid>

<Grid className='mt-4'>
<Typography className=" font-bold  text-xl " variant='p'>Download Zinmatt App</Typography>
<div className='flex gap-2 mt-3 h-[15vh] w-[16vh]'><img src={Download} className='h-[100%] w-[100%]' alt="" /></div>
<div className='flex gap-2 mt-3 h-[6vh] w-[17vh]'><img src={playstore} className="h-[100%] w-[100%]" alt="" /></div>
</Grid>

</Grid>
        </div>
  )
}

export default Footertext