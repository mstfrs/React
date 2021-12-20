import React from "react";

const divStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  padding: "10px",
};

const Button = (props) => {
  const { onClickProps } = props;
  const { name } = props;
  return (
    <div style={divStyle}>
      <button type="button" class="btn btn-primary" onClick={onClickProps}>
        {name}
      </button>
      {/* <button>Tıkla</button> */}
    </div>
  );
};

export default Button;
