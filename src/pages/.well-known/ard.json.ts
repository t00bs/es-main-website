import type { APIRoute } from "astro";
import { SITE_NAME } from "@/consts.ts";

// Agentic Resource Discovery catalog (agenticresourcediscovery.org): the one
// place AI clients look to learn what a site offers them. The studio's one
// agentic resource is its Agent Skill, generated next door in
// .well-known/skills/. ARD reads only `entries`; `specVersion` and `host` are
// there for readers of its predecessor format, ai-catalog.json.

export const GET: APIRoute = ({ site }) => {
  const origin = new URL("/", site);

  const catalog = {
    specVersion: "1.0",
    host: { displayName: SITE_NAME, documentationUrl: origin.href },
    entries: [
      {
        identifier: `urn:air:${origin.hostname}:skill:electric-sheep`,
        displayName: SITE_NAME,
        type: "application/ai-skill+md",
        url: new URL(".well-known/skills/electric-sheep/SKILL.md", origin).href,
        description:
          "Agent Skill for Electric Sheep, a design and automation studio in Jersey: its services, case studies, how projects run, and how to get in touch.",
        tags: [
          "design",
          "automation",
          "client-portals",
          "web-design",
          "jersey",
        ],
        representativeQueries: [
          "find a design and automation studio in Jersey",
          "who can build a client portal for my service business",
          "show me examples of Electric Sheep's work",
          "how do I contact Electric Sheep about a project",
        ],
        // Served from the domain it names, so the HTTPS origin is the identity.
        trustManifest: { identity: origin.origin, identityType: "https" },
      },
    ],
  };

  return new Response(`${JSON.stringify(catalog, null, 2)}\n`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
