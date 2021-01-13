const myWork = [
  {
    title: "A teacher",
    body:
      "I teached many materials for all of the study stages, such as physics, math, arabic, programing, and english. I always think about new ways to teach effectively.",
    category: "I worked as",
    list: [
      "Interest and explanation",
      "Concern and respect for students and student learning",
      "Appropriate assessment and feedback",
      "Clear goals and intellectual challenge",
      "Independence, control and active engagement",
      "Learning from students"
    ],
    link:"_Book/_mywork/learning_to_teach_in_higher_educati.pdf",
    linkText:'Reference: Ramsden, P.(1992). Learning to Teach in Higher Education. New York: Routledge.'  },
  {title:"An advertisement supervisor",
  body:'I managed the advertisment in tehran airport, for mobilys SIMcard, my job was to manage advertisment room in one month before Hajs time.',
  category: "I worked as",
  link:"http://www.mobily.com.sa",
linkText:"Website"
}
];
export default function MyWork() {
  return (
    <>
      <div id="fu_title">My Work</div>

        <div className="w_box">
          <div id="w_img">
            <img width="150px" src="_image/Mobily.png"></div>
            <div id="w_title"></div>
            <div id="w_par">
        
              <br />
              <br />
              <a href="http://www.mobily.com.sa">
                <i className="fa fa-internet-explorer"></i> 
              </a>
            </div>
          </div>
        </div>

        <div className="w_box">
          <div id="w_img">
            <img width="150px" src="_image/nm.png"></div>
            <div id="w_title">A nuclear imaging technician</div>
            <div id="w_par">
              I worked as a nuclear imaging technician in NOOR Nuclear Medical
              Institute, it is in Qom, Iran. I did my university project depend
              on my work in this center, I get a certification from Dr. Olamaei,
              I made for them new ways to manage somethings.
              <br />
              <br />
              <img src="_image/Scan10001.png">
                <br />
              </div>
            </div>
          </div>

          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/ma.png"></div>
              <div id="w_title">A businessperson</div>
              <div id="w_par">
                The passion and the perseverance made me perfect in many fields,
                some of those passions I have, are the business challenges .
                <br />
                <br />
                <a href="">
                  <i className="fa fa-internet-explorer"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="wk_title">Websites :</div>

        <div className="w_main">
          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/lo.png"></div>
              <div id="w_title">Mobarak perfumes company</div>
              <div id="w_par">
                This company, Express your personal style in a whole new way,
                therefore we create the best easiest way for perfume lovers to
                choose, testing at home is our sign, just contact us and the
                tester stand will serve for you, to make sure that you get best
                perfume aroma in your hand. <br />
                <br />
                <a href="_mobarak/English/Home">
                  <i className="fa fa-internet-explorer"></i> Visit site{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/logo.png"></div>
              <div id="w_title">Baqyatollah Medical Center</div>
              <div id="w_par">
                This medical center is in Qom,Iran city, and their site is in
                progress. <br />
                <br />
                <a href="_Baqyatolah/">
                  <i className="fa fa-internet-explorer"></i> Visit site{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/emamlogo.png"></div>
              <div id="w_title">Emam Hadi (as) Institute</div>
              <div id="w_par">
                This center is an educational institute in Tehran,Iran city, I
                am working on internal intgration of educational system, and on
                all of thier systematic processings (management and
                educational); their site now is on progress. <br />
                <br />
                <a href="./_EmamHadi/index">
                  <i className="fa fa-internet-explorer"></i> Visit site{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/A+logo.png"></div>
              <div id="w_title">A+ Tutoring</div>
              <div id="w_par">
                This page promote my Tutoring skills, and help me to reach my
                students online. <br />
                <br />
                <a href="_pages/ostad">
                  <i className="fa fa-internet-explorer"></i> Visit site{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/empower-academy.png"></div>
              <div id="w_title">Empower Academy</div>
              <div id="w_par">
                This was the start of admission in my new project of making
                Empower Academy, It was about learning FrontEnd programming
                Basics. <br />
                <br />
                <a href="_pages/">
                  <i className="fa fa-internet-explorer"></i> Visit site{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/beirut.png"></div>
              <div id="w_title">Beirut Resturant</div>
              <div id="w_par">
                React, Sass, express and Nodejs, this is my big start in this
                compass. <br />
                <br />
                <a href="_beirut/">
                  <i className="fa fa-internet-explorer"></i> Visit site{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="wk_title">Publication & projects:</div>

        <div className="w_main">
          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/Kidney.png"></div>
              <div id="w_title">
                Image Processing in Nuclear Medicine DTPA Renal-scan
              </div>
              <div id="w_par">
                This project is important to improve the skills of future
                engineers in image processing, on other hand it will improve
                doctors diagnose and understanding of our bodies. It is
                important to draw this type of works from the large companies to
                engineers who want to work on a similar projects, and it will
                give them the courage to have a new ideas. <br />
                <br />
                <a href="_Book/_mywork/Image Processing in Nuclear Medicine DTPA Renal-scan.pdf">
                  <i className="fa fa-paperclip"></i> Read more{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/eng.png"></div>
              <div id="w_title">The Complete English Grammar book</div>
              <div id="w_par">
                I get a result in my studies, If you want to learn a new
                language you must have knowledge of its grammar, therefore I
                started typing this video series, I am going to make this book
                easy to starter english auditor. <br />
                <br />
                <a href="">
                  <i className="fa fa-paperclip"></i> Read more{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/C.png"></div>
              <div id="w_title">
                Network data transfer between doctor and patient
              </div>
              <div id="w_par">
                This project was for a computer network course, I was passionate
                to transfer a serial data from the patient to the doctor, and I
                do that in a best complet way, this is can be use to transfer
                the life signals EXG. <br />
                <br />
                <a href="_Book/_mywork/computer-network.pdf">
                  <i className="fa fa-paperclip"></i> Read persian version{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="w_box">
            <div id="w_img">
              <img width="150px" src="_image/ele.png"></div>
              <div id="w_title">Electrical wheelchair project</div>
              <div id="w_par">
                This project was for a computer network course, I was passionate
                to transfer a serial data from the patient to the doctor, and I
                do that in a best complet way, this is can be use to transfer
                the life signals EXG. <br />
                <br />
                <a href="_Book/_mywork/wheelchair.pdf">
                  <i className="fa fa-paperclip"></i> Read persian version
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
