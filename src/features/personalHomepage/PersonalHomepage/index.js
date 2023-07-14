import { Container } from "./Container";
import { Person } from "./Person";
import { ThemeSwitch } from "../../../Common/ThemeSwitch";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { skills, learn } from "./Skills/skillsList";

export const PersonalHomepage = () => {
  return (
    <Container>
      <ThemeSwitch />
      <Person />
      <main>
        <Skills title="My skillset includes 🛠️" skills={skills} />
        <Skills title="What I want to learn next 🚀" skills={learn} />
        <Portfolio />
      </main>
      <Footer />
    </Container>
  );
};
