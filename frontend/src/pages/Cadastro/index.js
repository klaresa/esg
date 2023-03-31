import React, {useState} from "react";
import { Overlay, Content, Box, Text, Button, Input, InputSection, Label, Select, Wrapper} from "../../styles";
import { sendData } from "../../services/sendData";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [search, setSearch] = useState([]);

  const [step, setStep] = useState(1);

  const [perfil, setPerfil] = useState("empresa");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const [cnpj, setCnpj] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   async function get() {
  //     const search = await dataPromise('http://localhost:3000/vagas');
  //     setSearch(search);
  //   }
  //   get();
  // }, []);

  function handleSubmit() {

    if (step === 2) {
      if (!(senha === confirmacao)) {
        setStep(1);
        return;
      }

      const data = {
        type: perfil,
        username: email,
        password: senha,
        nome,
        contato: {
          endereco,
          telefone
        }
      };
      sendData(`http://localhost:3333/empresas`, data);

      navigate('/login');
    }
  }

  return (
    <>
      {step === 1 && (
        <Overlay>
          <Content>
            <Box>
              <Text>acesso</Text>
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
              <InputSection>
                <Label>confirmar senha</Label>
                <Input
                  id="confirmacao"
                  name="confirmar senha"
                  placeholder="confirmar senha.."
                  onChange={(e) => setConfirmacao(e.target.value)}
                />
              </InputSection>
              <Wrapper>
                <Button onClick={() => setStep(2)}>avancar</Button>
              </Wrapper>
            </Box>
          </Content>
        </Overlay>
      )}

      {step === 2 && (
        <Overlay>
          <Content>
            <Box>
              <Text>info</Text>
              <InputSection>
                <Label>nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  defaultValue={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

              </InputSection>
              <InputSection>
                <Label>endereco</Label>
                <Input
                  id="endereco"
                  name="endereco"
                  placeholder="endereco.."
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </InputSection>
              <InputSection>
                <Label>telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  placeholder="telefone.."
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </InputSection>

              <Wrapper>
                <Button onClick={() => setStep(1)}>voltar</Button>
                <Button onClick={handleSubmit}>avancar</Button>
              </Wrapper>
            </Box>
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default Cadastro;
