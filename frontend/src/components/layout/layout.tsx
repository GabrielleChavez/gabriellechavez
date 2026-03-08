import Header from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (

    <div>
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
