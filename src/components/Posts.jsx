import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const searchResults = useMemo(() => {
        return posts.filter((post) => post.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    }, [searchQuery]);

    return (
        <div className=" space-y-2 p-5">
            <div className=" relative  w-xl">
                <input
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="   px-5 py-2 rounded-full w-xl border outline-lime-300"
                    name=""
                    id=""
                    placeholder=" Enter the post title"
                />
                {searchQuery && (
                    <div className=" overflow-auto px-4 py-3 border border-black rounded-2xl min-h-64 absolute  w-full bg-white h-full">
                        {searchResults.map((post) => {
                            return (
                                <div className=" border-b border-black px-2 py-1 text-lime-500" key={post.id}>
                                    <p className=" font-bold text-xl ">{post.title}</p>
                                </div>
                            );
                        })}
                        {searchResults.length === 0 && (
                            <p className=" text-sm text-red-600">No post found with this query</p>
                        )}
                    </div>
                )}
            </div>
            {posts.map((post) => {
                return (
                    <div className=" bg-fuchsia-200 p-5 " key={post.id}>
                        <h1 className=" font-bold text-2xl">{post.title}</h1>
                        <h1>{post.body}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
