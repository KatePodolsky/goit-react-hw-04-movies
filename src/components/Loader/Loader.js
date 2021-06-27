import Loader from "react-loader-spinner";

const LoaderData = () => {
  return <Loader
    type="ThreeDots"
    color="blue"
    height={100}
    width={100}
    timeout={3000} //3 secs
      />
}

export default LoaderData
