import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/getApiData";
import ComponenteDocumentos from "../../components/Documentos";
import AddNewDocumento from "../../components/AddNewDocumento";
import {
  Box,
} from "./styles";


const Documentos = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response = await getApiData("/documentos");

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
        <AddNewDocumento handleChange={handleChange} />
        <ComponenteDocumentos data={data} />
      </>
  );
};

export default Documentos;
