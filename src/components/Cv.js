import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Certificates from './Certificates';
import Languages from './Languages';
import Skills from './Skills';
import Interests from './Interests';
import WorkExperience from './WorkExperience';

export default class Cv extends React.Component {
  render() {
    return (
      <main>
        <Header></Header>
        <div className='container-fluid px-4 pb-5'>
          <div className='row'>
            <div className='col'>
              <Summary></Summary>
              <Certificates></Certificates>
              {/* <PersonalProjects></PersonalProjects> */}
              <Languages></Languages>
            </div>
            <div className='col'>
              <Education></Education>
              <Skills></Skills>
              <WorkExperience></WorkExperience>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* <Interests></Interests> */}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
