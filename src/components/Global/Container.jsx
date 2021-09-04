function Container(props) {
  return <div className={`relative ${props.className}`}>{props.children}</div>;
}

export default Container;
