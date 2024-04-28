import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <FadeLoader
      color="#2563EB"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
