import React from "react";

const Languages = () => {
  return (
    <section id='languages'>
      <h2 class='primary-title text-lg'>LANGUAGES</h2>

      <div class='row mb-2 align-items-center'>
        <div class='col-3 text-sm language'>Turkish</div>
        <div class='col-5'>
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
        </div>
      </div>

      <div class='row mb-2 align-items-center'>
        <div class='col-3 text-sm language'>English</div>
        <div class='col-5'>
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' />
          <input class='form-check-input' type='checkbox' />
        </div>
      </div>

      <div class='row mb-2 align-items-center'>
        <div class='col-3 text-sm language'>Norwegian</div>
        <div class='col-5'>
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' checked />
          <input class='form-check-input' type='checkbox' />
          <input class='form-check-input' type='checkbox' />
          <input class='form-check-input' type='checkbox' />
        </div>
      </div>
    </section>
  );
};

export default Languages;
