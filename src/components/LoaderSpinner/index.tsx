import React from "react";
import "./styles.css"

export default function LoaderSpinner() {
  return (
    <div className="loader">
      <div className="lds-roller">
        <div />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
