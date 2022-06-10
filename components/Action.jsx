import withSetClassName from "use-utility-classes/react";

function Action(props) {
  const actionClassNames = props.setClassName(
    `text-sm md:text-base tracking-wide font-bold
    border-2 rounded-full transition-colors inline-block text-center
    inline-block w-auto focus:outline-none focus:ring focus:ring-orange-300`,
    {
      when: { type: "primary" },
      use: "px-4 py-2 md:px-5 md:py-3 border-black bg-orange-300 hover:bg-black text-black hover:text-white",
    },
    {
      when: { type: "secondary" },
      use: "px-4 py-2 md:px-5 md:py-3 border-transparent hover:bg-orange-300 hover:border-orange-300 text-black",
    },
    {
      when: { type: "tertiary" },
      use: "px-3 py-1 border-yellow-600 bg-yellow-600 hover:bg-black hover:border-black text-yellow-100",
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
