import {
	Image,
	Box,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	useColorMode,
} from '@chakra-ui/react';
import {SignupForm} from './SignupForm';
import {LoginForm} from './LoginForm';

export const Form = () => {
	const { colorMode } = useColorMode();
	document.title = `Thessa 👥`
	return (
		<Box
			bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
			w='350px'
			p={3}
			boxShadow='m'
			rounded='lg'>
			<Image src="/images/formlogo.png" w='100px' mx='auto' mt={12} mb={10} />
			<Tabs variant='enclosed-colored' isFitted m={4}>
				<TabList>
					<Tab>Sign Up</Tab>
					<Tab>Login</Tab>
				</TabList>
				<TabPanels mt={3}>
					<TabPanel>
						<SignupForm />
					</TabPanel>
					<TabPanel>
						<LoginForm />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

