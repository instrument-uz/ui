import Link from "next/link";

function Href(props) {
  return (
    <Link href={props.href} className={props.className}>
      <a className="h-full">{props.children}</a>
    </Link>
  );
}

export default Href;
