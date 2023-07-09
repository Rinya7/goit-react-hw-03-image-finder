import { RotatingSquare } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingSquare
      ariaLabel="rotating-square"
      visible={true}
      color="grey"
      strokeWidth="10"
    />
  );
};
