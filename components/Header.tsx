import { CvData } from "@/data/cv-data"
import styles from "../styles/Header.module.scss"

const data = [
  { label: { fr: "Expérience", eng: "Experience" }, value: "/#xp" },
  { label: { fr: "Projet", eng: "Projects" }, value: "/#projet" },
  { label: { fr: "Compétences", eng: "Skills" }, value: "/#skills" },
  { label: { fr: "Formation", eng: "Education" }, value: "/#formation" },

]


type Props = {
  toRef: (val: string) => void,
  lang: "eng" | "fr"
}

const Header: React.FC<Props> = ({ toRef, lang }) => {

  return <div className={styles.header}>
    {
      data.map(
        ({ label, value }) => <div className={styles.link} onClick={() => toRef(value)}>
          { label[lang] }
      </div>
      )
    }
  </div>

}

export default Header;