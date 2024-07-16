import React from 'react'
import {FaSuitcase,FaBuilding,FaUsers,FaUserPlus} from 'react-icons/fa'

const HeroSection = () => {

  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <div className='heroSection'>
      <div className='container'>
<div className='title'>
  <h1> Find a job that suits </h1>
  <h1>Your interest and skills</h1>
  <p> Mention the interest and skills you have and the domain in which you want to uplift your career </p>
  </div>
  <div className='image'>
    <img src="data:image/jpeg;base64,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" alt="logo"/>
  </div>
      </div>
      <div className="details">
        {
details.map(element=>{
  return(
    <div className="card" key={element.id}>
      <div className="icon">{element.icon}</div>
      <div className="content">
<p>{element.title}</p>
<p>{element.subTitle}</p>
      </div>
    </div>
  );
})
        }
      </div>

    </div>
  )
}

export default HeroSection
