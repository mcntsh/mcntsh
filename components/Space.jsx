import withSetClassName from "use-utility-classes/react";

function Space(props) {
  const spaceClassName = props.setClassName(
    "block w-full m-0",
    {
      when: { size: "tiny" },
      use: "p-0.5",
    },
    {
      when: { size: "small" },
      use: "p-1",
    },
    {
      when: { size: "medium" },
      use: "p-2",
    },
    {
      when: { size: "large" },
      use: "p-5",
    }
  );

  return <div className={spaceClassName} />;
}

Space.defaultProps = {
  size: "small",
};

export default withSetClassName(Space);
