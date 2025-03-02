import "./Contact.css"
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <pre className="code-contact">
        <code>
          std::string email ={" "}
          <a
            href="mailto:vishesh18092003@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            "vishesh18092003@gmail.com"
          </a>
          ;<br />
          std::string github ={" "}
          <a
            href="https://github.com/Sukuna1003"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            "github.com/Sukuna1003"
          </a>
          ;<br />
          std::string linkedin ={" "}
          <a
            href="https://linkedin.com/in/vishesh1003"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            "linkedin.com/in/vishesh1003"
          </a>
          ;
        </code>
      </pre>
    </section>
  );
}