import { useState } from "react";

import Perfil from "./components/Perfil/Index";
import ReposList from "./components/ReposList";
import Formulario from "./components/Formulario/Index";

function App() {
  const [fomularioEstavisivel, setFomularioEstavisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  
  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 3 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}></Perfil>
        <ReposList nomeUsuario={nomeUsuario}></ReposList>
      </>
    )}

      {/* {fomularioEstavisivel && (
        <Formulario></Formulario>
      )}

      <button type="button" onClick={() => setFomularioEstavisivel(!fomularioEstavisivel)}>Toggle</button> */}
    </>

  )
}

export default App
