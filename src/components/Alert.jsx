// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";
import alertTriangle from "../assets/alert-triangle.svg";
import alertCircle from "../assets/alert-circle.svg";
import checkCircle from "../assets/check-circle.svg";

function Alert({ type }) {
  const alertType = {
    Error: ["This is error alert box", frown, "#F9C8C8"],
    Warning: ["This is warning alert box", alertTriangle, "#F9D9C8"],
    Info: ["This is info alert box", alertCircle, "#F9EBC8"],
    Success: ["This is success alert box", checkCircle, "#CEF7CD"],
  };

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-align: left;

        width: 35rem;
        height: 5rem;
        padding-left: 1.5rem;
        border-radius: 0.5rem;
        background-color: ${alertType[type][2]};
      `}
    >
      <img src={alertType[type][1]} alt="" />
      <p
        css={css`
          font-weight: 900;
          color: #444444;
        `}
      >
        {alertType[type][0]}
      </p>
    </div>
  );
}

export default Alert;
