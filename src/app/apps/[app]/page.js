import Details from "@/components/details/Details/Details";
import Footer from "@/components/Footer/Footer";
import axios from "axios";

export async function generateMetadata({ params, searchParams }, parent) {
    const { app } = params;
  
    const res= await axios.get(`http://localhost:3050/api/apps/${app}`)
    const post = await res.data 
   
    const description = post.description;
    const metaImg = `https://hornetsoftent.com${post.img}`;
    return {
      title: post.appName,
      description: description,
      openGraph: {
        images: [metaImg],
      },
    };
  }

export default async function Page({ params }) {
  const { app } = params;

  const data = await axios.get(`http://localhost:3050/api/apps/${app}`);
  const post = await data.data;

  return (
    <div>
      <Details
        appName={post.appName}
        title={post.title}
        color={post.color}
        preview={post.preview}
        hero={post.hero}
        description={post.description}
        android={post.link[0].android}
        ios={post.link[0].ios}
        ctitle={post.callToAction[0].title}
        cdescription={post.callToAction[0].description}
        array={post.screenshot}
      />
      <Footer />
    </div>
  );
}
