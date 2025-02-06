import { Tag as ChakraTag } from "@chakra-ui/react";

const Tag = ({ children, colorPalette, ...props }) => {
  return (
    <ChakraTag
      size="sm"
      colorScheme={colorPalette} 
      variant="solid"
      {...props}
    >
      {children}
    </ChakraTag>
  );
};

export default Tag;
