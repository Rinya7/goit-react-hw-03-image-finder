import { ButtonLoadMore } from './Button.styled';

export const Button = ({ clickOnMoreBtn }) => {
  return (
    <ButtonLoadMore type="button" onClick={() => clickOnMoreBtn()}>
      Load more
    </ButtonLoadMore>
  );
};
