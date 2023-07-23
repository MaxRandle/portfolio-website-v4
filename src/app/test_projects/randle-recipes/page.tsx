import { Embed } from "@/components/misc/Embed";
import MdxContent from "@/content/mdx/projects/randle-recipes.mdx";

export default function Page() {
  return <MdxContent components={{ Embed: Embed as unknown as any }} />;
}
