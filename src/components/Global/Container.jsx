function Container(props) {
  return <div {...props} className={`relative ${props.className}`} />;
}

export default Container;
