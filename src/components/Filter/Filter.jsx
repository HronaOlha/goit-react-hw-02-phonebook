const Filter = ({ filter, onHandleInputChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={filter}
          onChange={onHandleInputChange}
        />
      </label>
    </>
  );
};

export default Filter;
