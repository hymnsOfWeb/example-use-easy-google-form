import MyCustomGForm from "@/components/form";
import Head from "next/head";

export default function Home() {
  return (
    <section id="home">
      <Head>
        <title>Custom Form</title>
        <meta name="description" content="A sample form utilising @hymns-of-web/use-easy-google-form " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <MyCustomGForm />
      </main>
    </section>
  );
}
