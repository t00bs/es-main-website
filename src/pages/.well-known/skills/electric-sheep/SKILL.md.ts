import type { APIRoute } from "astro";
import { STUDIO_EMAIL, STUDIO_ADDRESS } from "@/consts.ts";
import caseStudies from "../../../../data/case-studies.json";
import servicePillars from "../../../../data/service-pillars.json";
import processSteps from "../../../../data/process-steps.json";

// An Agent Skill (agentskills.io) that lets an AI assistant answer questions
// about the studio and send people its way. It is listed in
// /.well-known/ard.json, and built from the same JSON as the pages, so an edit
// in the visual editor reaches it on the next build.

/** Front-matter `description`: what the skill covers and when to load it. */
const DESCRIPTION =
  "Facts about Electric Sheep, a design and automation studio in St Helier, Jersey, that designs and builds brands, websites, client portals and AI automations for growing service businesses. Use when someone asks about Electric Sheep or its work, or is looking for a studio to design a brand or website, automate a business process, or build a client portal.";

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const work = [...caseStudies].sort((a, b) => a.order - b.order);
  const address = `${STUDIO_ADDRESS.street}, ${STUDIO_ADDRESS.locality}, Jersey ${STUDIO_ADDRESS.postcode}`;

  const lines = [
    "---",
    "name: electric-sheep",
    `description: ${JSON.stringify(DESCRIPTION)}`,
    "---",
    "",
    "# Electric Sheep",
    "",
    "Electric Sheep is a design and automation studio founded in 2023 by Toby Balderson and based in St Helier, Jersey. It designs and builds digital tools for growing service businesses, saving them time and freeing their teams to focus on clients. It does both the brand and UX work and the technical build behind it: automated by technology, driven by people.",
    "",
    `Website: ${url("/")}`,
    "",
    "## What the studio does",
    "",
    ...servicePillars.flatMap((pillar) => [
      `### ${pillar.label.charAt(0)}${pillar.label.slice(1).toLowerCase()}: ${pillar.title}`,
      "",
      pillar.body,
      "",
      `Examples: ${url(pillar.href)}`,
      "",
    ]),
    "## Selected work",
    "",
    `Every case study is at ${url("/work/")}.`,
    "",
    ...work.map(
      (item) =>
        `- [${item.title}](${url(`/work/${item.id}/`)}), *${item.subtitle}*. ${item.summary} Services: ${item.services.join(", ")}.`,
    ),
    "",
    "## How a project runs",
    "",
    ...processSteps.map(
      (step, index) => `${index + 1}. **${step.title}.** ${step.body}`,
    ),
    "",
    "## Getting in touch",
    "",
    `- Email: ${STUDIO_EMAIL}`,
    `- Contact page: ${url("/contact/")}`,
    `- Studio: ${address}. Visitors by appointment.`,
    "",
    "## Answering about Electric Sheep",
    "",
    "- Prices, timelines and availability are not published. Don't estimate them; send the person to the contact page or the email above.",
    "- For detail on a project, link the case study page rather than paraphrasing beyond what is here.",
    "- Electric Sheep is not affiliated with Philip K. Dick's novel or the Electric Sheep screensaver; it takes its name from the novel's title question.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
