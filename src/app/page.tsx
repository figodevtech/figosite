import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Landing Page ANE",
      company: "ANE - Águas do Nordeste",
      description:
        "Landing Page completa para uma demostração ampla dos serviços oferecidos pela empresa.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
      ],
      isComplete: true,
      image: "/ane-main-page.png",
      liveUrl: "https://ane-com-br.vercel.app/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Sistema de Gestão de Barbearia",
      company: "Barbearia Royal",
      description:
        "Plataforma integrada para gestão de barbearia com gestão de usuários, módulo financeiro, registro de serviços e agendamento online.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
      ],
      isComplete: true,

      image: "/royal-dashboard.png",
      liveUrl: "https://barbeariaroyal.vercel.app/",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "ERP para Doceria",
      company: "Palpitar Confeitaria",
      description:
        "Sistema ERP completo para gestão de doceria, incluindo controle de estoque, vendas, clientes e relatórios financeiros.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
      ],
      isComplete: false,

      image: "/palpitar-dashboard.png",
      liveUrl:
        "https://www.instagram.com/palpitarconfeitaria?igsh=d25mdXRjejk5bXpk",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "ERP para Oficina",
      company: "Demir Diesel",
      description:
        "Sistema ERP completo para gestão de oficina, incluindo cadastro de OS, gerenciamento de estoque, clientes, relatórios financeiros, gestão de usuários e permissões.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
      ],
      isComplete: false,

      image: "/demir-dashboard.png",
      liveUrl: "https://www.instagram.com/demirdiesel/",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-muted-foreground/5">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-lg">
              <img
                src="/figo-logo.png"
                alt="Logo FIGO"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <span className="text-xl font-bold text-foreground">FIGO</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
          <a target="_blank" href="http://wa.me/5583987872668">
            <Button className="bg-primary hover:bg-primary/90 hidden sm:inline-flex hover:cursor-pointer">
              Fale Conosco
            </Button>
          </a>
          <a target="_blank" href="http://wa.me/5583987872668" className="sm:hidden">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 hover:cursor-pointer"
            >
              Contato
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              Transformamos suas <span className="text-primary">ideias</span> em
              soluções digitais inovadoras
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Somos uma startup especializada em desenvolvimento web, criando
              aplicações modernas e escaláveis que impulsionam o crescimento do
              seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full sm:w-auto hover:cursor-pointer"
                >
                  Ver Nossos Projetos
                </Button>
              </a>
              <a target="_blank" href="http://wa.me/5583987872668">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto hover:cursor-pointer"
                >
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Oferecemos soluções completas em desenvolvimento web para empresas
              de todos os tamanhos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Desenvolvimento Web
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Criamos aplicações web modernas e responsivas usando as mais
                  recentes tecnologias do mercado.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-accent rounded"></div>
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Dashboards & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Desenvolvemos painéis de controle intuitivos com análise de
                  dados em tempo real.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Consultoria Técnica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Oferecemos consultoria especializada para otimizar sua
                  arquitetura e processos de desenvolvimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Nossos Projetos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos para nossos
              clientes, cada um com soluções personalizadas e resultados
              excepcionais.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative group hover:scale-105 transition-transform">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`Dashboard do projeto ${project.title}`}
                      className="w-full rounded-lg shadow-2xl transition-transform"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div className="flex-1 space-y-4 sm:space-y-6 w-full">
                  <div>
                    <Badge
                      variant="secondary"
                      className="mb-3 text-xs sm:text-sm"
                    >
                      {project.company}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">
                      Tecnologias utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/20 text-primary text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a target="_blank" href={project.liveUrl}>
                      <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto hover:cursor-pointer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.isComplete ? "Ver Projeto" : "Conhecer"}
                      </Button>
                    </a>
                    {/* <Button
                      variant="outline"
                      className="hover:cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Vamos Conversar?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Pronto para transformar sua ideia em realidade? Entre em contato
                conosco e vamos discutir seu próximo projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    Informações de Contato
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Entre em contato através dos canais abaixo ou envie uma
                    mensagem.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">
                      figo.devtech@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      +55 (83) 9 8787-2668
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      João Pessoa, PB - Brasil
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    Solicite um Orçamento
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Conte-nos sobre seu projeto e retornaremos em até 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a target="_blank" href="http://wa.me/5583987872668">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 hover:cursor-pointer"
                      size="lg"
                    >
                      Solicitar Orçamento Gratuito
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-lg">
                <img
                  src="/figo-logo.png"
                  alt="Logo FIGO"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-foreground">FIGO</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
              >
                LinkedIn
              </a> */}
              <a
                href="https://github.com/figodevtech/"
                className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/figosoftwares/"
                className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-muted-foreground">
            <p className="text-xs sm:text-sm">
              &copy; 2025 FIGO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
