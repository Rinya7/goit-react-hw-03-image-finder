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
    pictures: {},
    loader: false,
    loaderMore: false,
    totalPictures: null,
    error: '',
    modalId: null,
  };

  sendSearchToApi = async ({ searchWord }) => {
    try {
      this.setState({
        searchWord: searchWord,
        loader: true,
      });

      const { hits, totalHits } = await getFromApi(searchWord, this.state.page);
      console.log(hits);
      console.log(totalHits);
      this.setState({
        pictures: [...hits],
        totalPictures: totalHits,
      });
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

  btnLoadMore = async () => {
    try {
      this.setState({
        loaderMore: true,
      });

      const { hits } = await getFromApi(
        this.state.searchWord,
        this.state.page + 1
      );

      this.setState(prevstate => {
        return {
          page: prevstate.page + 1,
          pictures: [...prevstate.pictures, ...hits],
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loaderMore: false,
      });
    }
  };
  modalOn = id => {
    this.setState({
      modalId: id,
    });
  };

  render() {
    const { error, loader, totalPictures, loaderMore, pictures, modalId } =
      this.state;
    return (
      <>
        <Searchbar handleSearch={this.sendSearchToApi}></Searchbar>
        {error && <h3>{error}</h3>}
        {loader && (
          <RotatingSquare
            ariaLabel="rotating-square"
            visible={true}
            color="grey"
            strokeWidth="10"
          />
        )}
        {totalPictures && (
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
            {totalPictures - pictures.length > 1 && (
              <Button clickOnMoreBtn={this.btnLoadMore}></Button>
            )}
            {modalId && <Modal id={modalId}></Modal>}
          </>
        )}
      </>
    );
  }
}

export { App };
