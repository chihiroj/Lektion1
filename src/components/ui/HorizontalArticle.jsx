import { useColorChange } from "@/useColorChange";
import { Box, Button, Card, Image } from "@chakra-ui/react"

/**
 * Displays a single article as a horizontal card
 * with an image on the left, text content on the right,
 * and a “Read more” button in the footer.
 */
export const HorizontalArticle = ({ post }) => {
  const color = useColorChange((s) => s.color);

  return (
    <Card.Root flexDirection="row" overflow="hidden" maxW="48%" minW="400px">
      <Image
        objectFit="cover"
        maxW="200px"
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1981/live/1ca6b260-126c-11f0-ba12-8d27eb561761.jpg.webp"
        alt="Caffe Latte"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{post.title}</Card.Title>
          <Card.Description>
            {post.body.substr(0, 120) + '...'}
          </Card.Description>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button backgroundColor={color} variant="solid">Read more</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}
