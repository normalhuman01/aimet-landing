import React, { forwardRef } from "react";

const Div = forwardRef((props, ref) => {
  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});

export default Div;
