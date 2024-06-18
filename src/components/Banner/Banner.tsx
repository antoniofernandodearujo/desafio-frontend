import Image from "next/image";

export default function Banner() {
    return (
        <div className="bg-purple p-10 h-100">
            <div className="flex items-center justify-evenly">
                <Image
                    src="/Type.png"
                    alt="Type"
                    width={175}
                    height={52}
                />
                <Image
                    src="/Level.png"
                    alt="Level"
                    width={191}
                    height={52}
                />
                <Image
                    src="/Victories.png"
                    alt="Victories"
                    width={122}
                    height={52}
                />
            </div>
        </div>
    );
}