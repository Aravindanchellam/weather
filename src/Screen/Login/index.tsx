import React, { useContext, useState } from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

function Login() {
  const { logIn } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validate() {
    console.log(
      "test",
      String(process.env.REACT_APP_USERNAME),
      String(process.env.REACT_APP_PASSWORD)
    );
    if (
      userName === String(process.env.REACT_APP_USERNAME) &&
      password === String(process.env.REACT_APP_PASSWORD)
    ) {
      logIn();
    }
  }

  return (
    <div className="login-container">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          {/* <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading> */}

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                onChangeText={(value) => {
                  setUserName(value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={(value) => {
                  setPassword(value);
                }}
              />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => {
                validate();
              }}
            >
              Sign in
            </Button>
          </VStack>
        </Box>
      </Center>
    </div>
  );
}

export default Login;
