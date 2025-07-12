import React from 'react'
import Card from './Card'

const Potfolio = () => {
  return (
    <>

    <h1 style={{letterSpacing:"1.2px", marginTop:"10rem"}} className='text-center'>Portfolio</h1>
      <div style={{display:"flex",justifyContent:"center"}} className="main mt-5">
      <div className='box'>
        
        <Card deploy='https://chat-7ia2.onrender.com' github ='https://github.com/aryan21231212/Chat' h1='Chat' p='Chatting website for real-time user-to-user conversations.'></Card>
        <Card deploy='https://code-reviewer-sz77.vercel.app' github ='https://github.com/aryan21231212/code-reviewer' h1='code-reviewer' p='AI-powered website for instant code review using the Gemini API.'></Card>
        <Card deploy='https://wanderlust-iw5c.onrender.com/listings' github ='https://github.com/aryan21231212/wanderlust' h1='wanderlust' p='Travel listing website to explore and book destinations.'></Card>
        <Card deploy='https://chat-bot-phi-ebon.vercel.app' github ='https://github.com/aryan21231212/chatBot' h1='chatBot' p='AI chatbot website for interactive, human-like conversations.'></Card>
        <Card deploy='https://realtime-device-track-buny.onrender.com' github ='https://github.com/aryan21231212/Realtime-device-track' h1='Device-track' p='Real-time web app for live tracking of connected devices.'></Card>
        <Card deploy='https://voting-website-for-elections.onrender.com' github ='https://github.com/aryan21231212/voting-website-for-elections' h1='voting-website' p='Online platform for secure and transparent election voting.'></Card>
      </div>
      
    </div>
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
    <button className='mb-5 work-btn'>
      <a style={{textDecoration:"none"}} href="https://github.com/aryan21231212">Show more!</a></button>
    </div>
    
    </>
    

  )
}

export default Potfolio