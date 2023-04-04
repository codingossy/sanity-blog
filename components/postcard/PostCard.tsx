import { Post } from "@/typings/typings";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/client";

type PostsProps = {
  post: Post;
};
const PostCard = ({ post }: PostsProps) => {
  return (
    <Link href={`/post/${post.slug.current}`} className="w-full h-full">
      <div className="w-full group border border-gray-400 p-2 border-opacity-40 h-[450px]">
        <div>
          <Image
            alt="post image"
            width="1000"
            height="1000"
            className="w-full h-72 object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-95"
            src={urlFor(post.mainImage).url()!}
          />
        </div>
        <div className="flex flex-col my-2 p-2 ">
          <h1 className="capitalize font-semibold text-base">{post.title}</h1>
          <span className="flex gap-x-2 items-center my-3">
            <Image
              alt="post image"
              width="1000"
              height="1000"
              className="w-8 h-8 rounded-full"
              src={urlFor(post.author.image).url()!}
            />
            <p className="text-gray-400 capitalize flex items-center gap-x-2 text-xs"><span className="text-xs">Post by:</span> {post.author.name}</p>
          </span>

          <span className="my-4 border-t border-gray-500 py-4">
            <p className="text-xs line-clamp-1">{post.description}</p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
