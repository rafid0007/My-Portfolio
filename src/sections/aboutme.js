/** @jsxImportSource theme-ui */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import avatar from '../assets/avatar.svg';
import { resumeLink } from 'const/const';

const data = {
  title: 'ABOUT ME',
  description:
    'I am a web application developer and enthusiast, specialize in React with Next.js. I work for fun and like to work with the latest technologies and coding conventions. I have a background of Computer Science and Mathematics. Learning and experimenting with technologies is my passion. Learn, experiment, implement and grow is my motto.',
  btnName: 'My Resume',
  btnURL: resumeLink,
};

export default function AboutMe() {
  return (
    <section sx={{ variant: 'section.partner' }} id='about-me'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <Image src={avatar} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
