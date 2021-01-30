import React, { useContext } from "react";
import { BookListContext } from "./BookListEditorContext";
import axios from "axios";

const BookListForm = () => {
  const [
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
  ] = useContext(BookListContext);

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/books`, {
          title: inputTitle,
          description: inputDescription,
          review: inputReview,
          release_year: inputRelease,
          totalPage: inputTotalPage,
          price: inputPrice,
          image_url: inputImage,
        })
        .then((res) => {
          let data = res.data;
          setDaftarBuku([
            ...daftarBuku,
            {
              id: data.id,
              title: data.title,
              description: data.description,
              review: data.review,
              release_year: data.release_year,
              totalPage: data.totalPage,
              price: data.price,
              image_url: data.image_url,
            },
          ]);
        });
    } else {
      axios
        .put(`http://backendexample.sanbercloud.com/api/books/${currentId}`, {
          title: inputTitle,
          description: inputDescription,
          review: inputReview,
          release_year: inputRelease,
          totalPage: inputTotalPage,
          price: inputPrice,
          image_url: inputImage,
        })
        .then(() => {
          let singleBook = daftarBuku.find((el) => el.id === currentId);
          singleBook.title = inputTitle;
          singleBook.description = inputDescription;
          singleBook.review = inputReview;
          singleBook.release_year = inputRelease;
          singleBook.totalPage = inputTotalPage;
          singleBook.price = inputPrice;
          singleBook.image_url = inputImage;
          setDaftarBuku([...daftarBuku]);
        });
    }
    setInputTitle("");
    setInputDescription("");
    setInputReview("");
    setInputRelease("");
    setInputTotalPage("");
    setInputPrice("");
    setInputImage("");
    setCurrentId(null);
  };

  // handle change
  const handleChange = (event) => {
    let inputValue = event.target.value;
    // setInputName(inputValue);
    let typeOfInput = event.target.name;
    switch (typeOfInput) {
      case "title": {
        setInputTitle(inputValue);
        break;
      }
      case "desc": {
        setInputDescription(inputValue);
        break;
      }
      case "review": {
        setInputReview(inputValue);
        break;
      }
      case "release": {
        setInputRelease(inputValue);
        break;
      }
      case "totPage": {
        setInputTotalPage(inputValue);
        break;
      }
      case "price": {
        setInputPrice(inputValue);
        break;
      }
      case "image": {
        setInputImage(inputValue);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Books Form</h1>
      <div style={{ border: "1px solid #aaa", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="inputName">
              <b>Title</b>
            </label>
            <input
              type="text"
              required
              id="inputTitle"
              name="title"
              value={inputTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="inputDescription">
              <b>Description</b>
            </label>
            <textarea
              required
              rows="4"
              cols="50"
              id="inputDescription"
              name="desc"
              value={inputDescription}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="inputReview">
              <b>Review</b>
            </label>
            <textarea
              required
              rows="4"
              cols="50"
              id="inputReview"
              name="review"
              value={inputReview}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="inputRelease">
              <b>Release</b>
            </label>
            <input
              type="number"
              required
              id="inputRelease"
              name="release"
              value={inputRelease}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="inputTotalPage">
              <b>Total Page</b>
            </label>
            <input
              type="number"
              required
              id="inputTotalPage"
              name="totPage"
              value={inputTotalPage}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="inputPrice">
              <b>Price</b>
            </label>
            <input
              type="number"
              required
              id="inputPrice"
              name="price"
              value={inputPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="inputImageUrl">
              <b>Image Url</b>
            </label>
            <input
              type="text"
              required
              id="inputImageUrl"
              name="image"
              value={inputImage}
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          <div style={{ width: "100%", paddingBottom: "20px" }}>
            <button style={{ float: "right", padding: "5px 10px" }}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookListForm;
