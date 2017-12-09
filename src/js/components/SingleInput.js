import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
  <div>
    <label>{props.title}</label>
    <input name={props.name} type={props.inputType} value={props.content} onChange={props.func} placeholder={props.placeHolder} />
  </div>
);

SingleInput.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default SingleInput;
