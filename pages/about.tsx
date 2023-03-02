import React from "react";
import Hpar from "../components/hpar";

function Alink(props) {
  return (
    <a
      href={props.href}
      className={`underline underline-offset-4
      rounded-md 
      `}
      // p-0.5 px-2
      // bg-pink dark:bg-blue
    >
      {props.text}
    </a>
  );
}

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-xl m-4 p-2 rounded-lg">About</h1>
        <div className="text-justify break-words sm:p-10 flex flex-col space-y-2">
          <Hpar>
            <p>
              I'm a first year Electrical & Computer Engineering Ph.D. student
              at UCLA focusing on <span className="">chiplet security</span> as
              part of the{" "}
              <Alink
                href="https://ssysarch.ee.ucla.edu/"
                text="Secure Systems Architecture Lab"
              />{" "}
              and advised by{" "}
              <Alink
                href="https://ssysarch.ee.ucla.edu/nader/"
                text="Nader Sehatbakhsh"
              />
              . I received my B.S. in Electrical Engineering from Colorado
              School of Mines in 2020. I then spent 2 years at AMD as a silicon
              design engineer, working on Zen-4 and Zen-5 L3 cache designs.
            </p>
          </Hpar>
          <Hpar>
            <p>
              In recent years, there has been a paradigm shift in computer
              architecture design, driven by the increasing demand for more
              powerful and energy-efficient computer systems that can handle the
              growing amount of data and computation required by emerging
              technologies such as artificial intelligence, machine learning,
              and big data.
            </p>
            <p>
              Traditionally, computer architecture design has focused on
              building general-purpose processors that can handle a wide range
              of applications and workloads. However researchers and engineers
              have begun to focus more on developing specialized processors and
              accelerator devices that can handle specific types of workloads
              more efficiently. These specialized devices are optimized for
              specific tasks, such as matrix multiplication for deep learning,
              and can significantly improve the performance and energy
              efficiency of these workloads.
            </p>
            <p>
              Chiplet-based systems are a new approach to dealing with the
              classic limits of traditional computing (e.g. Moore's law,
              Denard's scaling). They offer a number of advantages over
              traditional monolithic chip designs, including flexibility,
              increased performance and energy efficiency, cost-effectiveness,
              and scalability.
            </p>
            {/* <p>
              While chiplet systems are proving useful, they also introduce new
              security challenges. Chiplet-based systems are composed of
              multiple smaller chips, each with their own memory and processor.
              This design allows for increased flexibility and scalability, but
              it also makes it more difficult to ensure the security of the
              system as a whole. Chiplet-based systems are also more vulnerable
              to attacks that target the interconnects between the chiplets.
              These attacks can be used to steal sensitive data, or to
              compromise the security of the entire system.
            </p> */}
            <p>
              My research aims to explore new features that could help improve
              the security of these systems.
            </p>
            {/* 
            <p>
              I am interested in computer architecture, security, and all things
              hardware! The field of computer architecture is constantly
              evolving, with technologies like ai, machine learning, and the
              IoT, driving demand for new and innovative computer systems. More
              specifically, this paradigm shift Researchers in this field work
              on a wide range of topics, including microarchitecture, memory
              systems, parallel processing, power and thermal management, and
              computer-aided design. They also work on developing new
              programming models and tools to make it easier for developers to
              take advantage of new hardware capabilities.
            </p> */}
          </Hpar>
          <Hpar>
            <p>Contact me at [ last_name ] at ucla dot edu.</p>
          </Hpar>
        </div>
      </div>
    </>
  );
};

export default About;
