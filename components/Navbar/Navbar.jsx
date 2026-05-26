import styles from "./Navbar.module.css"
import Logo from "../../assets/images/vasquezLogo.png"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <section className={styles.navbarleft}>
                <Image src={Logo} 
                alt="Logo"
                width={300}></Image>
            </section>
            <section className={styles.navbarright}>
                <span>HOME</span>
                <span>SERVICIOS</span>
                <span>SOBRE NOSOTROS</span>
                <p>AGENDAR CONSULTA</p>
            </section>
        </nav>
    )
}

export default Navbar