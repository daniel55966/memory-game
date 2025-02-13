import PropTypes from 'prop-types';
import { data } from '../data/data';
import Option from './Option';

export default function Select({ handleChange }) {
  const selectEl = Object.entries(data).map(([key, value]) => (
    <div className="form__inner-wrapper" key={key}>
      <label htmlFor={key}>Select a {key}</label>
      <select
        name={key}
        id={key}
        onChange={handleChange}
      >
        <Option valueArray={value} />
      </select>
    </div>
  )
  );

  return <>{selectEl}</>
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired
}