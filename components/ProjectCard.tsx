import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type ProjectCardProps = {
  url: string;
  text: string;
  subtitle: string;
  externalLink?: string;
  children: any;
};

const ProjectCard = ({
  url,
  text,
  children,
  subtitle,
  externalLink,
}: ProjectCardProps) => {
  const { locale } = useRouter();
  return (
    <Link href={url} className="">
      <div className="project-card">
        {children}
        <div className="overlay-screen">
          <h3>{text}</h3>
          <span>{subtitle}</span>
          {externalLink && (
            <span
              className="external-link"
              onClick={(e) => {
                e.preventDefault();
                window.open(externalLink, "_blank", "noreferrer");
              }}
            >
              {locale === "en-US" ? "visit website" : "visitar sitio web"}
              <i className="icon-external-link" />
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
