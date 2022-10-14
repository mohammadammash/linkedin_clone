const Input = ({type}) => {
  return <input className="w-3/4 h-10 border border-black" type={type} name={type} placeholder={type} />;
};

export default Input;
