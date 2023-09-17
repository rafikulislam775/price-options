import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="text-black text-center bg-green-300 p-5 rounded-md">
      <h2 className="text-4xl">{price}</h2>
      <h4 className="text-2xl">{name}</h4>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
