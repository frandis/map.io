import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  updateFirstName,
  updateLastName,
  updateUsername,
  updatePassword,
} from '../actions';

import createUser from '../utils/createUser';

function SignUpForm(props) {
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    username,
    password,
    updateFirstName,
    updateLastName,
    updateUsername,
    updatePassword,
  } = props;
  const isFormFilledOut = [firstName, lastName, username, password].every(
    (el) => el !== ''
  );
  return (
    <div className='row'>
      <div className='col s8'>
        <div className='col s6 '>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                id='first_name'
                value={firstName}
                onChange={(e) => {
                  updateFirstName(e.target.value);
                }}
              />
              <label htmlFor='first_name'>First Name</label>
            </div>

            <div className='input-field col s3'>
              <input
                type='text'
                id='last_name'
                onChange={(e) => updateLastName(e.target.value)}
                value={lastName}
              />
              <label htmlFor='last_name'>Last Name</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s6'>
              <input
                id='username'
                type='text'
                onChange={(e) => updateUsername(e.target.value)}
                value={username}
              />
              <label htmlFor='username'>Username</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                type='text'
                id='password'
                onChange={(e) => updatePassword(e.target.value)}
                value={password}
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row col s3 center'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
              disabled={!isFormFilledOut}
              onClick={(e) => {
                e.preventDefault;
                createUser(
                  '/api/signup',
                  {
                    firstName,
                    lastName,
                    username,
                    password,
                  },
                  navigate
                );
              }}
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
  const { firstName, lastName, username, password } = signup;
  return { firstName, lastName, username, password };
};

// export default SignUpForm;
export default connect(mapStateToProps, {
  updateFirstName,
  updateLastName,
  updateUsername,
  updatePassword,
})(SignUpForm);
