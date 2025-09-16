import { Briefcase, Code, User2 } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 2, delay: i * 1, ease: "easeOut" },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-=semibold">
              Web Developer & Project Management
            </h3>

            <p className="text-muted-foreground">
              I'm a Full-Stack Web Developer with a background in Informatics
              Engineering. I build modern, scalable web applications using both
              frontend and backend technologies, focusing on performance,
              usability, and clean architecture.
            </p>

            <p className="text-muted-foreground">
              Beyond coding, I have experience leading projects from planning to
              deployment. I understand teamwork, deadlines, and project
              management principles, making sure every solution is delivered
              efficiently and meets client expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1GIGWDt6A2b1lMsZmN61muzq8nYNH2fEW/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Create responsive websites and web applications with modern frameworks.",
              },
              {
                icon: <User2 className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                desc: "Designing intuitive user interfaces and seamless user experiences.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                desc: "Leading project from conception to completion with agile methodologies.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="gradient-border p-6 card-hover"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
