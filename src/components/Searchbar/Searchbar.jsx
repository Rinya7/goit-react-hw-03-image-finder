import {
  SearchbarCss,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
const { Component } = require('react');

class Searchbar extends Component {
  render() {
    return (
      <SearchbarCss>
        <SearchForm>
          <SearchFormBtn type="submit">
            <FcSearch></FcSearch>
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarCss>
    );
  }
}

export { Searchbar };
