import { Flex } from "@chakra-ui/react"
import { HorizontalArticle } from "./HorizontalArticle"

/**
 * Displays up to two HorizontalArticle cards
 * side by side in a responsive Flex container.
 * Cards wrap to a new line on smaller screens.
 */
export const TwoArticleRow = ({ posts }) => {
  return (
    <Flex wrap="wrap" gap="4" justifyContent="center">
      {posts.map((post) => (
        <HorizontalArticle key={post.id} post={post} />
      ))}
    </Flex>
  )
}