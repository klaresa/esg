import React from "react";
import {Route, Routes} from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Documentos from "./pages/Documentos";
import Empresas from "./pages/Empresas";
import Avaliacao from "./pages/Avaliacao";
import AvaliacaoDetalhes from "./pages/AvaliacaoDetalhes";


export const MyRoutes = () => {

  return (
      <Routes>
        <Route exact path="/" element={<Index/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>

        <Route path="/admin" element={<div>admins page</div>}/>
        <Route path="/admin/documentos" element={<Documentos/>}/>
        <Route path="/admin/empresas" element={<Empresas/>}/>
        <Route path="/admin/avaliacao" element={ <Avaliacao/> }/>


        <Route path="/empresa/avaliacao" element={ <Avaliacao/> }/>
        <Route path="/empresa/avaliacao/details/:id" element={ <AvaliacaoDetalhes /> }/>


        <Route path="/cadastro" element={<Cadastro/>}/>


        <Route path="*" element={<p>Página não encontrada - 404</p>}/>
      </Routes>
  );
};
