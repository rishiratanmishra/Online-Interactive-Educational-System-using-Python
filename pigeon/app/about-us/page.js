import Image from "next/image";
import AboutCards from "../../components/AboutCards/AboutCards";
import Pigeon from '/public/pigeon.gif'
import Developer from "@/components/Developers/Developers";
const About = () => {
  return (
    <>
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="rounded-lg p-8 md:p-12">
            <a
              href="/"
              className="bg-blue-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
              </svg>
              Tutorial
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-4">
We are Changing the Way , the Teacher Connects            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Pigeon is the ultimate companion for modern education, uniting students, teachers, parents, and administrators in a cohesive ecosystem of knowledge, growth, and mutual support. Join us on this transformative journey as we revolutionize the way education thrives in the digital age.
            </p>
            <a
              href="/"
              className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          {/* Right Side */}
          <div className="rounded-lg p-8 md:p-12 flex items-center">
            <div className=" pr-6">
            <Image src={Pigeon} className=" -scale-x-100 -mr-4 " alt="Pigeon Logo" width={100} height={50} />
            </div>
          </div>
        </div>
      </section>

      {/*Barun kumar Creation*/}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-2xl text-blue-500 mb-4 tracking-widest font-medium title-font mb-1">
              EMPOWERING COMMUNITY
            </h2>
           
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
              Pigeon, a groundbreaking Online Interaction System that reimagines
              the way students, teachers, parents, and administrators engage and
              collaborate within the realm of education. Our app is a dynamic
              and empowering platform, meticulously designed to facilitate
              seamless connections, foster curiosity, and inspire excellence in
              the learning process.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <AboutCards
              cardHead={"Empowering Students"}
              cardPara={
                "Pigeon offers students a personalized learning experience, tailoring educational content to their individual needs and interests. Access to a vast repository of valuable resources encourages self-directed exploration, empowering students to embrace knowledge with enthusiasm and confidence."
              }
            />
            <AboutCards
              cardHead={"Enabling Teachers"}
              cardPara={
                "Pigeon equips teachers with innovative tools for effective classroom management and communication. With the ability to post notifications, upload assignments, and conduct real-time discussions, educators can foster a vibrant learning environment that captivates students' minds and accelerates academic progress."
              }
            />
            <AboutCards
              cardHead={"Engaging Parents"}
              cardPara={
                "Parents play an integral role in their child's educational journey, and Pigeon ensures their active involvement. Through direct communication with teachers, access to real-time updates, and a comprehensive view of their child's progress, parents can actively participate in nurturing their child's growth and success."
              }
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <AboutCards
              cardHead={"Efficient Administration"}
              cardPara={
                "Pigeon streamlines administrative tasks, allowing administrators to manage school-specific data securely and make data-driven decisions. With a centralized dashboard, they can effortlessly oversee the entire institution, ensuring smooth communication and harmonious collaboration."
              }
            />
            <AboutCards
              cardHead={"Real-Time Notifications"}
              cardPara={
                "Users receive real-time notifications on important updates, assignments, and events, ensuring no crucial information is missed and fostering a proactive and engaged learning community."
              }
            />
            <AboutCards
              cardHead={"Seamless Collaboration"}
              cardPara={
                " Pigeon fosters a sense of community and collaboration among all users. Whether it's students collaborating on group assignments, teachers sharing insights with parents, or administrators coordinating school-wide initiatives, the app bridges the gap and fosters a cohesive educational ecosystem."
              }
            />
          </div>
        </div>
        <Developer/>
      </section>
    </>
  );
};

export default About;