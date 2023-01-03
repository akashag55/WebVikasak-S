import type { NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";
import Head from "next/head";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Home: NextPage = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const name = "<Web Vikasaks/>";
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="1" className="h-screen flex flex-col ">
        <div className="h-screen flex flex-col justify-center items-center p-4">
          <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-mono ">
            {name}
          </h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            in atque ab amet dolor commodi quibusdam! Earum, voluptatum odit.
            Doloribus dignissimos pariatur nobis unde laboriosam voluptas illo
            accusamus reprehend
          </p>
          <div className="p-6">
            <button className="btn btn-outline">
              <AiFillGithub className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
          <a href="#section2">
            <button
              className=" btn btn-circle btn-outline"
              onClick={handleClick}
            >
              <IoIosArrowDown />
            </button>
          </a>
        </div>
      </section>
      <section id="" ref={ref}>
        <div className="h-screen flex flex-col justify-center item-center p-4">
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="">
              <p className="pb-5">what we do..</p>
              <div className="border border-grey-500 p-10">
                <ul className="leading-6">
                  <li className="list-disc">
                    We Build custome websites that are tailored to your unique
                    business needs and goals.
                  </li>
                  {/* <li className="list-disc">
                    We use latest technologies and techniques to ensure that
                    your website is fast, secure and user-friendly.
                  </li> */}
                  <li className="list-disc">
                    We are also building a community for all the developers and
                    creators around the glob.
                  </li>
                </ul>
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className="">
              <p className="pb-5">why we do..</p>
              <div className="border border-grey-500 p-10">
                <ul className="leading-6">
                  <li className="list-disc">
                    To connect with a global audience
                  </li>
                  <li className="list-disc">To foster community</li>
                  {/* <li className="list-disc">
                    We are also building a community for all the developers and
                    creators around the glob.
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="">
              <p className="pb-5">how we do..</p>
              <div className="border border-grey-500 p-10">
                <ul className="leading-6">
                  <li className="list-disc">
                    We use latest technologies and techniques to ensure that
                    your website is fast, secure and user-friendly.
                  </li>
                  {/* <li className="list-disc">
                    We Build custome websites that are tailored to your unique
                    business needs and goals.
                  </li>
                  <li className="list-disc">
                    We are also building a community for all the developers and
                    creators around the glob.
                  </li> */}
                </ul>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col justify-center item-center p-4">
        <div className="">
          <div className="grid grid-cols-2 justify-items-center gap-10">
            <div className="">
              <div className="border border-grey-200 w-40 h-40 rounded-full"></div>
              <div className="flex flex-col justify-center item-center">
                <p>Aashish Singhal</p>
                <p>Founder and Developer</p>
              </div>
            </div>
            <div className="">
              <div className="border border-grey-200 w-40 h-40 rounded-full"></div>
              <div className="flex flex-col justify-center item-center">
                <p>Akash Agarwal</p>
                <p>Founder and Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer items-center p-4 border-t-4 text-content">
        <div className="items-center grid-flow-col">
          {/* <img src="../utils/logos/WV short white.png" alt="short logo" /> */}
          <Image
            className="-rotate-12"
            src="/logo_initials.png"
            alt="Short Lofo"
            width={130}
            height={55}
          />
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/WebVikasak-S">
            <AiFillGithub className="h-6 w-6" />
          </a>
          <a>
            <AiFillInstagram className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
