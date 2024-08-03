import { PuffLoader } from "react-spinners";
import { LoaderWrap, Backdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <Backdrop>
      <LoaderWrap>
        <PuffLoader color="#8BAA36" size={100} />
      </LoaderWrap>
    </Backdrop>
  );
};

export default Loader;
