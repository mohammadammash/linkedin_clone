const Button = (props) => {
  const {  text, type='', showNextInputs} = props;
  const btn_classes="w-3/4 h-12 rounded-3xl bg-blue text-white";
  return (
    <button type={type} className={btn_classes} onClick={showNextInputs}>
        {text}
    </button>
  );
};

export default Button;
