import ReactDOM from "react-dom";

export const Portal = ({ target, children }) => {
  const domElement = document.getElementById("root");

  return domElement ? ReactDOM.createPortal(children, domElement) : null;
};
