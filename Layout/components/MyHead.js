import Head from "next/head";

export default function MyHead() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" href="/img/icon.png" type="image/x-icon" />
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <link rel="stylesheet" type="text/css" href="/css/header.css" />
      <link rel="stylesheet" type="text/css" href="/css/navbar.css" />
      <link rel="stylesheet" type="text/css" href="/css/footer.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
  );
}
