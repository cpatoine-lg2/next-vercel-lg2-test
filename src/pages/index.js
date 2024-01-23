import Head from "next/head";
import Header from "../../components/Header";
import { performRequest } from "../../lib/datocms";

const PAGE_CONTENT_QUERY = `
  query Home {
    home {
      pTitle
      pImg {
        id
        width
        height
        url
        alt
        title
        responsiveImage {
          base64
        }
        focalPoint {
          x
          y
        }
      }
    }
  }
`;

export async function getServerSideProps() {
    try {
        const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });

        if (!data || !data.home) {
            throw new Error("Data not found or not structured as expected");
        }

        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return {
            props: {
                data: null, // or handle the error as needed
            },
        };
    }
}

const Home = ({ data }) => {
    return (
        <>
            <Head>
                <title>Accueil</title>
            </Head>
            
            <Header />

            <h1>{data.home.pTitle}</h1>
            <img src={data.home.pImg.url}></img>
        </>
    );
};

export default Home;
