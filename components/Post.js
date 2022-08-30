import React, { useState, useRef, useContext, useEffect } from "react";
import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    SwitchHorizontalIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";

const Post = ({ post }) => {

    return (
        <div className="p-3 flex cursor-pointer border-b border-gray-700">
            <img
                src="https://cdn.discordapp.com/avatars/669518518777282561/98857e117ff28cde16f1a227c80dd272.webp?size=100"
                alt=""
                className="h-11 w-11 rounded-full 
                        mr-4"
            />
            <div className="flex flex-col space-y-2 w-full">
                <div className={"flex justify-between"}>
                    <div className="text-[#6e767d]">
                        <div className="inline-block group">
                        <h4
                            className={
                            "font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline inline-block"
                            }
                        >
                            {post?.postAuthor}
                        </h4>
                        <span className={"text-sm sm:text-[15px] ml-1.5"}>
                            @{post?.postAuthor}
                        </span>
                        </div>
                        ·{" "}
                        <span className="hover:underline text-sm sm:text-[15px]">
                        {/* <Moment fromNow>{post?.timestamp?.toDate()}</Moment> */}
                        </span>
                        <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                        {post?.contents}
                        </p>
                    </div>
                    <div className="icon group flex-shrink-0 ml-auto">
                        <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
                    </div>
                </div>
                <img
                src={post?.image}
                alt=""
                className="rounded-2xl max-h-[700px] object-cover mr-2"
                />
                <div className="text-[#6e767d] flex justify-between mx-auto w-full">
                    <div className="flex items-center space-x-1 group">
                        <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                        <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
                        </div>
                        <span className="group-hover:text-[#1d9bf0] text-sm">1</span>
                    </div>
                    {currentUser.username === post?.postAuthor ? (
                        <div className="flex items-center space-x-1 group">
                        <div className="icon group-hover:bg-red-600/10">
                            <TrashIcon
                            className="h-5 group-hover:text-red-600"
                            onClick={() => deletePost(post.postID)}
                            />
                        </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-1 group">
                        <div className="icon group-hover:bg-green-500/10">
                            <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
                        </div>
                        </div>
                    )}
                    <div className="flex items-center space-x-1 group">
                        <div className="icon group-hover:bg-pink-600/10">
                        <HeartIcon className="h-5 group-hover:text-pink-600" />
                        </div>
                        <span className="group-hover:text-pink-600 text-sm text-pink-600">
                        1
                        </span>
                    </div>
                    <div className="icon group">
                        <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
                    </div>
                    <div className="icon group">
                        <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
