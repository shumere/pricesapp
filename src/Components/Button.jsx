import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      className="btn btn--focus btn--hover btn--transition"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
