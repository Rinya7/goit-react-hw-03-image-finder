import { ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ pictures, clickOnImage }) => {
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
