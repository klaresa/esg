import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/getApiAvaliacaoData";
import ComponenteAvaliacao from "../../components/Avaliacao";
import {
  Box,
} from "./styles";


const Avaliacao = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response = await getApiData("/avaliacao");

    console.log(`------ DATA ------ ${response}`)

    setData(response);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  function handleChange() {
    handleFetch();
  }

  return (
      <>
        <ComponenteAvaliacao data={data} />
      </>
  );
};

export default Avaliacao;
