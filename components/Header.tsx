import styles from "../styles/Header.module.scss"

const data = [
  { label: "Expérience", value: "/#xp" },
  { label: "Projet", value: "/#projet" },
  { label: "Compétences", value: "/#skills" },
  { label: "Formation", value: "/#formation" },

]


type Props = {
  toRef: (val: string) => void
}

const Header: React.FC<Props> = ({ toRef }) => {

  return <div className={styles.header}>
    {
      data.map(
        ({ label, value }) => <div className={styles.link} onClick={() => toRef(value)}>
          { label }
      </div>
      )
    }
  </div>

}

export default Header;