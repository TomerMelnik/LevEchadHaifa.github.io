import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="instagram"
            href={socialMedia.instgram}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12.004 2.007c2.688 0 3.012.012 4.065.059 1.054.046 1.787.207 2.395.442.748.289 1.29.671 1.872 1.253.582.582.964 1.124 1.253 1.872.235.608.396 1.341.442 2.395.047 1.053.059 1.377.059 4.065s-.012 3.012-.059 4.065c-.046 1.054-.207 1.787-.442 2.395-.289.748-.671 1.29-1.253 1.872-.582.582-1.124.964-1.872 1.253-.608.235-1.341.396-2.395.442-1.053.047-1.377.059-4.065.059s-3.012-.012-4.065-.059c-1.054-.046-1.787-.207-2.395-.442-.748-.289-1.29-.671-1.872-1.253-.582-.582-.964-1.124-1.253-1.872-.235-.608-.396-1.341-.442-2.395-.047-1.053-.059-1.377-.059-4.065s.012-3.012.059-4.065c.046-1.054.207-1.787.442-2.395.289-.748.671-1.29 1.253-1.872.582-.582 1.124-.964 1.872-1.253.608-.235 1.341-.396 2.395-.442 1.053-.047 1.377-.059 4.065-.059m0-2.007c-2.688 0-3.015.012-4.072.059-1.057.046-1.802.212-2.464.443-.825.288-1.532.674-2.22 1.362-.688.688-1.074 1.395-1.362 2.22-.231.662-.397 1.407-.443 2.464-.047 1.057-.059 1.384-.059 4.072s.012 3.015.059 4.072c.046 1.057.212 1.802.443 2.464.288.825.674 1.532 1.362 2.22.688.688 1.395 1.074 2.22 1.362.662.231 1.407.397 2.464.443 1.057.047 1.384.059 4.072.059s3.015-.012 4.072-.059c1.057-.046 1.802-.212 2.464-.443.825-.288 1.532-.674 2.22-1.362.688-.688 1.074-1.395 1.362-2.22.231-.662.397-1.407.443-2.464.047-1.057.059-1.384.059-4.072s-.012-3.015-.059-4.072c-.046-1.057-.212-1.802-.443-2.464-.288-.825-.674-1.532-1.362-2.22-.688-.688-1.395-1.074-2.22-1.362-.662-.231-1.407-.397-2.464-.443-1.057-.047-1.384-.059-4.072-.059z" />
              <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6" />
            </svg>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Issaaf Kattan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
