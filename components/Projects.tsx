import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "C++ Thread Pool",
      desc: "A lightweight thread pool for parallel task execution.",
      tech: "C++, Multithreading",
      link: "https://github.com/yourusername/thread-pool",
    },
    {
      title: "DSA Library",
      desc: "Custom library with efficient implementations of common data structures.",
      tech: "C++, STL",
      link: "https://github.com/yourusername/dsa-lib",
    },
    {
      title: "Memory Allocator",
      desc: "A custom memory allocator optimized for performance.",
      tech: "C, Pointers",
      link: "https://github.com/yourusername/mem-alloc",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}