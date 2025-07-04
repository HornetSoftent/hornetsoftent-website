
"use client"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
export default function Info({description, arr}) {
  return (
   <div className="info-app">
        <div className="info-app-content">
          <h2>L'application en quelques mots</h2>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
             {description}
          </ReactMarkdown>
         
          {/* <p>
            Plongez dans l'univers fascinant de l'Algérie avec Dzair Quiz,
            l'application ultime et numéro un pour tester et enrichir vos connaissances sur
            l'histoire, la géographie, la culture, et bien plus encore. Que vous
            soyez un passionné d'histoire ou simplement curieux, Dzair Quiz vous
            offre une expérience immersive et éducative. 
          </p>
          <p>
             Découvrez des centaines de questions, des défis quotidiens, et débloquez des 
             réalisations uniques en explorant les richesses de ce pays millénaire. Une
            interface intuitive et un design moderne vous garantissent une
            navigation fluide et un plaisir de jeu inégalé.
          </p> */}
        </div>
        <div className='screenshot-info'>
        {arr.map((item,index)=>(
          <div key={index} className='app-screenshot'>
            
    <div onClick={()=>alert()} className='screen-img'>
              <img src={item} alt="Dzair Quiz Screenshot" />
            
    </div>
            </div>
        ))}
            {/* <div className='app-screenshot'>
            
    <div onClick={()=>alert()} className='screen-img'></div>
            </div>
             <div className='app-screenshot'>
             <div onClick={()=>alert()} className='screen-img'></div>
    
            </div>
             <div className='app-screenshot'>
             <div onClick={()=>alert()} className='screen-img'></div>
    
            </div>
             <div className='app-screenshot'>
             <div onClick={()=>alert()} className='screen-img'></div>
    
            </div> */}
             
        </div>
      </div>
  )
}
