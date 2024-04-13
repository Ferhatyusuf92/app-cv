import React from "react";

const Education = () => {
  return (
    <section id='education'>
      <h2 class='primary-title text-lg'>EDUCATION</h2>
      <div class='education-group mb-4'>
        <p class='colorful-date text-sm'>30.08.2011 - 30.08.2013</p>
        <p class='secondary-title'>Helicopter Technician</p>
        <p className='text-sm'>Turkish National Defense University</p>
        <img class='education-img' src='./images/comu.png' alt='' />
      </div>
      <div class='education-group mb-4'>
        <p class='colorful-date text-sm'>01.2024 - 01.2025</p>
        <p class='secondary-title'>Backend Development</p>
        <p className='text-sm'>Noroff</p>
        <img class='education-img' src='./images/comu.png' alt='' />
      </div>
    </section>
  );
};

export default Education;
