import { useEffect, useState } from "react";
import { Flex, Heading, Center, Image, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useColorChange } from "@/useColorChange";

/**
 * Component for displaying an article's page.
 */
export const ArticlePage = () => {
  const color = useColorChange((s) => s.color);
  const [readerStory, setReaderStory] = useState(null);
  const { id } = useParams();

  /**
   * Increases likes for the article.
   */
  const like = () => {
    const stored = localStorage.getItem("articles");
    if (stored) {
      const articles = JSON.parse(stored);
      for (const article of articles) {
        if (article.id === id) {
          article.likes++;
          setReaderStory(article);
          break;
        }
      }
      localStorage.setItem("articles", JSON.stringify(articles));
    }
  }

  /**
   * Decreases likes for the article.
   */
  const dislike = () => {
    const stored = localStorage.getItem("articles");
    if (stored) {
      const articles = JSON.parse(stored);
      for (const article of articles) {
        if (article.id === id) {
          article.likes--;
          setReaderStory(article);
          break;
        }
      }
      localStorage.setItem("articles", JSON.stringify(articles));
    }
  }

  /**
   * Gets the correct article from local storage and saves it to state
   */
  useEffect(() => {
    const stored = localStorage.getItem("articles");
    if (stored) {
      const articles = JSON.parse(stored);
      for (const article of articles) {
        if (article.id == id) {
          setReaderStory(article);
          break;
        }
      }
    }
  }, [id]);

  return (
    <Center>
      <Flex direction="column" gap={4}>
        <Heading textAlign="center" size="3xl">
          {readerStory?.title}
        </Heading>
        <Image
          height="400px"
          src={readerStory?.imageUrl}
        />
        <Flex gap={2} justifyContent="flex-end" >
          <Text>Article score: {readerStory?.likes}</Text>
          <Button onClick={like} bgColor={color}>
            Like
          </Button>
          <Button onClick={dislike} bgColor={color}>
            Dislike
          </Button>
        </Flex>
        <Text fontSize={20}>
          {readerStory?.body}
        </Text>
      </Flex>
    </Center>
  );
};
