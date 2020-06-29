/* eslint-disable */
import React from 'react';
import './form.style.css';

const Form = props => {
  return (
    <div className='container'>
      <div>{props.error ? err() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className='row'>
          <div className='col-md-3 offset-md-2'>
            <input
              type='text'
              className='form-control'
              name='city'
              autoComplete='off'
              placeholder='Type city name'
            />
          </div>
          <div className='col-md-3'>
            <input
              type='text'
              className='form-control'
              name='country'
              autoComplete='off'
              placeholder='Type country name'
            />
          </div>
          <div className='col-md-3 mt-md-0 py-2 text-md-left'>
            <button className='btn btn-warning b'>Search </button>
          </div>
        </div>
      </form>
    </div>
  );
};

function err() {
  return (
    <div className='alert alert-danger mx-5' role='alert'>
      Please fill out the city and country names
    </div>
  );
}

export default Form;
