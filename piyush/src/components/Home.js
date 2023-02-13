import React from 'react'
import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>

        <motion.h1  
        animate={{opacity:1,scale:1.2}} 
         initial={{opacity:0}}  
         transition={{delay:0.4,duration:5,repeat:Infinity}}  style={{color:'lightgreen'}}> <b>Hi, I'm Piyush Sinha,Machine Learning Enthusiast</b></motion.h1><hr/>
        <p style={{color:'white'}}>Machine Learning/React js/C++/NLP</p>
  <NavLink to="/Contact"><motion.button  whileHover={{scale:1.2}} className='btn btn-light'>contact me!</motion.button></NavLink>
    <Outlet/>  
<hr></hr>
    <h3 style={{fontSize:"2em", color:'white'}}>My Skills:</h3>
    
    <div class="container-sm" style={{color:'white'}}>
    
   


    <div class="container text-center">
  <div class="row">
    <div class="col">
    

    <center><motion.table whileHover={{scale:1.1}} style={{color:'white', border:'0.1rem solid green'}}>
    
    <tr>
    <th style={{color:'lightgreen'}}>Skill</th>
    <th  style={{color:'lightgreen'}}>Level</th>
    <th style={{color:'lightgreen'}}>Experience</th>
    </tr>


    <tr>
      <td>Machine Learning</td>
      <td>Beginner</td>
      <td>1 years</td>
    </tr>

    <tr>
      <td>React Js</td>
      <td>Beginner</td>
      <td>0.5 years</td>
    </tr>

    <tr>
      <td>C++</td>
      <td>Intermediate</td>
      <td>2 years</td>
      <td></td>
    </tr>

    <tr>
      <td>Python</td>
      <td>Intermediate</td>
      <td>2 years</td>
    </tr>
    <tr>
      <td>Html</td>
      <td>Beginner</td> 
      <td>2 years</td>
    </tr>

    <tr>
      <td>Css</td>
      <td>Beginner</td>
      <td>2 years</td>
    </tr>
    
    
    

    </motion.table></center><hr style={{color:'lightgreen'}}></hr>


    </div>
    <div class="col">
      <motion.img  whileHover={{scale:1.1}} src='piyush image.jpeg' className='img-thumbnail' style={{borderRadius:"50%",height:'25rem'}}></motion.img>
    </div>

  </div>
</div>
</div>

{/** projects*/}
<h3   style={{fontSize:"2em", color:'white'}}>My Projects:</h3>
<center><div class="container text-center" style={{color:'lightgreen'}}>

  <div class="row">
    <div class="col" >
      <NavLink to='https://github.com/piyush5432/Sentiment_analysis_of_tweet
s'><motion.h3  whileHover={{color:'yellow'}} animate={{scale:1.2}} transition={{duration:0.3 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Sentiment_analysis_of_tweets</motion.h3></NavLink>
     <NavLink to='https://github.com/piyush5432/Sentiment_analysis_of_tweet
s'><motion.img whileHover={{scale:1.1}} src='twitter.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      <motion.p whileHover={{color:'yellow'}}>An NLP-based System for Analyzing the Sentiments of tweets
on Twitter.</motion.p>
    </div>
    </div>
  </div>

  <div class="row">
    <div class="col" >
      <NavLink to='https://piyushsinhamoviesite.netlify.app/'><motion.h3  whileHover={{color:'yellow'}} animate={{scale:1.2}} transition={{duration:0.3 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Movie Website (imdb clone)</motion.h3></NavLink>
     <NavLink to='https://piyushsinhamoviesite.netlify.app/'><motion.img whileHover={{scale:1.1}} src='movie.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      <motion.p whileHover={{color:'yellow'}}>Frontend of IMDB clone Using reactjs and css and using
NETFLIX for UI as inspiration.</motion.p>
    </div>
    </div>
  </div>

  <div class="row">
    <div class="col" >
      <NavLink to='https://github.com/piyush5432/Fake_News_-detection'><motion.h3  whileHover={{color:'yellow'}} animate={{scale:1.2}} transition={{duration:0.3 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Fake News Detection</motion.h3></NavLink>
     <NavLink to='https://github.com/piyush5432/Fake_News_-detection'><motion.img whileHover={{scale:1.1}} src='fake news.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      <motion.p whileHover={{color:'yellow'}}>An ML model for detecting Fake News, Using Pipelining with a
Max accuracy of 99.5 using decision tree and gradient
boosting.</motion.p>
    </div>
    </div>
  </div>

  <div class="row">
    <div class="col" >
      <NavLink to='https://github.com/piyush5432/techathon.git'><motion.h3  whileHover={{color:'yellow'}} animate={{scale:1.2}} transition={{duration:0.3 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Reverse image Search</motion.h3></NavLink>
     <NavLink to='https://github.com/piyush5432/techathon.git'><motion.img whileHover={{scale:1.1}} src='reverse.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      <motion.p whileHover={{color:'yellow'}}>A machine learning model for Image search and recognizing
the correct image. Used OpenCV for image recognition</motion.p>
    </div>
    </div>
  </div>


  
</div></center>
    </div>
  )
}
