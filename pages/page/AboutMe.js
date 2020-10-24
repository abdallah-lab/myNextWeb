import Skills from "../../components/Skills";
import Head from "next/head";

export default function AboutMe() {
  return (
    <div>
      <div id="a_main">
        <div id="l_half">
          <span id="c_title">About Me</span>
          <br />
          <span id="about_par">
            <br />
            &nbsp;&nbsp;Hi, This is Abdallah Mobarak, I'm Lebanese national. I'm
            very glad you visit my web page, I'm a Biomedical engineer (Isfahan
            University), HealthCare IT Master student (Tehran University).
            Design is my true passion in the life, and I love creating new
            things.
            <br />
            Whether you have a project or you need a website and uniform style
            for your business, I am an excellent choice for you. I specialize in
            all of the following areas: <br />
            <br />
            <li>Programming & UI design.</li>
            <li>Web design & Development.</li>
            <li>Branding & Corporate identify.</li>
            <li>Accounting & Management skills.</li>
            <li>Project Management.</li>
            <li>Information Technology.</li>
            <li>System Analysis & Design</li>
            <li>Business Plan.</li>
            <li>Business Analysis.</li>
            <li>Biomedical Nuclear studies.</li>
            <li>Biomedical projects.</li>
            <br />
            To me cooperation and group-work is the best way to have a success
            project, it's easy to contact me on my social media or on whatsapp.
          </span>
        </div>

        <div id="r_half">
          <div>
            <span id="c_title">My Skills</span>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
}
