import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);

    return (
        <Flex justifyContent={"space-between"} mt={6} mb={12} >
            {user && (
                <Link as={RouterLink} to="/">
                    <AiFillHome size={24} />
                </Link>
            )}
            <Image
                cursor="pointer"
                alt="logo"
                w={10}
                h={10}
                src={"/main_logo.svg"}
                onClick={toggleColorMode}
            />
            {user && (
                <Link as={RouterLink} to={`/${user.username}`}>
                    <RxAvatar size={24} />
                </Link>
            )}
        </Flex>
    );
};
