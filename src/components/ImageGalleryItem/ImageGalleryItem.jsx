import {
  ImageGalleryItemLi,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({
  tags,
  webformatURL,
  clickOnImage,
  largeImageURL,
}) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg
        src={webformatURL}
        alt={tags}
        onClick={() => clickOnImage(largeImageURL, tags)}
      />
    </ImageGalleryItemLi>
  );
};
