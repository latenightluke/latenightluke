import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import Subhead from "../../components/subhead";
import SocialIcon from "../../components/social-icon";
import Badge from "../../components/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTechnologies, useProjects } from "../../hooks";

export default function index() {
  const projects = useProjects();
  const technologies = useTechnologies();

  return (
    <Layout>
      <Head>
        <title>Portfolio | Late Night Luke</title>
      </Head>

      <div>
        <div className="max-w-screen-lg mx-auto pt-20 px-4">
          <div className="text-center">
            <PageTitle>Skills</PageTitle>
            <Subhead className="mb-4">
              A range of technologies and tools I am well-versed in.
            </Subhead>
            {technologies?.map((tech) => (
              <Badge key={tech} color="indigo" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto pt-20 px-4">
          <div className="flex flex-col">
            <div className="text-center">
              <PageTitle>Projects</PageTitle>
              <Subhead>
                A collection of projects I've built and/or worked on.
              </Subhead>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects?.map((project) => (
                <PortfolioCard
                  title={project?.title}
                  badge={project?.badge}
                  isMainBadge={project?.isMainBadge}
                  technologies={project?.technologies}
                  bgClassName={project?.bgClassName}
                  siteLink={project?.siteLink}
                  githubLink={project?.githubLink}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto pt-20 px-4">
          <div className="flex flex-col">
            <div className="text-center">
              <PageTitle>Graphic Work</PageTitle>
              <Subhead>
                Some highlights from my email graphic work over the years for{" "}
                <a href="https://discountmags.com">DiscountMags.com</a>.
              </Subhead>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <GraphicCard
                src="/portfolio/graphics/1.gif"
                width={1200}
                height={3100}
              />
              <GraphicCard
                src="/portfolio/graphics/2.gif"
                width={1200}
                height={2292}
              />
              <GraphicCardMultiple
                srcs={[
                  {
                    src: "/portfolio/graphics/3-1.png",
                    width: 1200,
                    height: 256,
                  },
                  {
                    src: "/portfolio/graphics/3-2.gif",
                    width: 1200,
                    height: 1376,
                  },
                  {
                    src: "/portfolio/graphics/3-3.png",
                    width: 1200,
                    height: 1232,
                  },
                ]}
              />
              <GraphicCard
                src="/portfolio/graphics/5.gif"
                width={1200}
                height={1910}
              />
              <GraphicCard
                src="/portfolio/graphics/7.png"
                width={1200}
                height={2054}
              />
              <GraphicCard
                src="/portfolio/graphics/8.png"
                width={1200}
                height={2304}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const GraphicCard = ({ src, width, height, className }) => {
  return (
    <div className={className + " float-left mb-4 mr-4"}>
      <Image src={src} width={width} height={height} />
    </div>
  );
};
const GraphicCardMultiple = ({ srcs, className }) => {
  return (
    <div className={className + " float-left mb-4 mr-4"}>
      {srcs?.map((src) => (
        <img src={src.src} width={src.width} height={src.height} />
      ))}
    </div>
  );
};

const PortfolioCard = ({
  title,
  badge,
  isMainBadge,
  technologies,
  bgClassName,
  siteLink,
  showSiteLinkIcon,
  githubLink,
}) => {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-black dark:border-2 dark:border-indigo-400 bg-white">
      <div className="flex flex-col">
        <a
          href={siteLink}
          target="_blank"
          className={`group h-52 flex items-center justify-center ${bgClassName} bg-cover bg-center`}
        >
          <div className="flex items-center justify-center bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-80">
            <button
              icon={["far", "external-link"]}
              className="hidden group-hover:flex items-center justify-center text-white dark:text-black rounded-full bg-indigo-600 dark:bg-indigo-400 px-6 py-2"
            >
              Visit Site
              <FontAwesomeIcon
                icon={["far", "external-link"]}
                className="ml-2"
              />
            </button>
          </div>
        </a>
        <div className="px-3 pt-2 pb-3 bg-white flex justify-between items-center border-t-2 border-gray-200">
          <span>
            <div className="mb-1">
              <span className="font-bold">{title}</span>
              {badge && (
                <span
                  className={`ml-2 text-xs px-2 rounded-full ${
                    isMainBadge
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 bg-gray-200"
                  }`}
                >
                  {badge}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500">{technologies}</div>
          </span>
          <span>
            {showSiteLinkIcon && (
              <SocialIcon
                href={siteLink}
                className="text-black hover:text-indigo-400 px-0 text-sm"
                icon={["far", "external-link"]}
              />
            )}
            {githubLink && (
              <SocialIcon
                href={githubLink}
                className="text-black hover:text-indigo-400 px-0"
                icon={["fab", "github"]}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
