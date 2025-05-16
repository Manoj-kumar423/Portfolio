import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: '✅ CI/CD Pipeline for Flask App Deployment on Kubernetes using Argo CD and Docker Hub',
      github: 'https://github.com/Manoj-kumar423/GitOps.git',
    },
    {
      name: '✅ Terraform-based EKS Setup with CI/CD for Dockerized App Deployment via Argo CD',
      github: 'https://github.com/Manoj-kumar423/Terraform.git',
    },
    {
      name: '✅ AWS Infrastructure Provisioning using Terraform for EKS Cluster',
      github: 'https://github.com/Manoj-kumar423/Terrform.git',
    },
  ];

  return (
    <section id="projects" style={{ padding: '50px' }}>
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {project.name}{' '}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff', marginLeft: '10px', textDecoration: 'none' }}
            >
              🔗 GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
