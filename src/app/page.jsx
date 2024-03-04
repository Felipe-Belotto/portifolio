import NavBar from "@/Components/NavBar/NavBar";
import styles from "./page.module.css";
import Apresentacao from "@/Components/HomeSections/Apresentacao/Apresentacao";
import SobreMim from "@/Components/HomeSections/SobreMim/SobreMim";
import Tecnologias from "@/Components/HomeSections/Tecnologias/Tecnologias";
import PrincipaisProjetos from "@/Components/HomeSections/PrincipaisProjetos/PrincipaisProjetos";
import Contato from "@/Components/HomeSections/Contato/Contato";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.Apresentacao__container}>
      <Apresentacao />
      </div>
      <div className={styles.SobreMim__container}>
      <SobreMim />
      </div>
      <div className={styles.Tecnologias__container}>
      <Tecnologias />
      </div>
      <div className={styles.PrincipaisProjetos__container}>
      <PrincipaisProjetos />
      </div>
      <div className={styles.Contato__container}>
      <Contato />
      </div>
      
    </main>
  );
}
