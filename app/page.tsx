import Image from "next/image";
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
    title: "Brainstorm",
    summary:
      "Turns a single idea into an MVP blueprint—stack, milestones, and delivery timeline.",
    tech: ["Python", "LangChain", "Next.js", "Postgres"],
    href: "https://brainstorm.mohammadhprp.ir",
    image: {
      src: "/images/projects/brainstorm.png",
      alt: "Brainstorm MVP planner interface showcasing scoped milestones.",
    },
  },
  {
    title: "Lens",
    summary:
      "Computer vision model that classifies food imagery across 101 categories with confidence cues.",
    tech: ["Python", "Torch", "Hugging Face Spaces"],
    href: "https://huggingface.co/spaces/mohammadhprp/lens",
    image: {
      src: "/images/projects/lens.png",
      alt: "Lens prediction view labeling food photography by cuisine.",
    },
  },
  {
    title: "Pulse",
    summary:
      "Event-driven telemetry pipeline for real-time analytics across distributed systems.",
    tech: ["Golang", "Kafka", "ClickHouse"],
    href: "https://github.com/mohammadhprp/pulse",
    image: {
      src: "/images/projects/pulse.png",
      alt: "Pulse dashboard streaming service metrics in real time.",
    },
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
              <span className="text-sm tracking-wide text-muted-foreground">
              curious explorer in the flow of learning.
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Software Engineer
              </h1>
              <p className="text-lg text-muted-foreground sm:max-w-2xl">
                Hey there, I&apos;m Mohammad—forever learning, building intelligent
                tools, and sharing the journey.
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
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  prefetch={false}
                  aria-label={`${project.title} project · opens in new tab`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Card className="flex h-full flex-col overflow-hidden border-border/60 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                        sizes="(min-width: 768px) 33vw, 100vw"
                        priority={project.title === "Brainstorm"}
                      />
                    </div>
                    <CardHeader className="flex flex-1 flex-col gap-3">
                      <div>
                        <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
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
                </Link>
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
                  href="https://github.com/mohammadhprp"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/mohammadhprp"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/mohammadhprp"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  X
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </TooltipProvider>
  );
}
