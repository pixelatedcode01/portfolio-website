import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import UserDescription from "@/components/UserDescription";
// import Tooltip from "@/components/ui/tooltip";
import { technologies } from "@/data/skills";
import { Github } from "lucide-react";
import { Playwrite_US_Trad } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playwrite = Playwrite_US_Trad();

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <p className={`text-6xl ${playwrite.className} my-8 text-cyan-950`}>
          Hello!{" "}
        </p>
        <p className="text-2xl mb-3 text-cyan-950">
          I am{" "}
          <strong
            className="hover:font-black
            transition:font-weight duration-100
            "
          >
            Naman Rastogi
          </strong>
          , a{" "}
          <strong
            className="hover:font-black
            transition:font-weight duration-100
            "
          >
            Web Developer
          </strong>
        </p>
        <UserDescription />
        <div className="footer my-6 flex flex-row gap-3 flex-wrap justify-center md:justify-start">
          <Link href="https://www.github.com/pixelatedcode01" target="_blank">
            <Button className="flex flex-row items-center gap-2 pe-6 bg-neutral-950 hover:bg-neutral-700">
              <Github />
              GitHub
            </Button>
          </Link>
          <Link href="mailto:namanrastogi.materiox@gmail.com">
            <Button className="flex flex-row items-center gap-2 pe-6">
              <span className="material-symbols-rounded">mail</span>
              Get in Touch
            </Button>
          </Link>
          <Link
            href="/Naman_Rastogi_CV.pdf"
            download={"naman_rastogi_resume"}
            target="_blank"
          >
            <Button className="flex flex-row items-center gap-2 pe-6">
              <span className="material-symbols-rounded">Download</span>
              Resume
            </Button>
          </Link>
        </div>
      </section>
      <p className="py-2 pr-2 -mt-6 underline decoration-wavy decoration-cyan-300 text-nowrap truncate decoration-3 text-transparent text-xl text-center select-none pointer-events-none">
        This is for the underline working
      </p>
      <section className="technologies flex flex-col gap-6">
        <p className="text-2xl font-medium">Technologies</p>
        <div
          className="technology-container grid gap-4"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(max(120px, 10%), 1fr))",
          }}
        >
          {technologies.map((item, index) => (
            <Card key={index}>
              <>
                {/* <Tooltip text={item.technology} /> */}
                {item.logo ? (
                  <Image
                    alt={item.technology}
                    src={item.logo}
                    width={100}
                    height={100}
                  />
                ) : (
                  <p>{item.technology}</p>
                )}
              </>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
