import Link from "next/link";

interface ProfileCardProps {
  platform: string;
  rating: number;
  rank: string;
  href: string;
}

export default function ProfileCard({
  platform,
  rating,
  rank,
  href,
}: ProfileCardProps) {
  return (
    <div className="w-full">
      <Link
        className="border p-4 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col"
        href={href}
      >
        <span className="font-medium ">
          {platform}
          <div className="flex flex-col">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Rating: {rating}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Rank: {rank}
            </p>
          </div>
        </span>
      </Link>
    </div>
  );
}
