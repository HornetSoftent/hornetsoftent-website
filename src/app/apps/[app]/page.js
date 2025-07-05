"use server"
import { URL } from "@/components/Config/Config";
import Details from "@/components/details/Details/Details";
import Footer from "@/components/Footer/Footer";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { app } = params;
  
  const response = await fetch(`${URL}/api/apps/${app}`);
  const post = await response.json();
  
  return {
    title: post.appName,
    description: post.description,
    openGraph: {
      images: [`https://hornetsoftent.com${post.img}`],
    },
  };
}

export default async function Page({ params }) {
  const { app } = params;

  const response = await fetch(`${URL}/api/apps/${app}`);
  const post = await response.json();

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
