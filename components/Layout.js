import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, siteData }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={siteData.author} />
        <meta name="description" content={siteData.description} />
        <title>{siteData.title}</title>
        <style>
          {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
         /* CSS normalize*/
         body, html {
          margin: 0;
          padding: 0;
          font-family: 'Open Sans', sans-serif;
          font-size: 1rem;
          line-height: 1.5;
          color: #eceff4;
          background-color: #2e3440;
        }
        * {
          box-sizing: border-box;
        }
        .header, .container {
          margin-left: 3%;
          margin-top: 2%;
        }
        /* a color #5e81ac */ 
        a {
          color: #ebcb8b !important;
        }
        a:hover {
          color: #d08770 !important;
        }
        /* all titles and semititles have font Montserrat */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        /* all body has font Open Sans */
        body {
        }
        `}
          {/* background-color = black; color: white */}
        </style>
      </Head>
      <Header siteName={siteData.title} />
      <main className="container">{children}</main>
    </div>
  );
}
