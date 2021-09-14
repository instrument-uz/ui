export function App(props) {
  return <section {...props} className={`relative ${props.className}`} />;
}

function Container(props) {
  return (
    <div {...props} className={`container | relative ${props.className}`} />
  );
}

function Header(props) {
  return <>{props.children}</>;
}

function Footer(props) {
  return <>{props.children}</>;
}

function Absolute(props) {
  return (
    <div {...props} className={`absolute inset-0 z-[60] ${props.className}`} />
  );
}

App.Container = Container;
App.Header = Header;
App.Footer = Footer;
App.Absolute = Absolute;
