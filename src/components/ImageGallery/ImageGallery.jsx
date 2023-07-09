import { ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ pictures, clickOnImage }) => {
  console.log('pictures in Galery:', pictures);
  return (
    <ImageGalleryUl>
      {pictures.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          clickOnImage={clickOnImage}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryUl>
  );
};
