import React from "react"
import { Link } from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"

const PostLists = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="p-4">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center">All Posts</h1>
            <div className="">
                {postlist.length &&
                    postlist.map((post, i) => {
                        return (
                            <div key={i} className="post-card">
                                <h2><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                                <small>Published on {post.date} by {post.author}</small>
                                <hr />
                                <Markdown source={excerptList[i]} escapeHtml={false} />
                                <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default PostLists