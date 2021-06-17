/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Design from 'assets/feature/design.svg';

const data = [
  {
    id: 1,
    imgSrc: Winner,
    altText: 'Smart',
    title: 'Performance Optimization',
    text:
      'Well optimized application including image-optimization, code-splitting and lazy-loading.',
  },
  {
    id: 2,
    imgSrc: Smart,
    altText: 'Performance',
    title: 'Reusable and clean code',
    text:
      'Reusable and easily maintainable components following the latest coding conventions.',
  },
  {
    id: 3,
    imgSrc: Design,
    altText: 'Content',
    title: 'Responsive design',
    text:
      'Responsive designs which is suitable to most of the devices.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          title="FEATURES"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
};
