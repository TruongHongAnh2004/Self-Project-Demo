import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const MainLayout = () => {
  const handleSearch = (text: string) => {
    // handle search input from Header (adjust implementation as needed)
    console.log("Search:", text);
  };
  
  return (
    <div>
      <Header onSearch={handleSearch} />

      <main>
        <Outlet  /> 
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;