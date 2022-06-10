import { getThoughtBySlug, getAllThoughts } from "/lib/thoughts";
import { getFormattedDate } from "/lib/date";
import {
  Page,
  Link,
  Space,
  Text,
  Squiggle,
  Markdown,
  Code,
  Action,
} from "/components";

function Thought(props) {
  return (
    <Page title={props.title} description={props.description}>
      <Link href="/thoughts">← Go back</Link>
      <Space size="large" />
      <Text type="heading">{props.title}</Text>
      <Text type="subheading">{props.date}</Text>
      <Space size="medium" />
      <Squiggle />
      <Space size="large" />
      <Markdown content={props.content} />
      <Space size="large" />
      <Link href="/thoughts">← Go back</Link>
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const thought = getThoughtBySlug(params.slug);

  return {
    props: {
      ...thought,
    },
  };
}

export async function getStaticPaths() {
  const thoughts = getAllThoughts();

  return {
    paths: thoughts.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export default Thought;
