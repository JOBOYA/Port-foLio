import { Grid, Card } from "@nextui-org/react";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { motion, useViewportScroll, useTransform } from "framer-motion";


const Projects = () => {
    // Utilisation de useViewportScroll et useTransform pour créer l'effet d'échelle basé sur le défilement
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);


    return (
        <>

            <div className="section-container">
                <div id="skills" className="pl-4 md:pl-64 items-center m-12">
                    <h1 className="relative right-4 md:right-16 text-white text-4xl font-bold mb-4 md:mb-0 md:mr-4"> {/* Ajustez la valeur ici */}
                        <span className="text-pink-500">#</span>Projets
                        <span style={{ position: 'absolute', left: '180px', bottom: '20px', height: '1px', width: '60.33%', backgroundColor: '#D946EF' }}></span>
                    </h1>
                </div>


                <div
                    className="relative flex flex-col items-center justify-center p-5 border-2 md:border-0 rounded-xl shadow-lg space-y-4"
                    style={{ width: '100%', height: '100vh' }}
                >
                    <Image
                        src="/assets/background.svg"
                        alt='git'
                        layout='fill'
                        objectFit='cover'
                    />
                    <Grid.Container justify="center" alignItems="center" gap={2} className="projects" id="projects">
                        <Grid.Container justify="center" alignItems="center" gap={2} className="projects__topRow">
                            <Tilt>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" className="projects__left">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        style={{ scale }}
                                    >

                                        <Card style={{ width: "300px", height: "200px" }} className="grid grid-rows-4 grid-flow-col gap-4">
                                            <Image src="/assets/joseph1.png" alt='git' width={300} height={300} />
                                        </Card>



                                    </motion.div>
                                </Grid>
                            </Tilt>

                            <Tilt>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" className="projects__left">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        style={{ scale }}
                                    >
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4">
                                            <Image src="/assets/joseph1.png" alt='git' width={300} height={300} />
                                        </Card>
                                    </motion.div>
                                </Grid>
                            </Tilt>

                            <Tilt>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" className="projects__left">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        style={{ scale }}
                                    >
                                        <Card style={{ width: "300px", height: "200px" }} className="grid grid-rows-4 grid-flow-col gap-4">
                                            <Image src="/assets/joseph1.png" alt='git' width={300} height={300} />
                                        </Card>
                                    </motion.div>
                                </Grid>
                            </Tilt>
                        </Grid.Container>



                        <Tilt>
                            <Grid xs={24} sm={12} md={8} lg={8} xl={8} justify="center" alignItems="center" className="projects__left">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    style={{ scale }}
                                >
                                    <Card css={{
                                        width: "600px",  // ajuster la largeur ici pour qu'elle corresponde aux autres cartes
                                        height: "300px",
                                        "@media screen and (max-width: 768px)": {
                                            width: "60vw",  // ajuster la largeur ici pour qu'elle corresponde aux autres cartes en vue mobile
                                        },
                                    }} className="grid grid-rows-4 grid-flow-col gap-4">
                                        <Image
                                            src="/assets/joseph1.png"
                                            alt='git'
                                            layout="responsive"
                                            width={300}
                                            height={300}
                                        />
                                    </Card>
                                </motion.div>
                            </Grid>
                        </Tilt>
                    </Grid.Container>
                </div>
            </div>
        </>
    )
}

export default Projects