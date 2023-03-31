import React, {useEffect, useState} from "react";
import {getApiData} from "../../services/getApiAvaliacaoData";
import ComponenteAvaliacaoDetalhes from "../../components/AvaliacaoDetalhes";


const AvaliacaoDetalhes = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response = await getApiData(`/avaliacao/6421df33c18d7e6bbe5d8861`);

    console.log(`------ DATA ------ ${JSON.stringify(response)}`)

    setData(response.documento);
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
