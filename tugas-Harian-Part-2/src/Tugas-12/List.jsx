import React from "react";
import Tittle from "../Tugas-9/Title";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      input: "",
      nama: "",
      harga: "",
      berat: "",
      currentIndex: -1,
    };
  }

  // submit action
  handleSubmit = (event) => {
    event.preventDefault();
    let nama = this.state.nama;
    let harga = this.state.harga;
    let berat = this.state.berat;
    let newdataHargaBuah = this.state.dataHargaBuah;
    let currentIndex = this.state.currentIndex;

    if (currentIndex === -1) {
      this.setState({
        dataHargaBuah: [
          ...this.state.dataHargaBuah,
          {
            nama: nama,
            harga: harga,
            berat: berat,
          },
        ],
        input: "",
      });
    } else {
      newdataHargaBuah[currentIndex] = this.state.input;
      this.setState({
        newdataHargaBuah,
        input: "",
        currentIndex: -1,
      });
    }
  };

  // change
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //edit
  handleEdit = (event) => {
    let index = event.target.value;
    let dataBuah = this.state.dataHargaBuah[index];
    this.setState({
      namaBuah: dataBuah.nama,
      hargaBuah: dataBuah.harga,
      beratBuah: dataBuah.berat,
    });
  };

  // delete
  handleDelete = (event) => {
    let index = parseInt(event.target.value);
    let newDataBuah = this.state.dataHargaBuah.filter((val, idx) => {
      return idx !== index;
    });
    this.setState({ dataHargaBuah: [...newDataBuah] });
  };

  render() {
    return (
      <>
        <Tittle judul="Daftar Harga Buah" />
        <table id="table-buah">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataHargaBuah.map((item, index) => {
              return (
                <tr>
                  <td>{item.nama}</td>
                  <td>{item.harga}</td>
                  <td>{item.berat / 1000} kg</td>
                  <td>
                    <button onClick={this.handleEdit} value={index}>
                      Edit
                    </button>
                    <button onClick={this.handleDelete} value={index}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/************************* FORM SECTION ****************************/}
        <Tittle judul="Form Daftar Harga Buah" />
        <div style={{ border: "1px solid black", padding: "30px" }}>
          <form onSubmit={this.handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <label>
                <b>Nama :</b>
              </label>
              <input
                name="nama"
                onChange={this.handleChange}
                value={this.state.namaBuah}
                required
                type="text"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <label>
                <b>Harga :</b>
              </label>
              <input
                name="harga"
                onChange={this.handleChange}
                value={this.state.hargaBuah}
                required
                type="text"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <label>
                <b>Berat (dalam gram) :</b>
              </label>
              <input
                name="berat"
                onChange={this.handleChange}
                value={this.state.beratBuah}
                required
                type="text"
              />
            </div>
            <button style={{ float: "right" }}>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default List;
