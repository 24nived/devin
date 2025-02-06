import { Avatar } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import { useState } from "react";

const UserPost = ({ postImg, postTitle, likes, replies }) => {
    const [liked, setLiked] = useState(false);
    return (
        <Link to={"/nived/post/1"}>
            <Flex gap={4} mb={6} py={7}> {/* Increased gap and padding */}
                <Flex flexDirection={"column"} alignItems={"center"}>
                    <Avatar size='md' name='Nived' src='/nived-avatar.jpg' />
                    <Box w='1px' h={"full"} bg='gray.light' my={3}></Box>
                    <Box position={"relative"} w={"full"}>
                        <Avatar
                            size='xs'
                            name='mario'
                            src='https://bit.ly/dan-abramov'
                            position={"absolute"}
                            top={"0px"}
                            left='15px'
                            padding={"2px"}
                        />
                        <Avatar
                            size='xs'
                            name='hema'
                            src='https://bit.ly/sage-adebayo'
                            position={"absolute"}
                            bottom={"0px"}
                            right='-5px'
                            padding={"2px"}
                        />
                        <Avatar
                            size='xs'
                            name='gowtham'
                            src='https://bit.ly/prosper-baba'
                            position={"absolute"}
                            bottom={"0px"}
                            left='4px'
                            padding={"2px"}
                        />
                    </Box>
                </Flex>
                <Flex flex={1} flexDirection={"column"} gap={3}> {/* Increased gap for better spacing */}
                    <Flex justifyContent={"space-between"} w={"full"}>
                        <Flex w={"full"} alignItems={"center"}>
                            <Text fontSize={"md"} fontWeight={"bold"}> {/* Increased font size */}
                                nived
                            </Text>
                            <Image src='/verified.png' w={5} h={5} ml={1} />
                        </Flex>
                        <Flex gap={4} alignItems={"center"}>
                            <Text fontSize={"sm"} color={"gray.light"}>
                                1d
                            </Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
    
                    <Text fontSize={"md"}>{postTitle}</Text> {/* Increased text size */}
                    {postImg && (
                    <Box borderRadius={8} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                        <Image src={postImg} w={"full"} />
                    </Box>
                    )}
    
                    <Flex gap={4} my={2}> {/* Increased gap for better spacing */}
                        <Actions liked={liked} setLiked={setLiked} />
                    </Flex>
    
                    <Flex gap={3} alignItems={"center"}>
                        <Text color={"gray.light"} fontSize='sm'>
                            {replies} replies
                        </Text>
                        <Box w={1} h={1} borderRadius={"full"} bg={"gray.light"}></Box>
                        <Text color={"gray.light"} fontSize='sm'>
                            {likes} likes
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
    
}

export default UserPost