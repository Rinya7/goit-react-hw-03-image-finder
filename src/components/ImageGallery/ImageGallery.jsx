import { ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ pictures }) => {
  console.log('pictures in Galery:', pictures);
  return (
    <ImageGalleryUl>
      {pictures.map(({ id, tags, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryUl>
  );
};
