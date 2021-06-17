/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/settings.svg';
import Editing from 'assets/key-feature/repair.svg';
import Speed from 'assets/key-feature/web-maintenance.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'front end development',
    title: 'Frontend Development',
    text:
      'Frontend application development with React. Integration with backend/third-party api.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'back end development',
    title: 'Backend Development',
    text:
      'REST Api development with Django-rest-framework along with authentication, PostgreSQL/MySQL database. Firebase authentication and firestore as NoSQL database.',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'full stack development',
    title: 'Full-Stack Development',
    text:
      'Fully functional web application development with React frontend and django/firebase backend.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="services">
      <Container>
        <SectionHeader
          title="MY SERVICES"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
