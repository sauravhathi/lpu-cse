// import BackBtn from "./InBuild";
// import Markdown from "markdown-to-jsx"
// import React, { useState, useEffect } from 'react';
// import Code from "./Code";

// const Post = () => {

//     const [isDark, setIsDark] = useState(true)
    
//     return (
//         <div className="flex flex-col justify-center xl:py-4 md:py-2 px-[5%] xl:px-[25%] lg:px-[20%] md:px-[20%]  ">
//             <article>
//                 <main>
//                     <Markdown>
//                         ## Hello  World
//                     </Markdown>
//                 </main>
//             </article>
//             <BackBtn />
//         </div>

//     );
// }

// export default Post;


import React from "react"
import { Navigate } from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"

const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    console.log(validId)
    if (!validId) {
        return <Navigate to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Navigate to="/404" />
    }
    return (

            <div>
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr/>
                <Markdown
                    source={fetchedPost.content}
                    escapeHtml={false}

                />
                
            </div>
    )
}

export default Post