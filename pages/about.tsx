import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import { ILinkedinResponse } from "@lib/interface";

import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { IStaticPage } from "@lib/interface/sanity";
import Image from "next/image";
import StaticPage from "@components/StaticPage";
import classNames from "classnames";
import { getUserDataValue } from "@lib/supabase";
import { months } from "@utils/date";
import { motion } from "framer-motion";
import pageMeta from "@content/meta";

export default function About({
  about,
  linkedin,
}: {
  about: IStaticPage;
  linkedin: string;
}) {
  const parsedLinkedIn: ILinkedinResponse = JSON.parse(linkedin);
  return (
    <>
      <StaticPage metadata={pageMeta.about} page={about} />

      <div className="pageTop mt-0 print:hidden">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={opacityVariant}
          className="my-2 text-xl font-bold text-left md:text-3xl"
        >
          Recent Experience
        </motion.h3>

        <AnimatedDiv
          variants={FadeContainer}
          className="flex flex-col gap-2 pt-10 pb-5 overflow-x-scroll md:gap-4"
        >
          {parsedLinkedIn.experiences.map((experience) => {
            return (
              <div
                key={experience.company_linkedin_profile_url}
                className="p-5 bg-white dark:bg-darkSecondary rounded-lg flex flex-start gap-3 shadow flex-col xs:flex-row"
              >
                <div className="min-w-[56px] w-14 h-14 max-w-[56px] relative mt-1">
                  <Image
                    src={experience.logo_url}
                    width={400}
                    height={400}
                    className="object-cover"
                    alt={experience.company}
                  />
                </div>

                <div
                  className={classNames(
                    "flex flex-col gap-2 flex-grow", "ml-0"
                  )}
                >
                <h2
                  className={classNames(
                    "text-xl font-semibold",
                    "ml-0"
                  )}
                >
                  {experience.company}
                </h2>
                <div className="relative w-full group">
                  <div
                    className={
                      "flex flex-col sm:flex-row items-start sm:justify-between"
                    }
                  >
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold relative">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.location}
                      </p>
                    </div>
                    <div>
                    <div className="flex items-center gap-1 text-sm">
                      <span>
                        {months[experience.starts_at.month - 1]}{" "}
                        {experience.starts_at.year}
                      </span>
                      <span> - </span>
                      <span>
                        {!experience.ends_at ? (
                          "Present"
                        ) : (
                          <>
                            {months[experience.ends_at.month - 1]}{" "}
                            {experience.ends_at.year}
                          </>
                        )}
                      </span>
                    </div>
                      </div>
                    </div>
                    {experience.description && (
                      <p className="whitespace-pre-wrap mt-2 text-sm text-black/80 dark:text-white/50">
                        {experience.description}
                      </p>
                    )}
                    </div>
                </div>
              </div>
            );
          })}
        </AnimatedDiv>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const about = {
    title: 'About me',
    slug: { current: 'about', _type: 'slug' },
    keywords: 'Kamil Krutul, Full Stack Developer, Front-end developer, React developer, web application interfaces, React.js, Next.js, Computer Science, web development, programming languages, C, Python, C++, databases, Firebase, MySQL, Supabase, blogging, DEV, sci-fi movies, web series, Next.js framework, Firebase database, TailwindCSS, portfolio, Twitter, email, GitHub',
    excerpt: "As a Senior Full Stack Developer, I bring over eight years of comprehensive experience in both front-end and back-end development across diverse industries. I am proficient in a variety of programming languages and technologies including JavaScript, Python, Java, PHP, React, Angular, Vue, Django, and Node.js. My expertise extends to advanced cloud solutions such as AWS, where I have implemented scalable and secure infrastructure.Throughout my career, I have developed a multitude of web applications ranging from e-commerce platforms to complex decentralized systems and interactive mobile applications. My projects often include developing crucial features such as user authentication, data encryption, and real-time performance optimization. In addition to my technical abilities, I am a problem solver at heart, always eager to tackle complex challenges and enhance the user experience. I strive to stay at the forefront of technology trends and continuously improve my skills through learning and professional development. As I look forward to new opportunities, I am keen to leverage my skills in a role that challenges me to deliver innovative solutions and grow as part of a dynamic team.",
  }

  const { data: linkedin } = await getUserDataValue("linkedin");

  return {
    props: {
      about,
      linkedin,
    },
    revalidate: 60 * 60 * 24 , // everyday
  };
}
