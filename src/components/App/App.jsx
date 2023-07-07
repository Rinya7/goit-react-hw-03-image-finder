import { Searchbar } from '../Searchbar/Searchbar';
import { RotatingSquare } from 'react-loader-spinner';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Component } from 'react';
import { getFromApi } from '../../api/api';
//import axios from 'axios';
//import { Modal } from '../Modal/Modal';
class App extends Component {
  state = {
    page: 1,
    pictures: {},
    loader: false,
    loaderMore: false,
  };

  //  componentDidUpdate(_, prevState) {
  //    if (prevState.pictures !== this.state.pictures) {
  //      this.setState({
  //        loader: false,
  //        loaderMore: false,
  //      });
  //    }
  //  }

  sendSearchToApi = async ({ searchWord }) => {
    try {
      this.setState({
        searchWord: searchWord,
        loader: true,
      });

      const { hits } = await getFromApi(searchWord, this.state.page);

      this.setState({
        pictures: [...hits],
      });

      //  this.setState({
      //    loader: false,
      //  });
    } catch (error) {
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

      //  this.setState({
      //    loaderMore: false,
      //  });

      this.setState(prevstate => {
        return {
          page: prevstate.page + 1,
          pictures: [...prevstate.pictures, ...hits],
        };
      });
    } catch (error) {
    } finally {
      this.setState({
        loaderMore: false,
      });
    }
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.sendSearchToApi}></Searchbar>
        {this.state.loader && (
          <RotatingSquare
            ariaLabel="rotating-square"
            visible={true}
            color="grey"
            strokeWidth="10"
          />
        )}
        {this.state.pictures.length > 0 && (
          <>
            <ImageGallery pictures={this.state.pictures}></ImageGallery>
            {this.state.loaderMore && (
              <RotatingSquare
                ariaLabel="rotating-square"
                visible={true}
                color="grey"
                strokeWidth="10"
              />
            )}
            {this.state.pictures.length > 0 && (
              <button type="button" onClick={this.btnLoadMore}>
                Click Me!
              </button>
            )}
          </>
        )}

        {/*<Modal></Modal>*/}
      </>
    );
  }
}

export { App };
