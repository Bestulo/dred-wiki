import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, siteData }) {
  return (
    <div className="bg-[#242933] absolute top-0 left-0 w-full h-full min-h-screen overflow-y-auto flex flex-col font-body">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={siteData.author} />
        <meta name="description" content={siteData.description} />
        <title>{siteData.title}</title>
        <style>
          {`
        /*@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');*/
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&family=Work+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
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
          font-family: 'Crimson Pro', sans-serif;
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
      <main className="bg-[#2E3440] px-8 py-2 mx-auto max-w-2xl w-full mt-3">
        {children}
      </main>
      {/* <div className="h-20 self-end justify-self-end place-self-end flex items-center justify-center w-full bg-gray-700">
        a
      </div> */}
    </div>
  );
}
