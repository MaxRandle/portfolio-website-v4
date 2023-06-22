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
      thumbnails: {
        fileName: (fileName: string) =>
          `/media/projects/thumbnails/${fileName}`,
        // ["alpha-tac"]: "/media/projects/thumbnails/alpha-tac.png",
        // ["iss-docking-autopilot"]:
        //   "/media/projects/thumbnails/iss-docking-autopilot.png",
        // ["p5js"]: "/media/projects/thumbnails/p5js.svg",
        // ["randle-recipes"]: "/media/projects/thumbnails/randle-recipes.png",
      },
      issInterface: "/media/projects/iss-interface.jpeg",
    },
  },
} as const;

export type PublicAsset = GetLeafNodeUnion<typeof PUBLIC>;
