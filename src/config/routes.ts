import fs from "fs";
import path from "path";

export const ROUTES = {
  intro: { root: "/" },
  about: { root: "/about" },
  playground: { root: "/playground" },
  projects: {
    // slugs: projectFilePaths,
    slug: (slug: string) => `/projects/${slug}`,
  },
} as const;

type GetLeafNodeUnion<T> = T extends Record<string, any>
  ? GetLeafNodeUnion<T[keyof T]>
  : T;

export type Route = GetLeafNodeUnion<typeof ROUTES>;

export const PUBLIC = {
  documents: {
    resume: "/documents/Max Randle CV - April 2023.pdf",
  },
  media: {
    maxProfilePicture: "/media/max-crop.jpg",
    maxArtExhibit: "/media/max-art.jpg",
    projects: {
      alphaTac: "/media/projects/alpha-tac.png",
      dragonCapsule: "/media/projects/dragon-capsule.png",
      p5jsLogo: "/media/projects/p5js-logo.svg",
      randleRecipes: "/media/projects/randle-recipes.png",
    },
  },
} as const;

export type PublicAsset = GetLeafNodeUnion<typeof PUBLIC>;
