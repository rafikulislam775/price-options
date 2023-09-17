import PropTypes from "prop-types";
import { BiBadgeCheck } from "react-icons/bi";
const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-5  ">
      
        <BiBadgeCheck></BiBadgeCheck> {feature}
      </p>
    </div>
  );
};
Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
