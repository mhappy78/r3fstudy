import { motion } from "framer-motion";

const Section = (props) => {
  const {children} = props;
  return (
  <motion.section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col justify-center items-start text-white`}
  initial={{opacity: 0, y: 50}}
  whileInView={{opacity: 1, y: 0, transition: {duration: 1, delay: 0.6,}}}
  >
    {children}
    </motion.section>)
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
      Hi, I'm
      <br />
      <span className="px-1 italic">Lee Dong Lak</span>
      </h1>
      <motion.p className="text-lg text-gray-400 mt-4"
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0, transition: {duration: 1, delay: 1.5,}}}
        >
        I'm a software engineer with a passion for building web and mobile applications.
        <br />
        I'm currently living in Seoul, South Korea. 
      </motion.p>
      <motion.button className="bg-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg mt-16"
      initial={{opacity: 0, x: -25}}
      whileInView={{opacity: 1, x: 0, transition: {duration: 1, delay: 2.5,}}}
        >
        Test Button
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / Nextjs / Tailwind CSS",
    level: 90,
  },
  {
    title: "React Native / Expo",
    level: 70,
  },
  {
    title: "Nodejs / Express",
    level: 60,
  },
];

const languages = [
  {
    title: "Korean",
    level: 100,
  },
  {
    title: "English",
    level: 80,
  },
  {
    title: "Chinese",
    level: 60,
  },
  {
    title: "Japanese",
    level: 40,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}
      >
      <h2 className="text-5xl font-bold">Skills</h2>
      <div className="space-y-4 mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="w-64">
            <motion.h3 className="text-xl font-bold text-gray-400"
            initial={{opacity: 0 }}
            variants={{
              visible: {opacity: 1, transition: {duration: 1, delay: 1 + index * 0.2}}
            }}
              >
              {skill.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div className="h-full bg-gray-600 rounded-full" style={{width: `${skill.level}%`}}
              initial={{scaleX: 0, originX: 0}}
              variants={{
                visible: {scaleX: 1, transition: {duration: 1, delay: 1 + index * 0.2}}
              }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-5xl font-bold">Languages</h2>
        <div className="space-y-4 mt-8">
          {languages.map((language, index) => (
            <div key={index} className="w-64">
              <motion.h3 className="text-xl font-bold text-gray-400"
              initial={{opacity: 0}}
              variants={{
                visible: {opacity: 1, transition: {duration: 1, delay: 1 + index * 0.2}}
              }}
              >
              {language.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div className="h-full bg-gray-600 rounded-full" style={{width: `${language.level}%`}}
                initial={{scaleX: 0, originX: 0}}
                variants={{
                  visible: {scaleX: 1, transition: {duration: 1, delay: 2 + index * 0.2}}
                }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 bg-white w-96 max-w-full rounded-md">
        <form>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="John Doe" />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="john.doe@example.com" />
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Hello, I'm interested in your services." />
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
        </form>
      </div>
    </Section>
  );
};