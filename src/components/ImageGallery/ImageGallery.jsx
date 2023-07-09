import { ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ pictures, clickOnImage }) => {
  console.log('pictures in Galery:', pictures);
  return (
    <ImageGalleryUl>
      {pictures.map(({ id, tags, webformatURL, largeImageURL }) => (
        <a
          href={largeImageURL}
          onClick={() => clickOnImage(largeImageURL)}
          key={id}
        >
          <ImageGalleryItem
            tags={tags}
            webformatURL={webformatURL}
          ></ImageGalleryItem>
        </a>
      ))}
    </ImageGalleryUl>
  );
};
