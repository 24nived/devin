
import {Flex, Image, useColorMode} from "@chakra-ui/react"
export const Header = () => {
    const {colorMode,toggleColorMode}=useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
        <Image
        cursor ={"pointer"}
        alt="logo"
        w={10}
        h={10}
        src={colorMode === "dark"? "/main_logo.svg" : "/main_logo.svg"}
        onClick={toggleColorMode}
        // onClick={() => {console.log("clicked")}}
        />
        
    </Flex>
  )
}
