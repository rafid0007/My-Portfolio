/** @jsxImportSource theme-ui */
import {jsx, Container, Heading, Text, Box, Grid, Button, Image} from 'theme-ui';
import SectionHeader from 'components/section-header';
import {BiWorld} from "react-icons/bi";
import {BiCodeAlt} from "react-icons/bi";
import r_1 from '../assets/projects/reevo-1.png';
import r_2 from '../assets/projects/reevo-2.png';
import r_3 from '../assets/projects/reevo-3.png';
import c_1 from '../assets/projects/ciao-1.png';
import c_2 from '../assets/projects/ciao-2.png';
import c_3 from '../assets/projects/ciao-3.png';
import f_1 from '../assets/projects/forkify-1.png';
import f_2 from '../assets/projects/forkify-2.png';
import {Link} from "../components/link";
import CustomCarousel from "../components/carousel";

const projects = [
  {
    id: 1,
    title: 'REEVO',
    description:
      'A web application frontend for Ecommerce business.',
    imageUrl: [r_1, r_2, r_3],
    techs: ['React', 'Next.js', 'Material-Ui', 'Scss', 'Context API' ],
    siteLink: 'https://reevo.vercel.app/',
    feCodeLink: "https://github.com/rafid0007/Reevo",
    beCodeLink: "beLink",
  },
  {
    id: 2,
    title: 'CIAO',
    description:
      'A web application for a online fashion shop with integrated online payment system',
    imageUrl: [c_1, c_2, c_3],
    techs: ['React', 'Redux-saga', 'Scss', 'Styled Components', 'Firebase', 'Stripe'],
    siteLink: "https://ciao1.herokuapp.com/",
    feCodeLink: "https://github.com/rafid0007/Ciao",
    beCodeLink: "beLink",
  },
  {
    id: 3,
    title: 'RECIPE HUNT',
    description:
      'A website for searching food recipes and determining the amount of ingredients needed for any servings.',
    imageUrl: [f_1, f_2],
    techs: ['Html 5', 'Css 3', 'Javascript'],
    siteLink: "https://rafid0007.github.io/Recipe-Hunt/dist/",
    feCodeLink: "https://github.com/rafid0007/Recipe-Hunt",
    beCodeLink: "beLink",
  },
];


export default function Projects() {
  return (
    <section id="projects" sx={{ variant: 'section.testimonial' }}>
      <Container>
        <SectionHeader title="PROJECTS" />
        <Grid sx={styles.grid}>
          {
            projects.map((project, i) => (
                <Box sx={styles.card} key={i}>
                  <Box sx={styles.cardImage}>
                    {
                      <CustomCarousel items={project.imageUrl.map((img, i) => <Image src={img} key={i}/>)}/>
                    }
                  </Box>
                  <Box sx={styles.content}>
                    <Heading sx={styles.heading}>{project.title}</Heading>
                    <Text sx={styles.description}>{project.description}</Text>
                  </Box>
                  <Box sx={styles.techs}>
                    <Text as='div' sx={{textAlign:'center'}}>TECHNOLOGIES:</Text>
                    {project.techs.map((tech, i) => (<Button variant={'techBtn'} key={i}>{tech}</Button>))}
                  </Box>
                  <Box sx={styles.links}>
                    <Link path={project.siteLink} sx={styles.linkText}>
                      <Text sx={styles.linkTextWrapper}><BiWorld/> WEBSITE</Text>
                    </Link>
                    { project.feCodeLink && <Link path={project.feCodeLink} sx={styles.linkText}>
                      <Text sx={styles.linkTextWrapper}><BiCodeAlt/> CODE</Text>
                    </Link> }
                  </Box>
                </Box>
            ))
          }
        </Grid>
      </Container>
    </section>
  );
}


const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    textAlign: 'center',
    marginTop: [30, 30, 30, 0 ],
    border: '1px solid rgba(38, 78, 118, 0.1)',
    borderRadius: 20,
    transition: 'all 0.3s ease 0s',
    overflow: 'hidden',
    ':hover': {
      boxShadow: 'rgb(38 78 118 / 10%) 0px 4px 25px',
    }
  },
  cardImage: {
    height: '175px',
    overflow: 'hidden',
  },
  content: {
    height: '185px',
    padding : '20px',
  },
  heading: {
    color: '#343d48',
  },
  description: {
    margin: '15px 0',
  },
  techs: {
    minHeight: '220px',
    textAlign: 'center',
    padding: '15px 15px 20px',
    borderTop: '1px solid #d9e0e7',
  },
  links: {
    padding: '15px',
    borderTop: '1px solid #d9e0e7',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  linkText: {
    color: 'secondary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  linkTextWrapper: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: '2px',
    alignItems: 'center'
  }
};