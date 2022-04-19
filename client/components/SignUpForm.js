import React from 'react';
import { connect } from 'redux';

function SignUpForm() {
  return (
    <div className='row'>
      <div className='col s8'>
        <div className='col s6 '>
          <div className='row'>
            <div className='input-field col s3'>
              <input type='text' id='first_name' />
              <label htmlFor='first_name'>First Name</label>
            </div>

            <div className='input-field col s3'>
              <input type='text' id='last_name' />
              <label htmlFor='last_name'>Last Name</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s6'>
              <input type='text' id='email' />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input type='text' id='password' />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row col s3 center'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Submit
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ signup }) => {
  const { firstName, lastName, password, email } = signup;
};

export default SignUpForm;
