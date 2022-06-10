import ReactMarkdown from "react-markdown";
import { Text, Space, Code, Link } from "/components";

function Markdown(props) {
  return (
    <ReactMarkdown
      children={props.content}
      components={{
        h1: ({ node, ...props }) => (
          <>
            <Text type="heading" {...props} />
            <Space size="large" />
          </>
        ),
        h2: ({ node, ...props }) => (
          <>
            <Text type="subheading" {...props} />
            <Space size="large" />
          </>
        ),
        p: ({ node, ...props }) => (
          <>
            <Text type="paragraph" {...props} />
            <Space size="large" />
          </>
        ),
        code: ({ node, ...props }) => (
          <>
            <Code language="javascript" {...props} />
            <Space size="large" />
          </>
        ),
        ul: ({ node, ...props }) => (
          <>
            <ul ordered="false" className="list-disc list-inside" {...props} />
            <Space size="large" />
          </>
        ),
        ol: ({ node, ...props }) => (
          <>
            <ol ordered="true" className="list-disc list-inside" {...props} />
            <Space size="large" />
          </>
        ),
        li: ({ node, ...props }) => (
          <li>
            <Text type="inline" {...props} />
          </li>
        ),
        a: ({ node, ...props }) => <Link {...props} isBlank />,
      }}
    />
  );
}

export default Markdown;
