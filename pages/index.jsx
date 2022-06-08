import { Page, Link, Space, Text, Squiggle, Action } from "/components";

function Home() {
  return (
    <Page
      title="Jon McIntosh"
      description="A Front-End Engineer based out of Berlin."
      type="orange"
    >
      <Text type="heading">Hi there, I'm Jon. </Text>
      <Text type="subheading">
        Currently, I'm working as a Front-End Engineer in Berlin.
      </Text>
      <Space size="medium" />
      <Squiggle />
      <Space size="large" />
      <Text type="paragraph">
        I build impactful user experiences through digital mediums, and I'm
        working with{" "}
        <Link href="https://www.researchgate.net/" isBlank>
          ResearchGate
        </Link>{" "}
        to build human-focused products for scientists and researchers online.
      </Text>
      <Space size="large" />
      <Action href="mailto:jon@mcntsh.com" text="Get in touch" isBlank />
      &nbsp;
      <Action
        href="https://www.linkedin.com/in/jon-mcintosh-475b9423/"
        text="Read more"
        type="secondary"
        isBlank
      />
    </Page>
  );
}

export default Home;
