import React from 'react';
import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);

  const handleFilterChange = event =>
    dispatch(getFilters(event.currentTarget.value));

  return (
    <Label>
      Filter by name
      <Input type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};

export default Filter;
