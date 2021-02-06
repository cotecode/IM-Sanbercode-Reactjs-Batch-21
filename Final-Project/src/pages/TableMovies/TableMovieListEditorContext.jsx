// import React, { useState, createContext } from "react";

// export const TableMovieContext = createContext();

// export const TableMovieContextProvider = (props) => {
//   const [daftarMovie, setDaftarMovie] = useState(null);
//   const [inputTitle, setInputTitle] = useState("");
//   const [inputDescription, setInputDescription] = useState("");
//   const [inputYear, setInputYear] = useState(0);
//   const [inputDuration, setInputDuration] = useState(0);
//   const [inputGenre, setInputGenre] = useState("");
//   const [inputRating, setInputRating] = useState(0);
//   const [inputReview, setInputReview] = useState("");
//   const [inputImage, setInputImage] = useState("");
//   const [currentId, setCurrentId] = useState(null);

//   return (
//     <TableMovieContext.Provider
//       value={[
//         daftarMovie,
//         setDaftarMovie,
//         inputTitle,
//         setInputTitle,
//         inputDescription,
//         setInputDescription,
//         inputYear,
//         setInputYear,
//         inputDuration,
//         setInputDuration,
//         inputGenre,
//         setInputGenre,
//         inputRating,
//         setInputRating,
//         inputReview,
//         setInputReview,
//         inputImage,
//         setInputImage,
//         currentId,
//         setCurrentId,
//       ]}
//     >
//       {props.children}
//     </TableMovieContext.Provider>
//   );
// };

// export default TableMovieContext;
