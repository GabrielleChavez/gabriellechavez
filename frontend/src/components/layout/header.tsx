import { Button } from "@/components/ui/button";
import { button_color, text_color } from "@/lib/color-palatte";
import { toast } from "sonner";

const Header = () => {
  const handleButtonClick = (section: string) => {
    toast(`Currently in development: ${section} section!`);
  };

  return (
    <header className="w-full border-b h-30 flex items-center px-6 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto w-full flex items-center ">
        <Button
          variant="link"
          className={`text-2xl font-bold ${text_color} p-0 h-auto w-auto`}
        >
          Gabrielle's Portfolio
        </Button>

        <div className="ml-auto flex gap-4 ">
          <Button
            className={button_color}
            onClick={() => handleButtonClick("Contact")}
          >
            Contact Me
          </Button>
          <Button
            className={button_color}
            onClick={() => handleButtonClick("Projects")}
          >
            Projects
          </Button>
          <Button
            className={button_color}
            onClick={() => handleButtonClick("Research")}
          >
            Research
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
