import Link from "next/link";
import socialMedia from "@content/socialMedia";
import {
  FadeContainer,
  opacityVariant,
  popUp,
} from "../content/FramerMotionVariants";
import { navigationRoutes } from "../utils/utils";
import { motion } from "framer-motion";

export default function Footer() {

  return (
    <footer className="w-screen text-gray-600 dark:text-gray-400/50 font-inter mb-14 print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="flex flex-col max-w-4xl gap-5 p-5 mx-auto text-sm border-t-2 border-gray-200 2xl:max-w-5xl 3xl:max-w-7xl dark:border-gray-400/10 sm:text-base"
      >
        <section className="grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-4 capitalize">
            {navigationRoutes.slice(0, 2).map((text, index) => {
              return <FooterLink key={index} route={text} text={text} />;
            })}
          </div>
          <div className="flex flex-col gap-4 capitalize">
            {navigationRoutes
              .slice(2, navigationRoutes.length)
              .map((route, index) => {
                let text = route;
                return <FooterLink key={index} route={route} text={text} />;
              })}
          </div>
          <div className="flex flex-col gap-4 capitalize">
            {socialMedia.map((platform, index) => {
              return (
                <Link
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.p
                    className="hover:text-black dark:hover:text-white w-fit"
                    variants={popUp}
                  >
                    {platform.title}
                  </motion.p>
                </Link>
              );
            })}
          </div>
        </section>
        <motion.div
          variants={opacityVariant}
          className="flex items-center justify-center gap-2 mt-5 text-black dark:text-white"
        >
          <span>Powered by</span>

          <Link
            target="_blank"
            aria-label="Next.js"
            rel="noreferrer"
            href="https://nextjs.org"
            className="font-semibold hover:underline"
          >
            Next.js
          </Link>
          <span>and</span>
          <Link
            target="_blank"
            aria-label="Vercel"
            rel="noreferrer"
            href="https://vercel.com"
            className="font-semibold hover:underline"
          >
            Vercel
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterLink({ route, text }: { route: string; text: string }) {
  return (
    <Link href={`/${route}`}>
      <motion.p
        className="hover:text-black dark:hover:text-white w-fit"
        variants={popUp}
      >
        {text}
      </motion.p>
    </Link>
  );
}