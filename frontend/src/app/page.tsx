import Image from "next/image";

const projects = [
  "Проект 1",
  "Проект 2",
  "Проект 3",
  "Проект 4",
  "Проект 5",
  "Проект 6",
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "Docker",
  "Git",
  "REST API",
  "Figma",
];

const contacts = [
  { name: "Email", value: "Адрес почты" },
  { name: "Telegram", value: "Имя пользователя" },
  { name: "LinkedIn", value: "Профиль" },
  { name: "GitHub", value: "Профиль" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <h1>
            FULLSTACK WEB
            <br />
            DEVELOPER
          </h1>
        </div>
      </section>
      <section className="about">
        <div className="about__container">
          <h2>ABOUT ME</h2>

          <div className="about__content">
            <div className="about__text">
              <p>
                Здесь будет короткий рассказ обо мне: чем я занимаюсь,
                какие задачи люблю решать и с какими технологиями работаю.
              </p>
            </div>

            <div className="about__photo" role="img" aria-label="Место для фотографии">
              Фото
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projects__container">
          <h2>MY PROJECTS</h2>

          <div className="projects__grid">
            {projects.map((project) => (
              <article className="project-card" key={project}>
                <h3>{project}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="skills__container">
          <h2>MY SKILLS</h2>

          <ul className="skills__grid">
            {skills.map((skill) => (
              <li className="skill-card" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="contacts">
        <div className="contacts__container">
          <h2>MY CONTACTS</h2>

          <ul className="contacts__grid">
            {contacts.map((contact) => (
              <li className="contact-card" key={contact.name}>
                <span className="contact-card__icon" aria-hidden="true">
                  {contact.name[0]}
                </span>
                <div>
                  <strong>{contact.name}</strong>
                  <span>{contact.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
