import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full">
      <Image
        src="/images/profile_.jpg"
        width={100}
        height={100}
        alt="Paul Kamani"
        priority={true}
        className="border-4 border-slate-500 
        drop-shadow-xl shadow-black 
        rounded-full mx-auto mt-8"
      />
    </section>
  );
}
