import React from 'react'

class Name extends React.Component {
  render() {
    return <td>{this.props.name}</td>;
  }
}

class Price extends React.Component {
  render() {
    return <td>{this.props.price}</td>;
  }
}

class Weight extends React.Component {
  render() {
    return <td>{this.props.weight} kg</td>;
  }
}

class DetailItem extends React.Component {
  render() {
    let dataHargaBuah = [
      { nama: "Semangka", harga: 10000, berat: 1000 },
      { nama: "Anggur", harga: 40000, berat: 500 },
      { nama: "Strawberry", harga: 30000, berat: 400 },
      { nama: "Jeruk", harga: 30000, berat: 1000 },
      { nama: "Mangga", harga: 30000, berat: 500 },
    ];
    return (
      <>
        {dataHargaBuah.map((item) => {
          return (
            <tr>
              <Name name={item.nama} />
              <Price price={item.harga} />
              <Weight weight={item.berat / 1000} />
            </tr>
          );
        })}
      </>
    );
  }
}

export default DetailItem