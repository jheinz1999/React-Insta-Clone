import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export default function PostsPage({displayedData, searchFunc, addLike, addComment, removeComment, username, setUsername, addPost}) {

  return (

    <>

      <SearchBar searchFunc={searchFunc} setUsername={setUsername} addPost={addPost}/>

      <div className='posts'>

        {displayedData.map((data, index) =>
          <PostContainer
            key={index}
            data={data}
            id={index}
            addLike={addLike}
            addComment={addComment}
            removeComment={removeComment}
            currentUser={username}
          />)}

      </div>

    </>

  );

}
