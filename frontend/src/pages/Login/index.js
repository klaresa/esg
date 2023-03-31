import React, {
  useContext,
  useState
} from "react";
import {
  Overlay,
  Content,
  Box,
  Text,
  Button,
  Label,
  Input,
  InputSection
} from "../../styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";


const Login = () => {
	const navigate = useNavigate();

	const { getUserInfo, handleLogin } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");


  async function handleLoginData() {
    const response = await handleLogin({ username: email, password: senha});

	  console.log('login - getuserpermission-----------', getUserInfo);

    if (response.data.type) {
      if (response.data.type === "empresa") navigate("/empresa")
      else if (response.data.type === "admin")navigate("/admin")
      else navigate("/login")
    }
  }

  return (
    <Overlay>
      <Content>
        <Box>
          <Text>login</Text>
          <InputSection>
            <Label>email</Label>
            <Input
              id="email"
              name="email"
              placeholder="email.."
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputSection>
          <InputSection>
            <Label>senha</Label>
            <Input
              id="senha"
              name="senha"
              placeholder="senha.."
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputSection>
          <Button onClick={handleLoginData}>Ir</Button>
          <button><a href="/">voltar</a></button>
        </Box>
      </Content>
    </Overlay>
  );
};

export default Login;
