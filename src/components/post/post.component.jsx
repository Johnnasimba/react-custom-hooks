import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const Post = ({postId}) => {

    const [post, setPost] = useState(null);

    useEffect(
       ()=> {
          async function fetchPost() {
               const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);

               const posts = await res.json();
               setPost(posts[0]);
           }
           fetchPost();
       }, [postId]);

    return(
        <Card>
            {
                post ? (
                    <div>
                        <h3> {post.title} </h3>
                        <p> {post.body} </p>
                    </div>
                ) : (
                    <p>Post not found</p>
                )
            };
        </Card>
    );
};

export default Post;