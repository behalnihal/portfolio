import { Reveal } from "@/utils/Reveal";
import ProfileCard from "./ProfileCard";

const profiles = [
  {
    platform: "Codeforces",
    rating: 1473,
    rank: "Specialist",
    href: "https://codeforces.com/profile/nihal_gupta",
  },
  {
    platform: "Codechef",
    rating: 1803,
    rank: "4*",
    href: "https://www.codechef.com/users/ingenious_god",
  },
  {
    platform: "Leetcode",
    rating: 1868,
    rank: "Knight",
    href: "https://leetcode.com/nihal_gupta",
  },
  {
    platform: "Atcoder",
    rating: 719,
    rank: "7 Kyu",
    href: "https://atcoder.jp/users/gupta_nihal",
  },
];
export default function Profiles() {
  return (
    <Reveal>
      <div className="px-4 mb-4 font-light text-neutral-500 dark:text-neutral-300">
        <span className="text-2xl">Coding Profiles</span>
        <div className="grid grid-cols-2 gap-3">
          {profiles.map((profiles, index) => (
            <div key={index} className="mt-3">
              <ProfileCard {...profiles} />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
