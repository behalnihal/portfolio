import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="ml-4 mt-4 mb-4 flex flex-row items-center">
      <Image
        src="/avatar.jpeg"
        alt="avatar"
        width={80}
        height={80}
        className="flex h-20 w-20 items-center justify-center rounded-full  p-[2px]"
      />
      <div className="flex flex-col items-start justify-center ml-4">
        <span className="text-5xl font-bold">Hi, I&apos;m Nihal</span>
        <span>I mess with code, break stuff, and make it better</span>
      </div>
    </div>
  );
};
