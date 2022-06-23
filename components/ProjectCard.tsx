import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  url: string;
  text: string;
  subtitle: string;
  children: any;
};

const ProjectCard = ({ url, text, children, subtitle }: ProjectCardProps) => (
  <Link href={url}>
    <div className="project-card">
      {children}
      <div className="overlayScreen">
        <h3>{text}</h3>
        <span>{subtitle}</span>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
