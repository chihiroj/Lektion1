import { Card, Center, Image } from "@chakra-ui/react"

/**
 * Highlights a single featured article inside a centered card.
 * Shows the article title and body text,
 * with a large image displayed in the footer.
 */
export const TopArticle = ({ post }) => {
  return (
    <Center>
      <Card.Root maxW={{ base: "90%", md: "60%" }} overflow="hidden" ps>

        <Card.Body gap="2">
          <Card.Title>{post?.title}</Card.Title>
          <Card.Description>
            {post?.body}
          </Card.Description>
        </Card.Body>

        <Card.Footer gap="2" p={{ base: 6, lg: 16 }}>
          <Image
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/2edb/live/25562660-1272-11f0-ac9f-c37d6fd89579.jpg.webp"
            alt="Green double couch with wooden legs"
          />
        </Card.Footer>
      </Card.Root>
    </Center>
  )
}
