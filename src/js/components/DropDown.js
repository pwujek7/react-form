import React from 'react';
import PropTypes from 'prop-types';

const DropDown = (props) => (
    <select name={props.name} value={props.selectedOption} onChange={props.func}>
      <option value="">{props.placeHolder}</option>
      {props.options.map(o => {
        return (
          <option key={o} value={o}>{o}</option>
        );
      })}
    </select>
);

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  selectedOption: PropTypes.string,
  func: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default DropDown;
