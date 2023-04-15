import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getApiDocumentosData } from "../../services/getApiDocumentosData";
import { sendData } from "../../services/sendAvaliacaotData";
import { getApiEmpresasData } from "../../services/getApiEmpresasData";
import { useNavigate } from "react-router-dom";


const EmpresaDocumentosDetalhes = () => {
  const navigate = useNavigate();

  const {id} = useParams();

  const [empresa, setEmpresa] = useState('');

  const [_id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [avaliacaoNome, setAvaliacaoNome] = useState('');


  const [formData, setFormData] = useState([]);

  function handleChange(event, index) {
    const {name, value} = event.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData(formData);
    await handleAvaliacaoSubmit();
    navigate('/empresa/avaliacao');
  }

  async function handleFetch() {
    const response = await getApiDocumentosData(`/documentos/${id}`);

    setId(response._id)
    setName(response.name);
    setDescription(response.description);
    setFormData(response.content);
  }

  async function getEmpresaData() {
    const token = localStorage.getItem('token');
    const parsedToken = JSON.parse(token)
    const response = await getApiEmpresasData(`empresas/find-by-userid/${parsedToken.id}`)
    setEmpresa(response)
  }

  useEffect(() => {
    handleFetch();
    getEmpresaData();
  }, []);

  async function handleAvaliacaoSubmit() {
    const avaliacaoData = {
      avaliacaoNome: avaliacaoNome,
      empresa: empresa,
      documento: {
        _id: _id,
        name: name,
        description: description,
        content: formData
      }
    }

    const response = await sendData('/avaliacao', avaliacaoData);
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              id="avaliacaoNome"
              name="avaliacaoNome"
              onChange={(e) =>
                  setAvaliacaoNome(e.target.value)
              }
          />
          {formData.map((item, index) => (
              <div key={index}>
                <div>
                  {item.question}
                </div>
                <input
                    type="text"
                    id={`answer${index}`}
                    name="answer"
                    onChange={(event) =>
                        handleChange(event, index)
                    }
                />
              </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default EmpresaDocumentosDetalhes;
