import Image from "next/image";

export default function FirstHeader() {
  return (
    <header>
      <div className="flex items-center h-20 bg-dark p-4">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={140}
          height={39}
        />
      </div>
    </header>
  );
}