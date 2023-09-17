import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-10 px-6 hover:bg-red-400 hover:text-black">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};
Link.propTypes = {
  route:PropTypes.object
};
export default Link;
