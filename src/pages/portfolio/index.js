import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import Subhead from "../../components/subhead";
import ProjectCard from "../../components/project-card";
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
        <div className="max-w-screen-xl mx-auto pt-6 pb-6 lg:pt-20 px-6">
          <div className="flex flex-col">
            <div className="text-center">
              <PageTitle>Projects</PageTitle>
              <Subhead>
                A collection of projects I've built and/or worked on.
              </Subhead>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects?.map((project) => (
                <ProjectCard
                  key={project?.title}
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

        <div className="max-w-screen-lg mx-auto pt-6 pb-6 lg:pt-20 px-6">
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

        <div className="max-w-screen-xl mx-auto pt-6 lg:pt-20 px-6 lg:mb-28">
          <div className="flex flex-col">
            <div className="text-center">
              <PageTitle>Graphic Work</PageTitle>
              <Subhead>
                Some highlights from my email graphic work over the years.
              </Subhead>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <GraphicCard src="/graphics/1.gif" width={1200} height={3100} />
              <GraphicCard src="/graphics/2.gif" width={1200} height={2292} />
              <GraphicCardMultiple
                srcs={[
                  {
                    src: "/graphics/3-1.png",
                    width: 1200,
                    height: 256,
                  },
                  {
                    src: "/graphics/3-2.gif",
                    width: 1200,
                    height: 1376,
                  },
                  {
                    src: "/graphics/3-3.png",
                    width: 1200,
                    height: 1232,
                  },
                ]}
              />
              <GraphicCard src="/graphics/5.gif" width={1200} height={1910} />
              <GraphicCard src="/graphics/7.png" width={1200} height={2054} />
              <GraphicCard src="/graphics/8.png" width={1200} height={2304} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const GraphicCard = ({ src, width, height, className }) => {
  return (
    <div className={className}>
      <Image src={src} width={width} height={height} />
    </div>
  );
};
const GraphicCardMultiple = ({ srcs, className }) => {
  return (
    <div className={className}>
      {srcs?.map((src) => (
        <img
          key={src.src}
          src={src.src}
          width={src.width}
          height={src.height}
        />
      ))}
    </div>
  );
};
