import React from "react";

const Interests = () => {
  return (
    <section id='interests'>
      <h2 class='primary-title text-lg'>INTERESTS</h2>

      <div class='row mb-2'>
        <div class='col-4 text-sm interest'>Cycling</div>
        <div class='col-5'>
          <i class='fas fa-bicycle'></i>
        </div>
      </div>

      <div class='row mb-2'>
        <div class='col-4 text-sm interest'>Football</div>
        <div class='col-5'>
          <i class='fas fa-basketball-ball'></i>
        </div>
      </div>

      <div class='row mb-2'>
        <div class='col-4 text-sm interest'>Table Tennis</div>
        <div class='col-5'>
          <i class='fas fa-table-tennis'></i>
        </div>
      </div>

      <div class='row mb-2'>
        <div class='col-4 text-sm interest'>Hiking</div>
        <div class='col-5'>
          <i class='fas fa-hiking'></i>
        </div>
      </div>

      <div class='row mb-2'>
        <div class='col-4 text-sm interest'>Rubik's Cube</div>
        <div class='col-5'>
          <i class='fas fa-cubes'></i>
        </div>
      </div>
    </section>
  );
};

export default Interests;
