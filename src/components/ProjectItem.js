
export default function ProjectItem({ name, about, technologies }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{about}</p>
      <div>
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
