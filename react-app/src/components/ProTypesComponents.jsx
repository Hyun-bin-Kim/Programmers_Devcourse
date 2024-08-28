import React from "react";
import PropTypes from "prop-types";

const PropTypesComponents = ({ item, price }) => {
  return (
    <div>
      아이템 : {item}
      <br />
      가격 : {price}
    </div>
  );
};

PropTypesComponents.propTypes = {
  item: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default PropTypesComponents;
