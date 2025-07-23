// ProjectList.jsx
import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects }) {
  return (
    <section>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </section>
  );
}

