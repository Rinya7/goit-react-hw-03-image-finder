import {
  ImageGalleryItemLi,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ tags, webformatURL }) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg src={webformatURL} alt={tags} />
    </ImageGalleryItemLi>
  );
};
