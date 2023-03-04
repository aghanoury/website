import React from "react";
import Hpar from "../components/hpar";
import Page from "../components/page";

function Alink(props) {
  return (
    <a
      href={props.href}
      className={`underline underline-offset-4
      rounded-md 
      `}
    >
      {props.children}
    </a>
  );
}

const About = () => {
  return (
    <>
      <Page title="About">
        <Hpar>
          <p>
            I'm a first year Electrical & Computer Engineering Ph.D. student at
            UCLA focusing on <span className="">chiplet security</span> as part
            of the{" "}
            <Alink href="https://ssysarch.ee.ucla.edu/">
              Secure Systems Architecture Lab
            </Alink>
            {" and advised by "}
            <Alink href="https://ssysarch.ee.ucla.edu/nader/">
              Nader Sehatbakhsh
            </Alink>
            . I received my B.S. in Electrical Engineering from Colorado School
            of Mines in 2020. I then spent 2 years at AMD as a silicon design
            engineer, working on Zen-4 and Zen-5 L3 cache designs.
          </p>
        </Hpar>
        <Hpar>
          <p>
            In recent years, there has been a paradigm shift in computer
            architecture design, driven by the increasing demand for more
            powerful and energy-efficient computer systems that can handle the
            growing amount of data and computation required by emerging
            technologies such as artificial intelligence, machine learning, and
            big data.
          </p>
          <p>
            Traditionally, computer architecture design has focused on building
            general-purpose processors that can handle a wide range of
            applications and workloads. However researchers and engineers have
            begun to focus more on developing specialized processors and
            accelerator devices that can handle specific types of workloads more
            efficiently. These specialized devices are optimized for specific
            tasks, such as matrix multiplication for deep learning, and can
            significantly improve the performance and energy efficiency of these
            workloads.
          </p>
          <p>
            Chiplet-based systems are a new approach to dealing with the classic
            limits of traditional computing (e.g. Moore's law, Denard's
            scaling). They offer a number of advantages over traditional
            monolithic chip designs, including flexibility, increased
            performance and energy efficiency, cost-effectiveness, and
            scalability.
          </p>
          <p>
            My research aims to explore new features that could help improve the
            security of these systems.
          </p>
        </Hpar>
        <Hpar>
          <p>Contact me at [aghanoury at ucla dot edu].</p>
        </Hpar>
      </Page>
    </>
  );
};

export default About;
