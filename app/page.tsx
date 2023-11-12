import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Hello, I'm Michael Bañaria</h1>
        <p>Your Future Innovator</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <div className="profile-image">
          <Image
            src="/m1ch93l.jpg"
            alt="Profile Picture"
            width={800}
            height={500}
          />
        </div>
        <p>
          Currently Learning React, Laravel and Vue Technology Stack
        </p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <p>
          This is my project
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="social-icons">
          <SocialIcon
            href="https://web.facebook.com/michael.banaria25/"
            url="www.facebook.com"
          />
          <SocialIcon
            href="https://twitter.com/michaelbbanaria"
            url="www.twitter.com"
          />
          <SocialIcon
            href="https://www.instagram.com/michael_25.97/"
            url="www.instagram.com"
          />
          <SocialIcon
            href="https://github.com/m1ch93l"
            url="www.github.com/m1ch93l"
          />
        </div>
      </section>
    </div>
  );
}