import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) => (
  <fieldset className="form__fieldset">
    <legend className="form__label form__label--legend form__label--legend-top">{props.title}</legend>
    <div className="form__wrapper">
      <div>
        {props.options.map(o => {
          return (
            <label className="form__label form__label--radio" key={o}>
              <input className="form__radio" name={props.name} onChange={props.func} value={o} checked={props.selectedOption.indexOf(o) > -1} type={props.type} /> {o}
            </label>
          );
        })}
      </div>
    </div>
  </fieldset>
);

RadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  selectedOption: PropTypes.string
}

export default RadioGroup;
