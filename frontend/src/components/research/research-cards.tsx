import researchData from "@/data/db-research.json";
import type { ResearchPaperType } from "@/data/types";
import { Button } from "@/components/ui/button";
import { background_color, text_color, button_color } from "@/lib/color-palatte";

const ResearchCards = () => {
  const papers: ResearchPaperType[] = researchData.research;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {papers
        .sort((a, b) => (a.year > b.year ? -1 : 1))
        .map((paper, index) => (
          <div
            key={index}
            className={`flex flex-col gap-3 shadow-xl rounded-lg p-5 ${background_color}`}
          >
            <div className="flex items-start justify-between gap-2">
            <p className={`text-xl font-bold ${text_color}`}>
                {paper.title}
                </p>
              <span className={`text-sm shrink-0 ${text_color} opacity-70`}>
                {paper.year}
              </span>
            </div>

            <p className={`text-sm italic opacity-70 ${text_color}`}>{paper.description}</p>

            <div className="mt-auto pt-2 border-t border-rose-200">
              {paper.link ? (
                <Button
                  className={button_color}
                  onClick={() => window.open(paper.link, "_blank")}
                >
                  View Paper
                </Button>
              ) : (
                <Button disabled variant="outline" className={`opacity-50 ${text_color}`}>
                  Link Coming Soon
                </Button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ResearchCards;