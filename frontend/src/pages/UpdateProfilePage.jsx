import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	useColorModeValue,
	Avatar,
	Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import usePreviewImg from "../hooks/usePreviewImg";
import useShowToast from "../hooks/useShowToast";

export default function UpdateProfilePage() {
	const [user, setUser] = useRecoilState(userAtom);
	const [inputs, setInputs] = useState({
		name: user.name,
		username: user.username,
		email: user.email,
		bio: user.bio,
		password: "",
	});
	const fileRef = useRef(null);
	const [updating, setUpdating] = useState(false);

	const showToast = useShowToast();

	const { handleImageChange, imgUrl } = usePreviewImg();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (updating) return;
		setUpdating(true);
		try {
			const res = await fetch(`/api/users/update/${user._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...inputs, profilePic: imgUrl }),
			});
			const data = await res.json(); // updated user object
			if (data.error) {
				showToast("Error", data.error, "error");
				return;
			}
			showToast("Success", "Profile updated successfully", "success");
			setUser(data);
			localStorage.setItem("user-devin", JSON.stringify(data));
		} catch (error) {
			showToast("Error", error, "error");
		} finally {
			setUpdating(false);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<Flex align={"center"} justify={"center"} my={6}>
				<Stack
					spacing={4}
					w={"full"}
					maxW={"md"}
					bg={useColorModeValue("white", "gray.dark")}
					rounded={"xl"}
					boxShadow={"lg"}
					p={6}
				>
					<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
						User Profile Edit
					</Heading>
					<FormControl id='userName'>
						<Stack direction={["column", "row"]} spacing={6}>
							<Center>
								<Avatar size='xl' boxShadow={"md"} src={imgUrl || user.profilePic} />
							</Center>
							<Center w='full'>
								<Button w='full' onClick={() => fileRef.current.click()}>
									Change Avatar
								</Button>
								<Input type='file' hidden ref={fileRef} onChange={handleImageChange} />
							</Center>
						</Stack>
					</FormControl>
					<FormControl>
						<FormLabel>Full name</FormLabel>
						<Input
							placeholder='John Doe'
							value={inputs.name}
							onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
							_placeholder={{ color: "gray.500" }}
							type='text'
						/>
					</FormControl>
					<FormControl>
						<FormLabel>User name</FormLabel>
						<Input
							placeholder='johndoe'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
							_placeholder={{ color: "gray.500" }}
							type='text'
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Email address</FormLabel>
						<Input
							placeholder='your-email@example.com'
							value={inputs.email}
							onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
							_placeholder={{ color: "gray.500" }}
							type='email'
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Bio</FormLabel>
						<Input
							placeholder='Your bio.'
							value={inputs.bio}
							onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
							_placeholder={{ color: "gray.500" }}
							type='text'
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input
							placeholder='password'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							_placeholder={{ color: "gray.500" }}
							type='password'
						/>
					</FormControl>
					<Stack spacing={6} direction={["column", "row"]}>
						<Button
							bg={"red.400"}
							color={"white"}
							w='full'
							_hover={{
								bg: "red.500",
							}}
						>
							Cancel
						</Button>
						<Button
							bg={"green.400"}
							color={"white"}
							w='full'
							_hover={{
								bg: "green.500",
							}}
							type='submit'
							isLoading={updating}
						>
							Submit
						</Button>
					</Stack>
				</Stack>
			</Flex>
		</form>
	);
}
// import {
// 	Button,
// 	Flex,
// 	FormControl,
// 	FormLabel,
// 	Heading,
// 	Input,
// 	Stack,
// 	Avatar,
// 	Center,
// 	SimpleGrid,
// 	Textarea,
// 	useColorModeValue,
// } from "@chakra-ui/react";
// import { useRef, useState } from "react";
// import { useRecoilState } from "recoil";
// import userAtom from "../atoms/userAtom";
// import usePreviewImg from "../hooks/usePreviewImg";
// import useShowToast from "../hooks/useShowToast";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

// export default function UpdateProfilePage() {
// 	const [user, setUser] = useRecoilState(userAtom);
// 	const [inputs, setInputs] = useState({
// 		name: user.name,
// 		username: user.username,
// 		email: user.email,
// 		bio: user.bio,
// 		password: "",
// 		techStack: user.techStack || "",
// 		github: user.github || "",
// 		website: user.website || "",
// 		linkedin: user.linkedin || "",
// 		twitter: user.twitter || "",
// 		instagram: user.instagram || "",
// 		youtube: user.youtube || "",
// 	});
// 	const fileRef = useRef(null);
// 	const [updating, setUpdating] = useState(false);

// 	const showToast = useShowToast();

// 	const { handleImageChange, imgUrl } = usePreviewImg();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (updating) return;
// 		setUpdating(true);
// 		try {
// 			const res = await fetch(`/api/users/update/${user._id}`, {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify({ ...inputs, profilePic: imgUrl }),
// 			});
// 			const data = await res.json(); // updated user object
// 			if (data.error) {
// 				showToast("Error", data.error, "error");
// 				return;
// 			}
// 			showToast("Success", "Profile updated successfully", "success");
// 			setUser(data);
// 			localStorage.setItem("user-devin", JSON.stringify(data));
// 		} catch (error) {
// 			showToast("Error", error, "error");
// 		} finally {
// 			setUpdating(false);
// 		}
// 	};

// 	// Define social profile icons
// 	const socialIcons = {
// 		github: <FaGithub />,
// 		website: <FaGlobe />,
// 		linkedin: <FaLinkedin />,
// 		twitter: <FaTwitter />,
// 		instagram: <FaInstagram />,
// 		youtube: <FaYoutube />,
// 	};
// 	console.log(user,"user is here ");
 
// 	return (
// 		<Flex
// 			minH='100vh'
// 			align='center'
// 			justify='center'
// 			bg={useColorModeValue("gray.900", "gray.800")}
// 			color='white'
// 		>
// 			<Stack
// 				spacing={6}
// 				w='full'
// 				maxW='xl'
// 				bg={useColorModeValue("gray.800", "gray.700")}
// 				rounded='xl'
// 				boxShadow='2xl'
// 				p={8}
// 			>
// 				<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }} textAlign='center'>
// 					Edit Profile
// 				</Heading>

// 				<FormControl id='userName'>
// 					<Stack direction={["column", "row"]} spacing={6}>
// 						<Center>
// 							<Avatar size='xl' boxShadow='md' src={imgUrl || user.profilePic} />
// 						</Center>
// 						<Center w='full'>
// 							<Button
// 								w='full'
// 								onClick={() => fileRef.current.click()}
// 								bg='gray.700'
// 								color='white'
// 								_hover={{ bg: "gray.600" }}
// 							>
// 								Change Avatar
// 							</Button>
// 							<Input type='file' hidden ref={fileRef} onChange={handleImageChange} />
// 						</Center>
// 					</Stack>
// 				</FormControl>

// 				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
// 					<FormControl>
// 						<FormLabel>Full name</FormLabel>
// 						<Input
// 							placeholder='nived s'
// 							value={inputs.name}
// 							onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
// 							bg='gray.700'
// 							border='none'
// 							color='white'
// 							_placeholder={{ color: "gray.400" }}
// 						/>
// 					</FormControl>
// 					<FormControl>
// 						<FormLabel>Username</FormLabel>
// 						<Input
// 							placeholder='Nived'
// 							value={inputs.username}
// 							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
// 							bg='gray.700'
// 							border='none'
// 							color='white'
// 							_placeholder={{ color: "gray.400" }}
// 						/>
// 					</FormControl>
// 				</SimpleGrid>

// 				<FormControl>
// 					<FormLabel>Email address</FormLabel>
// 					<Input
// 						placeholder='enter your email'
// 						value={inputs.email}
// 						onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
// 						bg='gray.700'
// 						border='none'
// 						color='white'
// 						_placeholder={{ color: "gray.400" }}
// 					/>
// 				</FormControl>

// 				<FormControl>
// 					<FormLabel>Bio</FormLabel>
// 					<Textarea
// 						placeholder='Your bio.'
// 						value={inputs.bio}
// 						onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
// 						bg='gray.700'
// 						border='none'
// 						color='white'
// 						_placeholder={{ color: "gray.400" }}
// 						resize='vertical'
// 					/>
// 				</FormControl>

// 				<FormControl>
// 					<FormLabel>Tech Stack</FormLabel>
// 					<Textarea
// 						placeholder='Node.js, React, MongoDB, etc.'
// 						value={inputs.techStack}
// 						onChange={(e) => setInputs({ ...inputs, techStack: e.target.value })}
// 						bg='gray.700'
// 						border='none'
// 						color='white'
// 						_placeholder={{ color: "gray.400" }}
// 						resize='vertical'
// 					/>
// 				</FormControl>

// 				<Heading fontSize='xl' mt={6} mb={4}>
// 					Social Profiles
// 				</Heading>
// 				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
// 					{Object.entries({
// 						github: "GitHub",
// 						website: "Website",
// 						linkedin: "LinkedIn",
// 						twitter: "Twitter",
// 						instagram: "Instagram",
// 						youtube: "YouTube",
// 					}).map(([key, label]) => (
// 						<FormControl key={key}>
// 							<FormLabel>
// 								<Flex align='center' gap={2}>
// 									{socialIcons[key]} {label}
// 								</Flex>
// 							</FormLabel>
// 							<Input
// 								placeholder={`${label} URL`}
// 								value={inputs[key]}
// 								onChange={(e) => setInputs({ ...inputs, [key]: e.target.value })}
// 								bg='gray.700'
// 								border='none'
// 								color='white'
// 								_placeholder={{ color: "gray.400" }}
// 							/>
// 						</FormControl>
// 					))}
// 				</SimpleGrid>

// 				<FormControl>
// 					<FormLabel>Password</FormLabel>
// 					<Input
// 						placeholder='password'
// 						value={inputs.password}
// 						onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
// 						bg='gray.700'
// 						border='none'
// 						color='white'
// 						_placeholder={{ color: "gray.400" }}
// 						type='password'
// 					/>
// 				</FormControl>

// 				<Stack spacing={6} direction={["column", "row"]} mt={8}>
// 					<Button
// 						bg='gray.700'
// 						color='white'
// 						w='full'
// 						_hover={{ bg: "gray.600" }}
// 					>
// 						Cancel
// 					</Button>
// 					<Button
// 						bg='white'
// 						color='gray.900'
// 						w='full'
// 						_hover={{ bg: "gray.100" }}
// 						type='submit'
// 						isLoading={updating}
// 					>
// 						Submit
// 					</Button>
// 				</Stack>
// 			</Stack>
// 		</Flex>
// 	);
// }