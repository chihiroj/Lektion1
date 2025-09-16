import { useEffect, useState } from "react";
import { ReaderStoriesArticle } from "./ReaderStoriesArticle";
import { Alert, Flex, Container } from "@chakra-ui/react";

/**
 * 
 */
export const ReaderStoriesWrapper = () => {
  const [readerStories, setReaderStories] = useState([]);

  /**
   * 
   */
  useEffect(() => {
    const stored = localStorage.getItem("articles");
    if (stored) {
      setReaderStories(JSON.parse(stored));
    }
  }, []);

  return (
    <Flex gap={8} direction="column" mb={8}>
      {readerStories.length > 0 ?
        readerStories.map((post, idx) => (
          <ReaderStoriesArticle key={idx} post={post} setReaderStories={setReaderStories} />
        )) :
        <Container>
          <Alert.Root status="info" title="This is the alert title">
            <Alert.Indicator />
            <Alert.Title>No reader stories available yet. Add a new one by clicking on "Add article" in the menu.</Alert.Title>
          </Alert.Root>
        </Container>
      }
    </Flex>
  );
};
