import { Flex } from "@chakra-ui/react"
import { ArticleWithButton } from "./ArticleWithButton"

/**
 * 
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