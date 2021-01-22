import React from "react";
import Title from "./Title";
import Form from "./Form";
import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <Title judul="Form Pembelian Buah" />
      <Form />
      <Button />
    </div>
  );
}

export default Card;
