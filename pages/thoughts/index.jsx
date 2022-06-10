import { getAllThoughts } from "/lib/thoughts";
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
    <Page title={props.title} description={props.description} size="narrow">
      <Link href="/">← Go home</Link>
      <Space size="large" />
      <Text type="heading">Thoughts</Text>
      <Space size="medium" />
      <Squiggle />
      <Space size="large" />
      <ul ordered="true">
        {props.thoughts.map((thought) => (
          <li key={thought.slug}>
            <article>
              <Text type="label">{thought.date}</Text>
              <Text type="subheading">{thought.title}</Text>
              <Space size="medium" />
              <Text type="paragraph">{thought.description}</Text>
              <Space size="medium" />
              <Action
                type="tertiary"
                href={`/thoughts/${thought.slug}`}
                text="View"
              />
            </article>
            <Space size="large" />
          </li>
        ))}
      </ul>
      <Link href="/">← Go home</Link>
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const thoughts = getAllThoughts();

  return {
    props: { thoughts },
  };
}
export default Thought;
