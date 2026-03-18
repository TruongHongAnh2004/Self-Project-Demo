import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;