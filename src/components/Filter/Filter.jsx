import {
  FilterWrapper,
  FilterLabel,
  FilterInput,
  SearchIcon,
} from './Filter.styled';
import sprite from '../../img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { chageFilter } from 'redux/phonebookSlice';

const searchIcon = `${sprite}#icon-search`;

export const Filter = () => {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { value } }) => {
    dispatch(chageFilter(value));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        onChange={handleChange}
        value={filter}
        name="filter"
        placeholder="Search"
        id="filter"
      />
      <SearchIcon width="32" height="32">
        <use href={searchIcon}></use>
      </SearchIcon>
    </FilterWrapper>
  );
};
