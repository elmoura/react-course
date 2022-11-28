import "./index.css";

export const Button = ({ onClickButton, text, ...rest }) => {
  return (
    <button type="button" onClick={onClickButton} {...rest}>
      {text}
    </button>
  );
};
