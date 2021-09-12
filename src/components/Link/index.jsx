import Link from "next/link";

function Href(props) {
  return (
    <Link href={props.href}>
      <a className={`${props.className}`}>{props.children}</a>
    </Link>
  );
}

export default Href;
