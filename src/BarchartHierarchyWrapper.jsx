import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import BarChartHierarchy from "./BarChartHierarchy.js";

const BarchartHierarchyWrapper = props => {
  const targetRef = useRef(null);

  useEffect(() => {
    const bh = BarChartHierarchy(targetRef.current);
    console.log("bh update", props.data);
    bh.update(props.data);
  });

  console.log("bh render", props.data);
  return (
    <div className="BarchartHierarchyWrapper">
      <div ref={targetRef}></div>
    </div>
  );
};

BarchartHierarchyWrapper.propTypes = {
  data: PropTypes.object.isRequired
};

export default BarchartHierarchyWrapper;
