import withSetClassName from "use-utility-classes/react";

const tagFromType = {
  heading: "h2",
  subheading: "h3",
  paragraph: "p",
};

function Text(props) {
  const textClassName = props.setClassName(
    {
      when: { type: "paragraph" },
      use: "text-base md:text-xl leading-normal antialiased m-0",
    },
    {
      when: { type: "subheading" },
      use: "text-xl md:text-3xl font-medium leading-tight antialiased m-0",
    },
    {
      when: { type: "heading" },
      use: "text-2xl md:text-4xl font-bold leading-tight antialiased m-0",
    }
  );

  const Tag = `${tagFromType[props.type]}`;
  return <Tag className={textClassName}>{props.children}</Tag>;
}

Text.defaultProps = {
  type: "paragraph",
};

export default withSetClassName(Text);
