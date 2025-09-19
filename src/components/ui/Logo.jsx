import React from "react";
import { Box, Text } from "@chakra-ui/react";

/**
 *Renders the site name “Insight Daily”
 * as a simple text logo inside a Box container.
 */
export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="2rem">
        Insight Daily
      </Text>
    </Box>
  );
}
