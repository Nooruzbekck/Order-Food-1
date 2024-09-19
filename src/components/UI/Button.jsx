import "./Button.css";
export const Button = ({ children, type, onClick, ...props }) => {
  return (
    <button className="btnicon" type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
