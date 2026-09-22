import Image from "next/image";

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
    </main>
  );
}
