import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      {/* <main >
        {children}
      </main> */}

      <main className="">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;