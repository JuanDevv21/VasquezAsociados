import styles from "./page.module.css"
import Luggage from "../assets/images/luggage.svg"
import Image from "next/image"
import Gavel from "../assets/images/gavel.svg"
import Business from "../assets/images/business.svg"
import Briefcase from  "../assets/images/briefcase-alt.svg"
import LogoImage from "../assets/images/logoimg.png"
import HomeImage from "../assets/images/homeimg.png"

const Home = () => {
    return (
        <>
            <section className={styles.herosec}>
                <div className={styles.herodiv}>
                    <h1>Defendemos tus intereses con estrategia y experiencia</h1>
                    <span>Compromiso legal de clase mundial para empresas y particulares. Transformamos desafios juridicos en soluciones solidas</span>
                    <div className={styles.herobtn}>
                        <p className={styles.btnagendar}>AGENDAR CONSULTA</p>
                        <p className={styles.btnwhatsapp}>WHATSAPP</p>
                    </div>
                </div>
            </section>
            <section className={styles.seccion1}>
                <div className={styles.seccion1bloq}>
                    <span>+15</span>
                    <p>AÑOS DE TRAYECTORIA LEGAL EN EL ALTO NIVEL</p>
                </div>
                <div className={styles.seccion1bloq}>
                    <span> +500</span>
                    <p>CASOS RESUELTOS SATISFACTORIAMENTE</p>
                </div>
            </section>
            <section className={styles.seccion2}>
                <div className={styles.seccion2head}>
                    <span>ESPECIALIDADES</span>
                    <h2>Soluciones Legales Integrales</h2>
                </div>
                <div className={styles.seccion2body}>
                    <div>
                        <Image src={Luggage} width={40} height={40} alt="Luggage"></Image>
                        <p>Derecho laboral</p>
                        <span>Protección jurídica para empleadores y trabajadores en litigios complejos</span>
                        <span className={styles.morebtn}>SABER MÁS</span>
                    </div>
                    <div>
                        <Image src={Gavel} width={40} height={40} alt="Martillo"></Image>
                        <p>Derecho Civil</p>
                        <span>Gestión de contratos, propiedades y sucesiones con rigor técnico</span>
                        <span className={styles.morebtn}>SABER MÁS</span>
                    </div>
                    <div>
                        <Image src={Business} width={40} height={40} alt="Edificio"></Image>
                        <p>Derecho comercial</p>
                        <span>Asesoría en transacciones, fusiones y derecho societario moderno</span>
                        <span className={styles.morebtn}>SABER MÁS</span>
                    </div>
                    <div>
                        <Image src={Briefcase} width={40} height={40} alt="Maletin"></Image>
                        <p>Asesoria Empresarial</p>
                        <span>Consultoría estrategica preventiva para el crecimiento de su negocio</span>
                        <span className={styles.morebtn}>SABER MÁS</span>
                    </div>
                </div>
            </section>
            <section className={styles.seccion3}>
                <div className={styles.seccion3left}>
                    <Image src={LogoImage} alt="Logotipo" className={styles.Logotipo} width={190} height={190}></Image>
                    <Image src={HomeImage} alt="Ubicacion-Bogota" width={700} height={600}></Image>
                </div>
                <div className={styles.seccion3right}>
                    <span className={styles.seccion3rightsp}>NUESTROS VALORES</span>
                    <p className={styles.seccion3righttitle}>Ética, Transparencia y un Compromiso inquebrantable</p>
                    <span className={styles.seccion3desc}>En Vásquez & Asociados, entendemos que cada paso es una responsabilidad vital. No solo ofrecemos asesoria legal; construimos una relacion de confianza basada en la claridad absoluta</span>
                    <div className={styles.seccion3bloq}>
                        <p>Honestidad Absoluta</p>
                        <span>Evaluaciones realistas desde el primer dia, sin promesas vacias.</span>
                    </div>
                    <div className={styles.seccion3bloq}>
                        <p>Estrategia Personalizada</p>
                        <span>Diseñamos tácticas legales únicas para las necesidades de cada cliente</span>
                    </div>
                    <div className={styles.seccion3bloq}>
                        <p>Discrecion Absoluta</p>
                        <span>Protocolos de confidencialidad de nivel corporativo para su tranquilidad</span>
                    </div>
                </div>
            </section>
            <section className={styles.seccion4}>
                <div className={styles.seccion4t}>
                    <span>TESTIMONIOS</span>
                    <p>La Opinión de Nuestros Clientes</p>
                </div>
                <div className={styles.seccion4b}>
                    <div className={styles.seccion4bl}>
                        <p className={styles.seccion4com}>99</p>
                        <span className={styles.seccion4comment}>"La asesoria de Vásquez & Asociados fue fundamental para la restructuración de nuestra empresa. Su enfoque preventivo nos ahorró años de litigios innecesarios</span>
                        <div className={styles.seccion4perfil}>
                            <p>Ricardo Mendoza</p>
                            <span>CEO, INNOVATCH SOLUTIONS</span>
                        </div>
                    </div>
                        <div className={styles.seccion4bl}>
                            <p className={styles.seccion4com}>99</p>
                            <span className={styles.seccion4comment}>Encontré en ellos no solo abogados, sino aliados estratégico. Su transparencia en el manejo de mi caso civil fue ejemplar y el resultado superó las expectativas</span>
                        <div className={styles.seccion4perfil}>
                            <p>Elena Santos</p>
                            <span>DIRECTORA, CLÍNICA MÉDICA NORTE</span>
                        </div>
                    </div>
                </div> 
            </section>
        </>
    )
}

export default Home