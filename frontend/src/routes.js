import React from "react";
import {Route, Routes} from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import EmpresaPerfil from "./pages/Perfil";

import Documentos from "./pages/Documentos";
import EmpresaDocumentos from "./pages/EmpresaDocumentos";

import Empresas from "./pages/Empresas";
import Avaliacao from "./pages/Avaliacao";
import AvaliacaoDetalhes from "./pages/AvaliacaoDetalhes";
import EmpresaDocumentosDetalhes from "./pages/EmpresaDocumentosDetalhes";


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
        <Route path="/admin/documentos/details/:id" element={ <AvaliacaoDetalhes /> }/>


        <Route path="/empresa/perfil" element={<EmpresaPerfil/>}/>

        <Route path="/empresa/documentos" element={<EmpresaDocumentos/>}/>
        <Route path="/empresa/documentos/details/:id" element={ <EmpresaDocumentosDetalhes /> }/>

        <Route path="/empresa/avaliacao" element={ <Avaliacao /> }/>
        <Route path="/empresa/avaliacao/details/:id" element={ <AvaliacaoDetalhes /> }/>


        <Route path="/cadastro" element={<Cadastro/>}/>


        <Route path="*" element={<p>Página não encontrada - 404</p>}/>
      </Routes>
  );
};
