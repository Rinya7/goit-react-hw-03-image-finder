import { Searchbar } from '../Searchbar/Searchbar';
import { RotatingSquare } from 'react-loader-spinner';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Component } from 'react';
import { getFromApi } from '../../api/api';
import { Modal } from 'components/Modal/Modal';
//import axios from 'axios';

class App extends Component {
  state = {
    page: 1,
    searchWord: '',
    loader: false,
    loaderMore: false,
    totalPictures: null,
    error: null,
    pictures: [],
    modalId: null,
    isEmpty: false,
  };

  componentDidUpdate = (_, prevState) => {
    const { searchWord, page } = this.state;

    console.log(prevState.searchWord);
    console.log(prevState.page);
    console.log(searchWord);
    console.log(page);
    if (prevState.searchWord !== searchWord || prevState.page !== page) {
      this.sendSearchToApi(searchWord, page);
    }
  };

  sendSearchSubmit = ({ searchWord }) => {
    this.setState({
      searchWord: searchWord,
      page: 1,
      pictures: [],
    });
  };

  sendSearchToApi = async (searchWord, page) => {
    if (!searchWord) {
      return;
    }
    this.setState({
      loader: true,
    });
    try {
      const { hits, totalHits } = await getFromApi(searchWord, page);
      console.log('hits', hits);
      console.log('totalHits', totalHits);
      console.log('hits.length', hits.length);
      console.log('this.state.isEmpty', this.state.isEmpty);
      if (hits.length === 0) {
        this.setState({
          isEmpty: true,
        });
      }
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        totalPictures: totalHits,
      }));
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        loader: false,
      });
    }
  };

  btnLoadMore = () => {
    this.setState(prevstate => ({
      page: prevstate.page + 1,
    }));
  };
  modalOn = id => {
    this.setState({
      modalId: id,
    });
  };

  render() {
    const {
      error,
      loader,
      totalPictures,
      loaderMore,
      pictures,
      isEmpty,
      modalId,
    } = this.state;
    console.log('totalPictures:', totalPictures);
    return (
      <>
        <Searchbar handleSearch={this.sendSearchSubmit}></Searchbar>
        {isEmpty && <p>Sorry. There are no pictures</p>}
        {error && <h3>{error}</h3>}
        {loader && (
          <RotatingSquare
            ariaLabel="rotating-square"
            visible={true}
            color="grey"
            strokeWidth="10"
          />
        )}

        {pictures.length > 0 && (
          <>
            <ImageGallery
              pictures={pictures}
              clickOnImage={this.modalOn}
            ></ImageGallery>
            {loaderMore && (
              <RotatingSquare
                ariaLabel="rotating-square"
                visible={true}
                color="grey"
                strokeWidth="10"
              />
            )}
            {totalPictures - pictures.length > 1 ? (
              <Button clickOnMoreBtn={this.btnLoadMore}></Button>
            ) : (
              <p>Sorry. There are no pictures</p>
            )}
            {modalId && <Modal id={modalId}></Modal>}
          </>
        )}
      </>
    );
  }
}

export { App };
