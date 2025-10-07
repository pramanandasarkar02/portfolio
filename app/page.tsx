import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 text-white text-center">
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Pramananda Sarkar
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Software Engineer • Researcher • Builder of Scalable Systems
          </p>
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-xl shadow-lg text-white font-semibold"
          >
            Go to Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
