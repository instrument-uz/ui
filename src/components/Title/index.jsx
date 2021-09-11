function Title(props) {
  return (
    <h3 className={`font-bold text-[#001A34] ${props.className}`}>
      {props.children}
    </h3>
  );
}

export default Title;
