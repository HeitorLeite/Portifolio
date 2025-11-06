import { Briefcase, User, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Desenvolvedor FullStack</h3>
            <p className="text-muted-foreground">
              Desde que entrei na faculdade começei a me interessar muito pelo
              desenvolvimento Fullstack, pois gosto muito de me envolver com os
              dois lados do trabalho.
            </p>
            <p className="text-muted-foreground">
              Atualmente estou no 2° Semestre da faculdade e estou sempre
              estudando e me aprimorando em novas tecnologias para nunca ficar
              para trás.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Clique entre em contato
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">
                    Estou estudando e me aprimorando em tecnologias relacionadas
                    a esta área como React, TailwindCSS, Node, Express e Banco
                    de Dados.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX</h4>
                  <p className="text-muted-foreground">
                    Por mais que não seja o meu foco principal, para executar o
                    meus projetos precisei aprender bastante e tenho um sólido
                    conhecimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Gerenciamento de projetos
                  </h4>
                  <p className="text-muted-foreground">
                    Sempre busco ter boas praticas e uma boa organização no
                    gerenciamento de todos os projetos, desde a organização dos
                    arquivos até a própria estrutura do código como uma API
                    Restful por exemplo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
