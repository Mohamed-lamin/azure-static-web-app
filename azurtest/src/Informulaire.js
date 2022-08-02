import React, { useState } from "react"
import axios from "axios"
const Informulaire = () => {
  const [info, setInfo] = useState({ nom: "", prenom: "", datenaissance: "" })

  const envoyer = e => {
    e.preventDefault()
    console.log(info)
    axios
      .post("http://localhost:7071/api/testazurefunc", info)
      .then(response => console.log(response.json))
  }
  return (
    <div>
      <form onSubmit={envoyer}>
        <input
          name="nom"
          onChange={e => setInfo({ ...info, nom: e.target.value })}
        />

        <input
          name="prenom"
          onChange={e => setInfo({ ...info, prenom: e.target.value })}
        />

        <input
          name="datenaissance"
          onChange={e => setInfo({ ...info, datenaissance: e.target.value })}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Informulaire
