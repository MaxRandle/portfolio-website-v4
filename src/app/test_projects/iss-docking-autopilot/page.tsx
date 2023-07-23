import { Embed } from "@/components/misc/Embed";
import MdxContent from "@/content/mdx/projects/iss-docking-autopilot.mdx";

export default function Page() {
  return <MdxContent components={{ Embed: Embed as unknown as any }} />;
}
