// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoIcon from "../assets/alert-circle.svg";
import WarningIcon from "../assets/alert-triangle.svg";
import SuccessIcon from "../assets/check-circle.svg";
import ErrorIcon from "../assets/frown.svg";

function Alert(props) {
  let background;
  let Icon;

  if (props.type === "error") {
    background = "#F9C8C8";
    Icon = ErrorIcon;
  } else if (props.type === "warning") {
    background = "#F9D9C8";
    Icon = WarningIcon;
  } else if (props.type === "info") {
    background = "#F9EBC8";
    Icon = InfoIcon;
  } else if (props.type === "success") {
    background = "#CEF7CD";
    Icon = SuccessIcon;
  }

  return (
    <div
      css={css`
        width: 775px;
        height: 150px;
        display: flex;
        align-items: center;
        align-content: space-around;
        justify-content: center;
  
      `}
    >
      <div
        css={css`
          padding: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          width: 650px;
          height: 76px;
          border-radius: 10px;
          border: 0px;
          background: ${background};
          font-weight: 700;
          font-size: 20px;
          color: #444444;
          text-align: center;
        `}
      >
        <img src={Icon} alt="" />
        <p>{props.massage}</p>
      </div>
    </div>
  );
}

export default Alert;
