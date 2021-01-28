import React, { useState, createContext } from "react";

export const DaftarBuahContext = createContext();

export const DaftarBuahProvider = (props) => {
  const [daftarBuah, setDaftarBuah] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputHarga, setInputHarga] = useState("");
  const [inputBerat, setInputBerat] = useState(0);
  const [currentId, setCurrentId] = useState(null);

  return (
    <DaftarBuahContext.Provider
      value={[
        daftarBuah,
        setDaftarBuah,
        inputName,
        setInputName,
        inputHarga,
        setInputHarga,
        inputBerat,
        setInputBerat,
        currentId,
        setCurrentId,
      ]}
    >
      {props.children}
    </DaftarBuahContext.Provider>
  );
};
