import { BsFillStarFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { twMerge } from "tailwind-merge";

export type GithubRepositoryChipProps = Omit<
  React.ComponentPropsWithoutRef<"a">,
  "children" | "href" | "target"
> & {
  repo: string;
};

export const GithubRepositoryChip: React.FC<
  GithubRepositoryChipProps
> = async ({ className, repo, ...props }) => {
  const REPOSITORY_URL = "https://github.com/" + repo;

  const res = await fetch("https://api.github.com/repos/" + repo);
  const body = await res.json();
  const stargazersCount = body.stargazers_count;

  return (
    <a
      href={REPOSITORY_URL}
      target="_blank"
      className={twMerge(
        [
          "inline-flex max-w-full items-center gap-2",
          "rounded-full px-4 py-2",
          "bg-black text-white",
          "dark:bg-white dark:text-black",
        ],
        className
      )}
      {...props}
    >
      <SiGithub className="shrink-0" />
      <code className="overflow-hidden text-ellipsis whitespace-nowrap">
        {repo}
      </code>
      <BsFillStarFill className="shrink-0 text-amber-300 dark:text-amber-400" />
      <p>{stargazersCount}</p>
    </a>
  );
};
