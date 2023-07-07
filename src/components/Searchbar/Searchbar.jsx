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
  state = {
    searchWord: '',
  };
  handleInputSearch = evt => {
    const { value } = evt.currentTarget;
    this.setState({
      searchWord: value,
    });
  };
  hundelSearchSubmit = evt => {
    evt.preventDefault();
    this.props.handleSearch(this.state);

    this.setState({
      searchWord: '',
    });
  };
  render() {
    return (
      <SearchbarCss>
        <SearchForm onSubmit={this.hundelSearchSubmit}>
          <SearchFormBtn type="submit">
            <FcSearch></FcSearch>
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            value={this.value}
            placeholder="Search images and photos"
            onChange={this.handleInputSearch}
          />
        </SearchForm>
      </SearchbarCss>
    );
  }
}

export { Searchbar };
