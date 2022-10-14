const AnchorTag = (props) => {
  const { aref, text, target, rel } = props;
  return (
    <a className="text-blue" href={aref} target={target && target} rel={rel && rel}>
      {" " + text}
    </a>
  );
};

export default AnchorTag;
