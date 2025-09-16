import { Flex } from "@chakra-ui/react"
import { HorizontalArticle } from "./HorizontalArticle"

/**
 * 
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