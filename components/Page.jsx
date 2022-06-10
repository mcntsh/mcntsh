import Head from "next/head";
import withSetClassName from "use-utility-classes/react";

const PageWrapper = withSetClassName((props) => {
  const wrapperClassNames = props.setClassName(
    "flex min-h screen flex-col min-h-screen box-border p-8",
    {
      when: { type: "landing" },
      use: "bg-gradient-to-b from-orange-300 to-orange-200",
    },
    {
      when: { type: "error" },
      use: "bg-gradient-to-b from-yellow-100 to-orange-200",
    },
    {
      when: { type: "default" },
      use: "bg-yellow-100",
    }
  );
  return <div className={wrapperClassNames}>{props.children}</div>;
});

const PageBody = withSetClassName((props) => {
  const bodyClassNames = props.setClassName("p4 flex-grow flex flex-col");
  const bodyInnerClassNames = props.setClassName(
    "p-4 m-auto w-full",
    { when: { size: "default" }, use: "max-w-3xl" },
    { when: { size: "narrow" }, use: "max-w-xl" }
  );

  return (
    <main className={bodyClassNames}>
      <div className={bodyInnerClassNames}>{props.children}</div>
    </main>
  );
});

export default function Page(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <PageWrapper {...props}>
        <PageBody {...props}>{props.children}</PageBody>
      </PageWrapper>
    </>
  );
}

Page.defaultProps = {
  type: "default",
  size: "default",
};
