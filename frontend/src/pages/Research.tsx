import ResearchCards from "@/components/research/research-cards";
import { background_color, text_color } from "@/lib/color-palatte";

const Research = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-6">
      <div className={`shadow-2xl rounded-lg p-4 md:p-8 ${background_color}`}>
        <h2 className={`text-2xl font-bold mb-2 ${text_color}`}>Research</h2>
        <p className={text_color}>
          My research focuses on neurodegenerative disease assessment through
          handwriting analysis, combining signal processing, machine learning,
          and clinical data at Johns Hopkins University. 
        </p>
      </div>

      <ResearchCards />
    </div>
  );
};

export default Research;