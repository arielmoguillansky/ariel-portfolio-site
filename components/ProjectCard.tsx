import Image from "next/image";
import Link from "next/link";
import CardPlaceholder from "/public/images/Mechh.png";

type ProjectCardProps = {
  url: string;
  text: string;
};

const ProjectCard = ({ url, text }: ProjectCardProps) => (
  <Link href={url}>
    <div className="projectCard">
      <Image src={CardPlaceholder} alt="Work Background" layout="responsive" />
      <div className="overlayScreen">
        <h3>{text}</h3>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
