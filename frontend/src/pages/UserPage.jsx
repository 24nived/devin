import UserHeader from "../components/UserHeader.jsx";
import UserPost from "../components/UserPost.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
const UserPage = () => {
  const [user, setUser] = useState(null);
  const {username}= useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res= await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if(data.error){
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error",error, "error");
      } finally {
        setLoading(false);
      }
      
    }
    getUser();
  },[username,showToast])

  if(!user && loading){
    return (
      <Flex justifyContent={"center"}>
        <Spinner size="xl" />
      </Flex>
    )
  }
  if(!user && !loading) return <h1>User not found!</h1>;
  return <>
  <UserHeader user={user} />
  <UserPost likes={100} replies={23} postImg="/post1.png" postTitle="Post Title"/>
  <UserPost likes={100} replies={23} postImg="/post2.png" postTitle="Post Title"/>
  <UserPost likes={100} replies={23} postImg="/post3.png" postTitle="Post Title"/>
  <UserPost />
  <UserPost />
    </>
}
export default UserPage;
 