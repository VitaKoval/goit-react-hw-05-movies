import { Bars } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const loaderBars = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#ccc"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
