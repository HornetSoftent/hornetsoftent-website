import { URL } from '@/components/Config/Config'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Legal from '@/components/legal/Legal'
import axios from 'axios'

import React from 'react'
export async function generateMetadata({ params, searchParams }, parent) {
    const { legal } = params;
  
    const res= await axios.get(`${URL}/api/legal/${legal}`)
    const post = await res.data 
   
    const description = post.content;
   
    return {
      title: post.title,
      description: description,
      
    };
  }
export default async function page({params}) {
  const { legal } = params;

  const data = await axios.get(`http://localhost:3050/api/legal/${legal}`);
  const post = await data.data;
  return (
    <>
    <Header/>
    <Legal title={post.title} content={post.content} />
    <Footer/>
    </>
  )
}
