import PostCard from '@/components/postcard/PostCard';
import { Post } from '@/typings/typings';
import React from 'react'

type PostsProps = {
    posts: Post[]
  };
const Posts = ({posts}: PostsProps) => {
  return (
    <section className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center gap-x-10 gap-y-10 mx-auto my-10'>
        {posts.map((post, _id) => (
            <>
            <PostCard post={post} key={post._id} />
            </>
        ))}
        </div>
    </section>
  )
}

export default Posts

