import React from 'react';
import PropTypes from 'prop-types';

const DropDown = (props) => (
    <select className="form__select" name={props.name} value={props.selectedOption} onChange={props.func}>
      <option className="form__option" value="">{props.placeHolder}</option>
        {props.options.map(o => {
          return (
            <option className="form__option" key={o} value={o}>{o}</option>
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
