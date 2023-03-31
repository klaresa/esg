import React, { useState } from "react";
import {
  Box,
  Row,
  RowSection,
  InputSection,
  Input,
  Center,
  Content,
  Button
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Label } from "../Empresas/styles";
import api from "../../config/documentosAPI";

const AddNewDocumento = ({ handleChange }) => {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  const [formValues, setFormValues] = useState([{question: '', answer: ''}]);

  function handleAddNewDocModal() {
    setModalOpen(!isModalOpen);
  }

  const handleInputChange = (event, index) => {
    const {name, value} = event.target;
    const newFormValues = [...formValues];
    newFormValues[index][name] = value;
    setFormValues(newFormValues);
  };

  const handleAddFields = () => {
    const newFormValues = [...formValues, {question: '', answer: ''}];
    setFormValues(newFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);

    const data = {
      name: name,
      description: description,
      content: formValues
    }

    console.log(data);

    await api.post('/documentos', data);

    handleChange();

    setFormValues([{ question: '', answer: '' }] );
    handleAddNewDocModal()
  };

  // function handleDetailsClick(item) {
  //   navigate(`details/${item._id}`, { state: item });
  // }


  return (
      <Box>
        <RowSection>
          <Row onClick={handleAddNewDocModal}>
            <Center>Adicionar novo documento</Center>
          </Row>
          {isModalOpen && (
              <Content>
                <Button type="button" onClick={handleAddFields}>Add</Button>

                <form onSubmit={handleSubmit}>
                  <Row>
                    <InputSection>
                      <Label>Nome do documento</Label>
                      <Input
                          id="nome"
                          name="nome"
                          placeholder="Nome do novo documento.."
                          onChange={(event) => setName(event.target.value)}
                      />
                    </InputSection>
                    <InputSection>
                      <Label>Descrição</Label>
                      <Input
                          id="descricao"
                          name="descricao"
                          placeholder="Uma breve descrição do novo documento.."
                          onChange={(event) => setDescription(event.target.value)}
                      />
                    </InputSection>
                    {formValues.map((formValue, index) => (
                        <Row key={index}>
                          <Label>Pergunta {index+1}</Label>

                          <InputSection>
                            <Input
                                id={`pergunta_${index}`}
                                name="question"
                                placeholder="Digite a pergunta aqui.."
                                value={formValue.question}
                                onChange={(event) => handleInputChange(event, index)}

                            />
                          </InputSection>
                          <InputSection>
                            <Input
                                id={`resposta_${index}`}
                                name="answer"
                                placeholder="Digite a resposta resposta aqui.."
                                value={formValue.answer}
                                onChange={(event) => handleInputChange(event, index)}
                            />
                          </InputSection>
                        </Row>
                    ))}
                  </Row>
                  <Button type="sumbit">Submit</Button>

                </form>

              </Content>
          )}
        </RowSection>
      </Box>
  );
};

export default AddNewDocumento;
