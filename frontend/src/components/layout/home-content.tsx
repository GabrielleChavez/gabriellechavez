import { background_color, text_color } from "@/lib/color-palatte";

const Content = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-6">

      <div className={`flex flex-row items-center gap-6 shadow-2xl rounded-lg p-4 md:p-8 ${background_color}`}>
        <img
          src="/images/profile.jpg"
          alt="Gabrielle"
          className="rounded-lg w-40 h-48 object-cover shrink-0"
        />

        <div>
          <h1 className={`text-2xl font-bold mb-4 ${text_color}`}>
            Welcome to My Portfolio
          </h1>

          <p className={`mb-4 ${text_color}`}>
            Hello! I'm Gabrielle, a Computer Engineering student at Johns
            Hopkins University. My interests span robotics, web development,
            and research. Whether I'm building a web app, working on a robot,
            or exploring a research problem, I'm always looking for ways to
            create something meaningful. Feel free to explore my projects and
            research, and don't hesitate to reach out if you'd like to connect!
          </p>
        </div>
      </div>

      <div className={`shadow-2xl rounded-lg p-4 md:p-8 ${background_color}`}>
        <h2 className={`text-xl font-semibold mb-2 ${text_color}`}>
          Background
        </h2>

        <p className={`mb-4 ${text_color}`}>
          I originally joined Johns Hopkins in 2022 as an undecided engineering
          major. After taking Intro to Electrical and Computer Engineering on a
          whim, I quickly realized that Computer Engineering was the right fit
          for me.
        </p>

        <p className={`mb-4 ${text_color}`}>
          One of the things I love about this major is that it sits at the
          intersection of hardware and software — bridging the physical world
          of electronics with the digital world of programming.
        </p>

        <h2 className={`text-xl font-semibold mb-2 ${text_color}`}>
          Experience
        </h2>

        <p className={`mb-4 ${text_color}`}>
          I have experience in software development with a focus on building
          efficient and scalable solutions.
        </p>

        <h2 className={`text-xl font-semibold mb-2 ${text_color}`}>
          Skills
        </h2>

        <p className={`mb-4 ${text_color}`}>
          I work with a variety of programming languages, frameworks, and
          engineering tools, and I continuously strive to improve my technical
          and problem-solving skills.
        </p>
      </div>

    </div>
  );
};

export default Content;