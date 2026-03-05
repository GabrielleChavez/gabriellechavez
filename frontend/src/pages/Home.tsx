import Content from "@/components/layout/home-content";
import { background_color } from "../lib/color-palatte";

const Homepage = () => {
  return (
    <div className={`flex flex-col items-center min-h-screen ${background_color} p-4`}> 
      <Content />
    </div>
  );
}

export default Homepage;