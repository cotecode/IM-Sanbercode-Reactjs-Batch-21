// import React, { useContext, useEffect } from "react";
// import { TableMovieContext } from "./TableMovieListEditorContext";
// import axios from "axios";
// import { Table } from "antd";

// const TableMovieEditor = () => {
//   const [
//     daftarMovie,
//     setDaftarMovie,
//     ,
//     setInputTitle,
//     ,
//     setInputDescription,
//     ,
//     setInputYear,
//     ,
//     setInputDuration,
//     ,
//     setInputGenre,
//     ,
//     setInputRating,
//     ,
//     setInputReview,
//     ,
//     setInputImage,
//     ,
//     setCurrentId,
//   ] = useContext(TableMovieContext);

//   useEffect(() => {
//     if (daftarMovie === null) {
//       axios
//         .get(`https://backendexample.sanbersy.com/api/data-movie`)
//         .then((res) => {
//           let data = res.data;
//           setDaftarMovie(
//             data.map((el) => {
//               return {
//                 id: el.id,
//                 title: el.title,
//                 description: el.description,
//                 year: el.year,
//                 duration: el.duration,
//                 genre: el.genre,
//                 rating: el.rating,
//                 review: el.review,
//                 image_url: el.image_url,
//               };
//             })
//           );
//         });
//     }
//   }, [daftarMovie]);

//   // handle edit
//   const handleEdit = (event) => {
//     let idMovie = event.target.value;
//     axios
//       .get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
//       .then((res) => {
//         let data = res.data;
//         setInputTitle(data.title);
//         setInputDescription(data.description);
//         setInputYear(data.year);
//         setInputDuration(data.duration);
//         setInputGenre(data.genre);
//         setInputRating(data.rating);
//         setInputReview(data.review);
//         setInputImage(data.image_url);
//         setCurrentId(data.id);
//       });
//   };

//   // handle delete
//   const handleDelete = (event) => {
//     let idMovie = parseInt(event.target.value);
//     axios
//       .delete(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
//       .then(() => {
//         let newDaftarMovie = daftarMovie.filter((el) => {
//           return el.id !== idMovie;
//         });
//         setDaftarMovie(newDaftarMovie);
//       });
//   };

//   return (
//       <body className="container-fluid">
//         {daftarMovie !== null && (
//           <section className="container" style={{ padding: "20px" }}>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <input type="text" placeholder="Search..." />
//               <button style={{ marginLeft: "10px" }}>Search</button>
//             </div>
//             <h1
//               style={{
//                 textAlign: "center",
//                 marginTop: "50px",
//                 fontSize: "40px",
//               }}
//             >
//               Daftar Movie
//             </h1>
//             <table id="table-movie">
//               <thead>
//                 <tr>
//                   <th>No</th>
//                   <th>Image</th>
//                   <th>Tittle</th>
//                   <th>Genre</th>
//                   <th>Description</th>
//                   <th>Rating</th>
//                   <th>Duration</th>
//                   <th>Year</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {daftarMovie.map((item, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         <img src={item.image_url} alt="img" height="300" />
//                       </td>
//                       <td>{item.title}</td>
//                       <td>{item.genre}</td>
//                       <td>{item.description}</td>
//                       <td>{item.rating}</td>
//                       <td>{item.duration}</td>
//                       <td>{item.year}</td>
//                       <td>
//                         <button onClick={handleEdit} value={item.id}>
//                           Edit
//                         </button>
//                         <button onClick={handleDelete} value={item.id}>
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </section>
//         )}
//       </body>
//   );
// };

// export default TableMovieEditor;


