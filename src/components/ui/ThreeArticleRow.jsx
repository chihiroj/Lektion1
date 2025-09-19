import { Flex } from "@chakra-ui/react"
import { ArticleWithButton } from "./ArticleWithButton"

/**
 * Displays up to three articles side-by-side
 * inside a responsive Flex container.
 * Each article is rendered using the ArticleWithButton card.
 */
export const ThreeArticleRow = ({ posts }) => {
  return (
    <Flex wrap="wrap" gap="9" justifyContent="center">
      {posts.map((post) => (
        <ArticleWithButton key={post.id} post={post} />
      ))}
    </Flex>
  )
}