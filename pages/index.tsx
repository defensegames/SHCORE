import Head from "next/head";

import Container from "../components/Container";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Discord Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://www.bing.com/th?id=ALSTU247930B68ED76C8F08617E6559DE8E3B96BC0F73153C44DED6DCD678C245494B&w=148&h=148&c=7&o=6&oif=webp&dpr=1.3&pid=SANGAM"
        />
      </Head>
      <main>
        <Container />
      </main>
    </div>
  );
}