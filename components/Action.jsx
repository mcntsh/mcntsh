import withSetClassName from "use-utility-classes/react";

function Action(props) {
  const actionClassNames = props.setClassName(
    `text-md tracking-wide font-bold
    border-2 rounded-full px-5 py-3 transition-colors inline-block text-center
    inline-block w-auto focus:outline-none focus:ring focus:ring-orange-300`,
    {
      when: { type: "primary" },
      use: "border-black bg-orange-300 hover:bg-black text-black hover:text-white",
    },
    {
      when: { type: "secondary" },
      use: "border-transparent hover:bg-orange-300 hover:border-orange-300 text-black",
    }
  );

  const commonProps = {
    className: actionClassNames,
    onClick: props.onClick,
  };

  if (props.href) {
    const extraProps = props.isBlank
      ? { target: "_blank", rel: "nofollow noopener" }
      : {};

    return (
      <a href={props.href} {...commonProps} {...extraProps}>
        {props.text}
      </a>
    );
  }

  return (
    <button type={props.isSubmit ? "submit" : "button"} {...commonProps}>
      {props.text}
    </button>
  );
}

Action.defaultProps = {
  type: "primary",
  isBlank: false,
};

export default withSetClassName(Action);
