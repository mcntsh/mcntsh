import withSetClassName from "use-utility-classes/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

function Code(props) {
  const codeClassName = props.setClassName(
    "!bg-lime-100 !border !border-lime-200 !p-8"
  );

  return (
    <SyntaxHighlighter
      language="html"
      style={solarizedlight}
      className={codeClassName}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}

export default withSetClassName(Code);
