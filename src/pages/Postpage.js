import React from 'react'
import Post from '../components/Post'


function Postpage() {
    return (
        <div>
           <h1>published</h1> 
            <Post title="post 1" contect="today is a good day" name="Maor Barak" date=" 4/17/21" />
            <Post title="post 2" contect="today is a nice day" name="Maor Barak" date=" 4/17/21"/>
            <Post title="post 3" contect="today is a fun day" name="Maor Barak" date=" 4/17/21"/>
            
        </div>
    )
}

export default Postpage
