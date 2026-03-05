import Header from "./header";
import { Outlet } from "react-router-dom";
import { background_color } from "../../lib/color-palatte";

const Layout = () => {
  return (
    <div className={`flex flex-col min-h-screen ${background_color}`}>
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
