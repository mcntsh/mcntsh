import { Page, Link, Space, Text, Squiggle, Action } from "/components";

function Custom404() {
  return (
    <Page
      title="Not Found"
      description="This page could not be found."
      type="yellow"
    >
      <Text type="heading">404!</Text>
      <Text type="subheading">This page could not be found.</Text>
      <Space size="medium" />
      <Squiggle />
      <Space size="large" />
      <Action href="/" text="Go home" />
    </Page>
  );
}

export default Custom404;
