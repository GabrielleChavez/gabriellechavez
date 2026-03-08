import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { button_color, text_color } from "@/lib/color-palatte";

const ContactInfo = () => {
  const email = "gchavez5@jh.edu";
  const linkedinUrl = "https://www.linkedin.com/in/gabrielle-chavez-411aba269e";
  const githubUrl = "https://github.com/GabrielleChavez";

  return (
    <section className="space-y-4">
      <div>
        <h2 className={`text-2xl font-bold ${text_color}`}>Get in touch</h2>
        <p className={`text-xl  ${text_color}`}>
          I&apos;m always open to new opportunities, collaborations, and
          conversations. Feel free to reach out.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-xl">
          <span className={`text-medium font-bold ${text_color}`}>Email: </span>
          <a
            href={`mailto:${email}`}
            className={`underline underline-offset-4 hover:text-primary ${text_color}`}
          >
            {email}
          </a>
        </p>

        <Button asChild variant="outline" className={`flex items-center gap-2 ${button_color}`}>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInLogoIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </Button>

        <Button asChild variant="outline" className={`flex items-center gap-2 ${button_color}`}>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <GitHubLogoIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactInfo;