import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { enterPassword, enterUsername } from '../actions';
import loginUser from '../utils/loginUser';

function LoginForm(props) {
  const navigate = useNavigate();
  const { username, password, enterPassword, enterUsername } = props;
  return (
    // <div className='row'>
    //   <div className='col s8'>
    <>
      <div className='row'>
        <div className='input-field col s3'>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => {
              enterUsername(e.target.value);
            }}
          />
          <label htmlFor='first_name'>Username</label>
        </div>

        <div className='input-field col s3'>
          <input
            type='text'
            id='password'
            onChange={(e) => enterPassword(e.target.value)}
            value={password}
          />
          <label htmlFor='password'>Password</label>
        </div>
      </div>
      <div className='row'>
        <div className='col s3'>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
            onClick={(e) => {
              e.preventDefault;
              loginUser('/api/login', { username, password }, navigate);
            }}
          >
            Login
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ login }) => {
  const { username, password } = login;
  return { username, password };
};

export default connect(mapStateToProps, { enterUsername, enterPassword })(
  LoginForm
);
