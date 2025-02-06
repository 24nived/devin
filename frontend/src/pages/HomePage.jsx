import {Button,Flex} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <Link to={"/nived"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"auto"}>profile page</Button>
      </Flex>
    </Link>
  )
}

export default HomePage