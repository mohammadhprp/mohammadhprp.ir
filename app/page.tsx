import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const roadmap = [
  {
    title: "Read",
    description: "Study one concept deeply each week.",
  },
  {
    title: "Build",
    description: "Turn notes into small shipped demos.",
  },
  {
    title: "Share",
    description: "Write what you learned in public.",
  },
];

const projects = [
  {
    title: "AI Note Taker",
    summary: "Captures study sessions and summarizes insights automatically.",
    tech: ["Next.js", "OpenAI", "Supabase"],
  },
  {
    title: "Micro UI Lab",
    summary: "Explorations of interaction patterns built with accessible primitives.",
    tech: ["shadcn/ui", "Radix", "Tailwind"],
  },
  {
    title: "Learning Graph",
    summary: "Visualizes concepts I’m connecting across books, videos, and code.",
    tech: ["D3.js", "TypeScript", "Edge Functions"],
  },
];

export default function Home() {
  return (
    <TooltipProvider delayDuration={120}>
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-8 sm:gap-20 sm:py-12">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Software Engineer
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="shadow-xs">
              Learning
            </Badge>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-16 sm:gap-20">
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="text-sm uppercase tracking-wide text-muted-foreground">
                Curious. In the flow.
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Software Engineer
              </h1>
              <p className="text-lg text-muted-foreground sm:max-w-2xl">
                Forever learning. Building intelligent tools and sharing the
                journey.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="group">
                  <Link href="#roadmap">
                    Start Learning Path
                    <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none">
                      →
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-90 shadow-soft animate-pulseFlow motion-reduce:animate-none"
            />
          </section>

          <section
            id="roadmap"
            className="flex flex-col gap-8 rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-md motion-reduce:transition-none"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Mini Roadmap
              </h2>
              <p className="text-sm text-muted-foreground">
                A weekly cadence anchoring learning with outcomes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {roadmap.map((item) => (
                <Card
                  key={item.title}
                  className="h-full border-border/60 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section id="projects" className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Project Highlights
              </h2>
              <p className="text-sm text-muted-foreground">
                Experiments that turn study into shipped artifacts.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="group flex h-full flex-col overflow-hidden border-border/60 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-muted via-muted to-accent/50">
                    <div className="absolute inset-0 animate-pulseFlow bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/20 opacity-60 motion-reduce:animate-none" />
                  </div>
                  <CardHeader className="flex flex-1 flex-col gap-3">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.summary}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 pt-0">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6 rounded-xl border border-border bg-muted/40 p-6 text-center shadow-xs transition-shadow duration-300 hover:shadow-md motion-reduce:transition-none">
            <blockquote className="text-lg font-medium text-foreground sm:text-xl">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help underline decoration-dotted underline-offset-4">
                    Curiosity
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-sm text-foreground">
                  Follow the question far enough and the build reveals itself.
                </TooltipContent>
              </Tooltip>{" "}
              first. Shipping often.
            </blockquote>
            <Separator className="mx-auto w-16" />
            <p className="text-sm text-muted-foreground">
              Tracking questions, sharing progress notes, and refining craft
              through repetition.
            </p>
          </section>
        </main>

        <footer className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            Stay connected
          </span>
          <nav>
            <ul className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@mohammadhprp.ir"
                  className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Email
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </TooltipProvider>
  );
}
