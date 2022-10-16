import BackBtn from "./BackBtn";
import Markdown from "markdown-to-jsx"
import React, { useState, useEffect } from 'react';
import Code from "./Code";
// import Post from "./posts/[id]";

const Post = () => {

    const [postContent, setPostContent] = useState('');
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        import(`./../posts/p1.md`)
        .then((res) => {
            fetch(res.default).then((res) => res.text()).then((text) => {
                setPostContent(text);
            });
        }
        );

    }, []);

    return (
        <div className="flex flex-col justify-center xl:py-4 md:py-2 px-[5%] xl:px-[25%] lg:px-[20%] md:px-[20%]  ">
            <article>
                <main>
                    <Markdown
                        options={{
                            overrides: {
                                Code: {
                                    component: Code,
                                    props: {
                                        isDark,
                                        setIsDark
                                    }
                                }
                            }
                        }}
                    >
                        {postContent}
                    </Markdown>
                </main>
            </article>
            <BackBtn />
            
        </div>

    );
}

export default Post;
