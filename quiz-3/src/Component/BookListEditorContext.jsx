import React, { useState, createContext } from "react";

export const BookListContext = createContext();

export const BookListContextProvider = (props) => {
  const [daftarBuku, setDaftarBuku] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputReview, setInputReview] = useState("");
  const [inputRelease, setInputRelease] = useState(2020);
  const [inputTotalPage, setInputTotalPage] = useState(0);
  const [inputPrice, setInputPrice] = useState(0);
  const [inputImage, setInputImage] = useState("");
  const [currentId, setCurrentId] = useState(null);

  return (
    <BookListContext.Provider
      value={[
        daftarBuku,
        setDaftarBuku,
        inputTitle,
        setInputTitle,
        inputDescription,
        setInputDescription,
        inputReview,
        setInputReview,
        inputRelease,
        setInputRelease,
        inputTotalPage,
        setInputTotalPage,
        inputPrice,
        setInputPrice,
        inputImage,
        setInputImage,
        currentId,
        setCurrentId,
      ]}
    >
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContext;
