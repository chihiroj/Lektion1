import { Box, Button, Card, Image } from "@chakra-ui/react"
import { LuX } from "react-icons/lu"
import { toaster } from "@/components/ui/toaster";

/**
 * 
 */
const deleteArticle = (id, setReaderStories) => {
  const stored = JSON.parse(localStorage.getItem("articles") || "[]");
  const updatedList = stored.filter(article => article.id != id);
  localStorage.setItem("articles", JSON.stringify(updatedList));
  setReaderStories(updatedList);
  toaster.create({
    title: `Article deleted`,
    type: "error",
  });
};

/**
 * 
 */
export const ReaderStoriesArticle = ({ post, setReaderStories }) => (

  <Card.Root flexDirection="row" overflow="hidden" >
    <Image
      objectFit="cover"
      maxW={{ base: "200px", md: "200px" }}
      src={post.imageUrl}
      alt="Caffe Latte"
    />
    <Box w="100%">
      <Card.Body>
        <Card.Title mb="2">{post.title}</Card.Title>
        <Card.Description>
          {post.body.substr(0, 120) + '...'}
        </Card.Description>
      </Card.Body >
      <Card.Footer justifyContent="flex-end" flexWrap="wrap">
        <Button variant="subtle" colorPalette="red"
          onClick={() => deleteArticle(post.id, setReaderStories)}>
          <LuX />
          Delete
        </Button>
        <Button variant="solid">Read more</Button>
      </Card.Footer>
    </Box >
  </Card.Root >
)
