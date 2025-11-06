import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 4,
    title: "Tradutor com API",
    description:
      "Este é um projeto pessoal que desenvolvi para aplicar os meus conhecimentos em TailwindCSS e Consumo de APIs com React.",
    image: "/projects/Tradutor.png",
    tags: ["React", "Tailwind", "API Restful"],
    demoUrl: "https://tradutor-com-api.vercel.app/",
    github: "https://github.com/HeitorLeite/Tradutor-com-API",
  },
  {
    id: 3,
    title: "Cadastro de Usuário",
    description:
      "Este é um projeto que eu fiz para entender mais sobre integração entre React, Node.js, Express e MongoDB para criação de servidor. É um cadastrador de usuários que coleta as informações digitadas e coloca em um banco de dados para exibir.",
    image: "/projects/CadastroUsuario.png",
    tags: ["React", "Tailwind", "Node.js", "Express", "API Restful", "MongoDB"],
    demoUrl: "https://cadastro-de-usuario-ten.vercel.app/",
    github: "https://github.com/HeitorLeite/Cadastro-de-Usuario",
  },
  {
    id: 2,
    title: "Site Lili Festas",
    description:
      "Esse é o projeto de uma landing page que desenvolvi para uma doceira da região, focada em apresentar seu trabalho para os clientes.",
    image: "/projects/LiliFestas.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lili-festas.vercel.app/",
    github: "https://github.com/HeitorLeite/Lili-Festas",
  },
  {
    id: 1,
    title: "Site Guaratá",
    description:
      "Esse foi o primeiro projeto profissional que desenvolvi, foi para uma empresas local de carros por aplicativo chamada Guaratá, o foco dessa página é apresentar o aplicativo e a empresa para novos usuários.",
    image: "/projects/Guarata.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "http://guarata.com.br/",
    github: "https://github.com/HeitorLeite/Site-Guarata",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Projetos</span> Feitos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Abaixo estão meus principais projetos desenvolvidos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/HeitorLeite"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Veja o meu Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
