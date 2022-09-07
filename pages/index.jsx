import { Page, Link, Space, Text, Squiggle, Action } from "/components";

function Home() {
  return (
    <Page
      title="Jon McIntosh"
      description="A Front-End Engineer based out of NYC."
      type="landing"
      size="narrow"
    >
      <Text type="heading">Hi there, I'm Jon. </Text>
      <Text type="subheading">
        Currently, I'm working as a Front-End Engineer in NYC.
      </Text>
      <Space size="medium" />
      <Squiggle />
      <Space size="large" />
      <Text type="paragraph">
        I build impactful user experiences through digital mediums. These days I'm
        working with{" "}
        <Link href="https://cash.app/" isBlank>
          Cash App
        </Link>{" "}
        and changing the way you pay online.
      </Text>
      <Space size="large" />
      <Action
        href="https://www.linkedin.com/in/jon-mcintosh-475b9423/"
        text="Get in touch"
        isBlank
      />
      &nbsp;
      <Action href="/thoughts" text="Read more" type="secondary" />
    </Page>
  );
}

export default Home;
