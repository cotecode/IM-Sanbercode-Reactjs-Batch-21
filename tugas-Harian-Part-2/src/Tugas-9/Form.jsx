import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label for="inputName">
          <b>Nama Pelanggan</b>
        </label>
        <input type="text" id="inputName"/>
      </div>
      <div className="form-group">
        <label>
          <b>Daftar Item</b>
        </label>
        <label>
          <input type="checkbox" />
          Semangka
          <br />
        </label>
        <label></label>
        <label>
          <input type="checkbox" />
          Jeruk
          <br />
        </label>
        <label></label>
        <label>
          <input type="checkbox" />
          Nanas
          <br />
        </label>
        <label></label>
        <label>
          <input type="checkbox" />
          Salak
          <br />
        </label>
        <label></label>
        <label>
          <input type="checkbox" />
          Anggur
          <br />
        </label>
      </div>
    </form>
  );
};

export default Form;
