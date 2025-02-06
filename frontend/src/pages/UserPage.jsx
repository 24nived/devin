import UserHeader from "../components/UserHeader.jsx";
import UserPost from "../components/UserPost.jsx";
export const UserPage = () => {
  return <>
  <UserHeader />
  <UserPost likes={100} replies={23} postImg="/post1.png" postTitle="Post Title"/>
  <UserPost likes={100} replies={23} postImg="/post2.png" postTitle="Post Title"/>
  <UserPost likes={100} replies={23} postImg="/post3.png" postTitle="Post Title"/>
  <UserPost />
  <UserPost />
    </>
}
 