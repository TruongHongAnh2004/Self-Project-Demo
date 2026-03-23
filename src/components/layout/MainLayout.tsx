import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

const MainLayout = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header onSearch={setSearch} />

      <main>
        <Outlet context={{ search }} /> 
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;