import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateDate,
  updateTitle,
  updateDesc,
  updateTech,
  updateStatus,
} from '../actions';
import createProject from '../utils/createProject';

function ProjectForm(props) {
  const navigate = useNavigate();
  const {
    title,
    description,
    technologies,
    status,
    date,
    updateTitle,
    updateDate,
    updateDesc,
    updateTech,
    updateStatus,
  } = props;
  const userId = localStorage.getItem('id');
  return (
    <div className='row'>
      <div className='row'>
        <div className='input-field col s9'>
          <input
            id='title'
            type='text'
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
          />
          <label htmlFor='title'>Title</label>
        </div>
        <div className='input-field col s3'>
          <input
            id='date'
            type='text'
            className='datepicker'
            value={date}
            onChange={(e) => updateDate(e.target.value)}
          />
          <label htmlFor='date'>Date</label>
        </div>
      </div>

      <div className='row'>
        <div className='input-field col s12'>
          <input
            id='tech'
            type='text'
            value={technologies}
            onChange={(e) => updateTech(e.target.value)}
          />
          <label htmlFor='tech'>Tech</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <textarea
            id='desc'
            className='materialize-textarea'
            data-length='500'
            value={description}
            onChange={(e) => updateDesc(e.target.value)}
          ></textarea>
          <label htmlFor='desc'>Description</label>
        </div>
      </div>

      <div className='row col s3'>
        <button
          className='btn waves-effect waves-light'
          type='submit'
          name='action'
          onClick={(e) => {
            e.preventDefault;
            createProject(
              userId,
              { title, description, technologies, status, date },
              navigate
            );
          }}
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = ({ form }) => {
  const { title, description, technologies, status, date } = form;
  return { title, description, technologies, status, date };
};

export default connect(mapStateToProps, {
  updateDate,
  updateTitle,
  updateDesc,
  updateStatus,
  updateTech,
})(ProjectForm);
