import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div>
      <h1>Pramananda Sarkar</h1>
      <p>I am a Software developer, a Researcher, alearner </p> 
      <div>
        <div>
          {/* Working Space */}
          Current Working Space 
        </div>
        <div>
          {/* Experience */}
          Experiences
        </div>
        <div>
          {/* Paper */}
          Papers
        </div>
        <div>
          {/* Projects */}
        </div>
      </div>

      <h1></h1>

    </div>
    </>
    
  );
}
