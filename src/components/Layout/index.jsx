export function Layout(props) {
  return <section className="flex" {...props} />;
}

function Aside(props) {
  return <aside {...props} className={`w-1/3 ${props.className}`} />;
}

function Body(props) {
  return <main {...props} className={`w-2/3 ${props.className}`} />;
}

Layout.Aside = Aside;
Layout.Body = Body;
