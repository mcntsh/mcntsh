import withSetClassName from "use-utility-classes/react";

function Link(props) {
  const linkClassName = props.setClassName(
    "underline focus:outline-none focus:ring focus:ring-orange-300"
  );

  const extraProps = props.isBlank
    ? { target: "_blank", rel: "nofollow noopener" }
    : {};

  return (
    <a href={props.href} {...extraProps} className={linkClassName}>
      {props.children}
    </a>
  );
}

export default withSetClassName(Link);
