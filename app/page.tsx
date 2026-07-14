import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {  } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedin, FaMailchimp} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-[50vw] mx-auto min-h-screen border-l-2 border-r-2 border-border-color bg-white flex flex-col">
        <Navbar />

        <main className="px-6 py-10">
      <section className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row pb-6 border-b">
        {/* Left */}
        <div className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <p>Hi, I'm <span className="text-xl font-semibold">Pramananda Sarkar</span> <span className="text-3xl ">👋</span></p>

            <p>
              I'm a software developer and AI researcher focused on <b>AI for medical imaging, Human-Computer Interaction (HCI), systems, and security</b>. My work combines machine learning with practical system design and engineering, while my broader interests include algorithms, optimization, and the mathematical foundations that drive reliable, efficient, and scalable computing systems.
            </p>

            <p>
              I completed my Bachelor's in Computer Science and Engineering from the
              Bangladesh University of Engineering and Technology (BUET). I'm currently
              looking for MSc and PhD opportunities where I can contribute to impactful
              research while building practical, scalable software systems.
            </p>
          </div>

          <div className="flex items-center gap-5 text-xl">
            <Link href="https://github.com/pramanandasarkar02" target="_blank">
              <FaGithub className="transition hover:scale-110" />
            </Link>

            <Link href="https://www.linkedin.com/in/pramanandasarkar02/" target="_blank">
              <FaLinkedin className="transition hover:scale-110" />
            </Link>

            <Link href="https://x.com/pramananda02" target="_blank">
              <FaXTwitter className="transition hover:scale-110" />
            </Link>

            <Link
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="transition hover:scale-110" />
            </Link>

          </div>
          <div className="text-sm">
  <i>If you're interested in collaborating, discussing research, or have any questions, feel free to get in touch.</i>
</div>
        </div>

        {/* Right */}
        <div className="shrink-0">
          <Image
            src="/profile.jpg"
            alt="Pramananda Sarkar"
            width={260}
            height={260}
            className="border border-gray-300 object-cover"
            priority
          />
        </div>
      </section>

      {/* <section className="mt-12 pt-6">
        <p className="text-sm text-red-600">
          <span className="font-semibold">Announcement:</span> I am looking to
          collaborate with researchers who have a strong mathematical background
          and are interested in solving challenging computer science problems.
        </p>
      </section> */}
    </main>
        
      </div>
    </div>
  );
}
