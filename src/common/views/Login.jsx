import {
  Flex,
  Stack,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
} from '@chakra-ui/react';
// import I from 'next/image';
// import logo from '../../../public/static/images/bc_logo.png';
import LoginForm from '../components/Forms/LogIn';
import RegisterForm from '../components/Forms/Register';
import Icon from '../components/Icon';

function Login() {
  return (
    <Stack minH={{ base: 'auto', md: '100vh' }} direction={{ md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4} w="full" maxW="md">
          <Box align="center" justify="center">
            {/* <I src={logo} height="67px" width="67px" /> */}
            <Icon icon="logoModern" width="200px" height="100px" />
          </Box>
          <Stack spacing={6}>
            <Tabs isFitted variant="enclosed">
              <Stack spacing={8}>
                <TabList align="center" justify="center">
                  <Tab
                    _selected={{
                      color: 'gray.dark',
                      bg: 'white',
                      borderBottomColor: 'blue.default',
                      borderBottomWidth: '3px',
                    }}
                    color="gray.default"
                    boxShadow="none !important"
                    fontWeight="600"
                    backgroundColor="white"
                    padding="17px"
                    borderBottomColor="gray.200"
                    borderTop="none"
                    borderRight="none"
                    borderLeft="none"
                  >
                    Log In
                  </Tab>
                  <Tab
                    _selected={{
                      color: 'gray.dark',
                      bg: 'white',
                      borderBottomColor: 'blue.default',
                      borderBottomWidth: '3px',
                    }}
                    color="gray.default"
                    boxShadow="none !important"
                    fontWeight="600"
                    backgroundColor="white"
                    padding="17px"
                    borderBottomColor="gray.200"
                    borderTop="none"
                    borderRight="none"
                    borderLeft="none"
                  >
                    Registration
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <LoginForm />
                  </TabPanel>
                  <TabPanel>
                    <RegisterForm />
                  </TabPanel>
                </TabPanels>
              </Stack>
            </Tabs>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
          xl: 'block',
        }}
      >
        {/* <Box width="100%"> */}
        <Image
          height="100%"
          width="100%"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        />
        {/* </Box> */}
      </Flex>
    </Stack>
  );
}

export default Login;
