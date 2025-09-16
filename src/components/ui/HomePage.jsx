import React from "react";
import { Flex, Heading } from '@chakra-ui/react'
import { ThreeArticleRow } from './ThreeArticleRow'
import { TwoArticleRow } from './TwoArticleRow'
import { useEffect, useState } from 'react'
import { TopArticle } from "./TopArticle";
import { ReaderStoriesWrapper } from "./ReaderStoriesWrapper";

/**
 * 
 */
export default function HomePage() {
  const [posts, setPost] = useState([]);

  /**
   * 
   */
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then(data => {
        console.log("Fetched posts:", data.posts);
        setPost(data.posts);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Flex gap="16" direction="column">
      <TopArticle post={posts[0]} />
      <ThreeArticleRow posts={posts.length > 0 ? posts.slice(1, 4) : []} />
      <Heading ml="16" size="3xl">Popular News</Heading>
      <Flex gap="4" direction="column">
        <TwoArticleRow posts={posts.length > 0 ? posts.slice(4, 6) : []} />
        <TwoArticleRow posts={posts.length > 0 ? posts.slice(6, 8) : []} />
        <TwoArticleRow posts={posts.length > 0 ? posts.slice(8, 10) : []} />
      </Flex>
      <Heading ml={8} mb="-8" size="3xl">Reader Stories</Heading>
      <ReaderStoriesWrapper />
    </Flex>
  );
}
