// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <button
      css={css`
        width: 15rem;
        height: 5rem;
        background-color: ${type === "Primary"
          ? "#074EE8"
          : type === "Error"
          ? "#DE5753"
          : "none"};
      `}
    >
      Button
    </button>
  );
}

export default Button;
