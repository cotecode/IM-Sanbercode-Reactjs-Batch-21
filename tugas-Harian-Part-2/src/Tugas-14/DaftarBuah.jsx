import React from "react";
import { DaftarBuahProvider } from "./DaftarBuahContext";
import DaftarBuahList from "./DaftarBuahList";
import DaftarBuahForm from "./DaftarBuahForm";

const DaftarBuah = () => {
  return (
    <div>
      <DaftarBuahProvider>
        <DaftarBuahList />
        <DaftarBuahForm />
      </DaftarBuahProvider>
    </div>
  );
};

export default DaftarBuah;
