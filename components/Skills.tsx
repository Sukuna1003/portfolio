export default function Skills() {
  const skills = ["C/C++", "Data Structures & Algorithms", "Multithreading", "Memory Management", "Git", "Linux", "Web Development"];

  return (
    <section className="skills" id="skills">
      <pre className="code-skills">
        <code>
          {`std::vector<std::string> skills = {\n  "${skills.join('",\n  "')}"};`}
        </code>
      </pre>
    </section>
  );
}