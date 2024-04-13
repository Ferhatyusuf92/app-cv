import React from "react";

const WorkExperience = () => {
  return (
    <section id='work-experience'>
      <h2 class='primary-title text-lg'>WORK EXPERIENCE</h2>

      <div class='work-experience-group mb-4'>
        <p class='colorful-date text-sm'>08.2013 - 01.2019</p>
        <p class='secondary-title text-md'>Helicopter Techician</p>
        <p class='m-0 text-sm'>Turkısh Navy Force</p>
        <img
          class='work-experience-img'
          src='./images/impact-hub.png'
          alt=''
          style={{ width: "50px" }}
        />
      </div>
    </section>
  );
};

export default WorkExperience;
