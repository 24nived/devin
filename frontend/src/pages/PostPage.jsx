import { Avatar, Box, Flex, Image, Text, Divider, Button, Stack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions.jsx";
import { useState } from "react";
import Comment from "../components/Comment.jsx";
import Tag from "../components/Tag.jsx";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  const technologies = [
    { name: "MongoDB", color: "green.500" },
    { name: "Java", color: "orange.500" },
    { name: "Python", color: "yellow.500" },
    { name: "SQL", color: "blue.500" }
  ];

  return (
      <>
        <Flex>
          <Flex w={"full"} alignItems={"center"} gap={3}>
            <Avatar src='/nivavater.jpg' size={"md"} name='nived' />
            <Flex alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>nived</Text>
              <Image src='/verified.png' w='4' h={4} ml={4} />
            </Flex>
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            <Text fontSize={"xs"} width={36} textAlign={"right"} color={"gray.400"}>1d</Text>
            <BsThreeDots />
          </Flex>
        </Flex>
  
        <Text my={3}>Let us see how devin works</Text>

        {/* Technology Tags */}
        <Stack direction="row" spacing={2} my={2}>
  {technologies.map((tech, index) => (
    <Tag key={index} size="sm" variant="solid" colorPalette={tech.color}>
      {tech.name}
    </Tag>
  ))}
</Stack>
  
        <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.400"}>
          <Image src='/post1.png' w={"full"} />
        </Box>
  
        <Flex gap={3} my={3}>
          <Actions liked={liked} setLiked={setLiked} />
        </Flex>
  
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.400"} fontSize={"sm"}>234 replies</Text>
          <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.400"}></Box>
          <Text color={"gray.400"} fontSize={"sm"}>1.2k likes</Text>
        </Flex>
  
        <Divider my={4} /> 
  
        <Flex justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"2xl"}>👋</Text>
            <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
          </Flex>
          <Button>Get</Button>
        </Flex>
  
        <Divider my={4}/>
        <Comment 
        comment="Massssssssss"
        createdAt="1hr"
        likes={100}
        username="nived"
        userAvatar="https://bit.ly/sage-adebayo"/>
        <Comment 
        comment="Massssssssss da nivedd ehhh"
        createdAt="1hr"
        likes={100}
        username="rohan"
        userAvatar='https://bit.ly/dan-abramov'/>
      </>
  );
};

export default PostPage;
