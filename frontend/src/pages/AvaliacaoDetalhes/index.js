import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {getApiDocumentosData} from "../../services/getApiDocumentosData";
import ComponenteAvaliacaoDetalhes from "../../components/AvaliacaoDetalhes";


const AvaliacaoDetalhes = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response = await getApiDocumentosData(`/documentos/${id}`);

    console.log(`------ DATA ------ ${JSON.stringify(response)}`)

    setData(response);
    return response;
  }

  useEffect(() => {
    handleFetch();
  }, []);

  function handleChange() {
    handleFetch();
  }

  async function handleData(json) {
    if (json) {
      let novo = await json.documento.content.filter(item => {
        if (item.answer === 'sim') {
          return item.answer = true
        } else if (item.answer === 'nao') {
          return item.answer = false
        } else {
          return item.answer;
        }
      })
      console.log('avaliacao: ', json);
      return novo;
    }
    return null;
  }

  return (
      <>
        <ComponenteAvaliacaoDetalhes json={data} />
      </>
  );
};

export default AvaliacaoDetalhes;
