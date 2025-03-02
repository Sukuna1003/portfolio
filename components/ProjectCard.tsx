interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string;
  link: string;
}

export default function ProjectCard({ title, desc, tech, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <pre className="code-project">
        <code>
          {`void ${title}() {\n  // Description: ${desc}\n  // Tech: ${tech}\n  // Link: ${link}\n}`}
        </code>
      </pre>
    </div>
  );
}