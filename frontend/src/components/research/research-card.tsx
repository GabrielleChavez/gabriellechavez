import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ResearchPaperType } from "@/data/types";
import { background_color, text_color, button_color } from "@/lib/color-palatte";

type ResearchCardProps = {
  paper: ResearchPaperType;
};

const ResearchCard = ({ paper }: ResearchCardProps) => {
  return (
    <Card className={`w-full shadow-xl border-none ${background_color}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className={`text-lg font-bold ${text_color}`}>
            {paper.title}
          </CardTitle>
          <span className={`text-sm shrink-0 font-medium ${text_color} opacity-70`}>
            {paper.year}
          </span>
        </div>
        <CardDescription className={`text-sm italic ${text_color} opacity-70`}>
          {paper.description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
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
      </CardFooter>
    </Card>
  );
};

export default ResearchCard;