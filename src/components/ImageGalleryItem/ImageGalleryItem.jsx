import { ImageGalleryItemLi } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ tags, webformatURL }) => {
  return (
    <ImageGalleryItemLi>
      <img src={webformatURL} alt={tags} />
    </ImageGalleryItemLi>
  );
};
