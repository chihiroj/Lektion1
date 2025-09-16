import { Box, Button, Card, Image } from "@chakra-ui/react"

/**
 * 
 */
export const HorizontalArticle = ({ post }) => (
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
        <Button variant="solid">Read more</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)
