// Site-wide scroll reveals: sections fade and rise as they enter the viewport.
// Grids stagger their children; standalone blocks reveal as one. The hero,
// nav, marquee, and footer are deliberately left alone — they have their own
// motion or none by design.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Grids whose children stagger in.
const GROUPS = [
  '.logo-bar__row',
  '.tab-grid',
  '.work-grid',
  '.services-breakdown__grid',
  '.results-strip__grid',
  '.process__grid',
  '.testimonials',
];

// Blocks that reveal as one.
const BLOCKS = [
  '.section-grid',
  '.summary',
  '.image-section',
  '.portrait',
  '.quote',
  '.feature',
  '.next',
  '.view-all',
  '.find-us',
  '.links',
];

const EASE = 'power2.out';
const revealed = new Set<Element>();

function revealGroup(group: HTMLElement) {
  // Hidden tab grids get their own entrance from the tab switcher.
  if (group.hidden || group.children.length === 0) return;
  const items = Array.from(group.children);
  items.forEach((el) => revealed.add(el));
  revealed.add(group);
  gsap.from(items, {
    opacity: 0,
    y: 24,
    duration: 0.7,
    ease: EASE,
    stagger: 0.08,
    clearProps: 'opacity,transform',
    scrollTrigger: { trigger: group, start: 'top 88%', once: true },
  });
}

function revealBlock(block: HTMLElement) {
  if (revealed.has(block)) return;
  revealed.add(block);
  gsap.from(block, {
    opacity: 0,
    y: 24,
    duration: 0.7,
    ease: EASE,
    clearProps: 'opacity,transform',
    scrollTrigger: { trigger: block, start: 'top 88%', once: true },
  });
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll<HTMLElement>(GROUPS.join(',')).forEach(revealGroup);
  document.querySelectorAll<HTMLElement>(BLOCKS.join(',')).forEach(revealBlock);

  // Section heights shift as images load; re-measure the trigger points.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
