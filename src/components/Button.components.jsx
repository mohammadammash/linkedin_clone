const Button = (props) => {
  const { btn_class, text } = props;
  return (
    <button className={btn_class}>
        {text}
    </button>
  );
};

export default Button;
