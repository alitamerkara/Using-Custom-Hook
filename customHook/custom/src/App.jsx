import { useState } from "react";
import useCustom from "./useCustom";

function App() {
  const [name, setName, resetName] = useCustom("");
  const [surname, setSurname, resetSurname] = useCustom("");
  const active = (e) => {
    e.preventDefault();
    alert(`Merhaba ${name} ${surname}`);
    resetName();
    resetSurname();
  };
  return (
    <>
      <form onSubmit={active}>
        <div>
          <label>İsminiz</label>
          <input {...setName} />
        </div>
        <div>
          <label>Soyisminiz</label>
          <input {...setSurname} />
        </div>
        <button onClick={active}>Kaydet</button>
      </form>
    </>
  );
}

export default App;
