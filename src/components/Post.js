import React from 'react';
import './post.css';
function Post(props){
    return(<div class="post">
      <h1> {props.title}</h1>
      <p>{props.contect}</p>
      <hr />
      <div class ="post-footer">
        <span>Published by {props.name}</span>
        <span>{props.date}</span>
      </div>
    </div>
    );   
}
export default Post;