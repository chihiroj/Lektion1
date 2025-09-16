import { Button, Card, Image } from "@chakra-ui/react"

/**
 * 
 */
export const ArticleWithButton = ({ post }) => {
  return (

    <Card.Root maxW="18rem" overflow="hidden">
      <Image
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/049d/live/19679e40-12bf-11f0-b234-07dc7691c360.png.webp"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>
          {post.body}
        </Card.Description>

      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="solid">Read more</Button>

      </Card.Footer>
    </Card.Root>

  )
}