import PropTypes from "prop-types";
import Features from "./Features/Features";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="text-black text-center flex flex-col mt-10  bg-green-300 p-5 rounded-md">
      <h2 className="text-4xl">{price}</h2>
      <h4 className="text-2xl flex-grow">{name}</h4>
      <div className="text-left p-5">
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
      <button className="btn w-full">Buy Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
