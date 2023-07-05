import React from "react";
import Add_products from "./components/product-folder/Add_products";
import Products_available from "./components/product-folder/Products_available";
import DataProvider from "./data_room/DataProvider";
import Header from "./components/header/Header";

function App() {
  return (
    <DataProvider>
      <header>
        <Header />
      </header>

      <main>
        <Add_products />
        <Products_available />
      </main>
    </DataProvider>
  );
}

export default App;
