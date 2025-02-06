import { Avatar, Box,Flex,VStack,Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { useToast} from "@chakra-ui/react"

const UserHeader = () => {
  const toast = useToast();

const copyURL = () => {
  const currentURL = window.location.href;
  navigator.clipboard.writeText(currentURL).then(() => {
    toast({
      title: "Success.",
      status: "success",
      description: "Profile link copied.",
      duration: 3000,
      isClosable: true,
    });
  });
};


  return <VStack gap={4} alignItems={"start"} w={"150%"} maxW={"5200px"} px={8}  ml={-130}>

    <Flex justifyContent={"space-between"} w={"full"}>
      <Box>
        <Text fontSize={"2xl"} fontWeight={"bold"}>Nived S</Text>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"sm"}>Nived S</Text>
          <Text fontSize={'xs'} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>Dev-Innn</Text>
        </Flex>
      </Box>
      <Box>
      <Avatar
							name='nivvv'
							src='/nivavater.jpg'
							size={{
								base: "md",
								md: "xl",
							}}
						/>
      </Box>
      
    </Flex>
    <Text>I am a software developer and I love to code.</Text>
    <Flex w={"full"} justifyContent={"space-between"}>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"grey.light"}>3.2k followers</Text>
        <Box w="1" h="1" bg={"grey.light"} borderRadius={"full"}></Box>
        <Link color={"grey.light"}>github.com</Link>
        </Flex>

      <Flex>
        <Box className="icon-container">
          <FaGithub size={24} cursor ={"pointer"}/>
        </Box>
        <Box className="icon-container">
          <Menu>
						<MenuButton>
							<CgMoreO size={24} cursor={"pointer"} />
						</MenuButton>
						  <Portal>
							  <MenuList bg={"gray.dark"}>
								  <MenuItem bg={"gray.dark"} onClick={copyURL}>
									Copy link
							    </MenuItem>
								</MenuList>
							</Portal>
						</Menu>
        </Box>
      </Flex>
    </Flex>
    <Flex w={"full"}>
				<Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb='3' cursor={"pointer"}>
					<Text fontWeight={"bold"}>Built by Me</Text>
				</Flex>
				<Flex
					flex={1}
					borderBottom={"1px solid gray"}
					justifyContent={"center"}
					color={"gray.light"}
					pb='3'
					cursor={"pointer"}
				>
					<Text fontWeight={"bold"}> About Me</Text>
				</Flex>
			</Flex>
  </VStack>;
}
export default UserHeader;