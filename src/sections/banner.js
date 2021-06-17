/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Button } from "theme-ui";
import React, { useState } from "react";
import { Link } from "components/link";
import { SiReact } from "react-icons/si";
import { SiNextDotJs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import BannerBG from "assets/bg-8.jpg";

const data = [
  {
    id: 1,
    path: "#",
    comp: SiReact,
  },
  {
    id: 2,
    path: "#",
    comp: SiRedux,
  },
  {
    id: 2,
    path: "#",
    comp: SiNextDotJs,
  },
  {
    id: 3,
    path: "#",
    comp: SiDjango,
  },
];

const contactData = [
  {
    id: 1,
    title: 'GitHub',
    comp: SiGithub,
    path: "https://github.com/rafid0007",
  },
  {
    id: 2,
    title: 'LinkedIn',
    comp: SiLinkedin,
    path: "https://www.linkedin.com/in/mostafa-rafid/",
  },

]

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Image src={BannerBG} layout='fill' objectFit='cover' alt='backgroundImage'/>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h3" variant="heroPre">
            HELLO! THIS IS
          </Heading>
          <Heading as="h1" variant="heroPrimary">
            MOSTAFA RAFID
          </Heading>
          <Text as="p" variant="heroSecondary">
            I&apos;m a JAVASCRIPT & PYTHON Developer.
          </Text>
          <Flex sx={{ justifyContent: "space-between" }}>
            {contactData.map(item => (
                <Link path={item.path} key={item.id}>
                  <Button variant='secondary_2' aria-label='contact links'>
                    <item.comp/> {item.title}
                  </Button>
                </Link>
            ))}
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>My Stack:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <item.comp key={`client-key${index}`}/>
              ))}
            </Box>
          </Flex>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    position: 'relative',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    container: {
      display: "flex",
      justifyContent: "center",
      '& > *': {
        zIndex: 100
      }
    },
    contentBox: {
      width: ["100%", null, "85%", "55%", "50%", "55%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ["none", null, null, "block"],
      justifyContent: "center",
      ml: [0, null, null, "-110px", "-115px", "-150px", "-210px", "-270px"],
      mr: [0, null, null, "-145px", "-160px", "-180px", "-220px", "-290px"],
      mt: [0, null, null, "40px", 4, 7, 0],
      mb: [0, null, null, null, "-45px", "-70px", null, "-115px"],
      overflow: "hidden",
      textAlign: "right",
      width: "100%",
    },
  },
  sponsorTitle: {
    color: "white",
    fontSize: [1, 5],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ["35px", null, null, null, null, "45px"],
    flexDirection: ["column", null, "row"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      "> *": {
        fill: "white",
        fontSize: "35px",
        mr: [5, null, null, 4, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
