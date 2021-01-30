import React from "react";
import { BookListContextProvider } from "./BookListEditorContext";
import BookListForm from "./BookListForm";
import BookListEditor from "./BooksListEditor";

const BookList = () => {
  return (
    <>
      <BookListContextProvider>
        <BookListEditor />
        <BookListForm />
      </BookListContextProvider>
    </>
  );
};

export default BookList;
