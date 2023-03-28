import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onHandleInputChange }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={filter}
          onChange={onHandleInputChange}
        />
      </Label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onHandleInputChange: PropTypes.func.isRequired,
};
