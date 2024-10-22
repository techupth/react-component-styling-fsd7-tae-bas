// Start coding here
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function Button(props) {
  let bg = props.type === "primary" ? "#074EE8" : "#07A4E8";
  return (
    <button
      css={css`
        width: 171.19px;
        height: 50px;
        top: 291px;
        left: 278.92px
        padding: 0 16px;
        gap: 8px;
        border-radius: 8px;
        font-size: Large;
        text-align: center;
        color: #FFFFFF;
        border: solid;
        background-color: ${bg};
        
      `}
    >
      Button
    </button>
  );
}

export default Button;
