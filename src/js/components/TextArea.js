import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (
  <div>
    <label>{props.title}</label>
    <textarea name={props.name} value={props.content} onChange={props.func} rows={props.rows} placeholder={props.placeHolder} />
  </div>
);

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired,
  placeHolder: PropTypes.string
}

export default TextArea;
