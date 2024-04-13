import React from "react";

const Header = () => {
  return (
    <header>
      <div id='top-color'></div>
      <div id='header-details'>
        <div class='container-fluid px-4'>
          <div class='row'>
            <div id='header-fullname' class='col-5'>
              <h1>Ferhat Yusuf Bodur</h1>
              <p class='full-name'>Frontend Developer</p>
            </div>
            <div id='header-img' class='col-2'>
              <img src='ferhat.png' alt='' />
            </div>
            <div id='header-contact' class='col-5'>
              <div class='header-contact-group'>
                <span className='text-sm'>ferhatysuf92@gmail.com</span>
                <i class='fas fa-envelope-open-text'></i>
              </div>
              <div class='header-contact-group'>
                <span className='text-sm'>+4792254098</span>
                <i class='fas fa-phone-alt'></i>
              </div>
              <div class='header-contact-group'>
                <span className='text-sm'>Norway</span>
                <i class='fas fa-map-marker-alt'></i>
              </div>
              <div class='header-contact-group'>
                <span className='text-sm'>
                  www.linkedin.com/in/ferhat-bodur-151364243
                </span>
                <i class='fab fa-linkedin'></i>
              </div>
              <div class='header-contact-group'>
                <span className='text-sm'>
                  https://github.com/Ferhatyusuf92
                </span>
                <i class='fab fa-github'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
