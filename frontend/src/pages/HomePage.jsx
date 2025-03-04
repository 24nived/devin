import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import useShowToast from "../hooks/useShowToast";
//import { useRecoilState } from "recoil";
import Post from "../components/Post";



const HomePage = () => {
  const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  useEffect(() => {
		const getFeedPosts = async () => {
			setLoading(true);
			setPosts([]);
			try {
				const res = await fetch("/api/posts/feed");
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				console.log(data);
				setPosts(data);
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setLoading(false);
			}
		};
		getFeedPosts();
	}, [showToast, setPosts]);
  return (
    <>
    	{!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}

				{loading && (
					<Flex justify='center'>
						<Spinner size='xl' />
					</Flex>
				)}

        {posts.map((post) => (
					<Post key={post._id} post={post} postedBy={post.postedBy} />
				))}
    </>
  )
}

export default HomePage