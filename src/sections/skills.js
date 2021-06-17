/** @jsxImportSource theme-ui */
import {jsx, Container, Box, Grid, Flex, Text, Image} from 'theme-ui';
import SectionHeader from 'components/section-header';
import JS from 'assets/skills/icons8-javascript.svg';
import React from 'assets/skills/icons8-react.svg';
import Next from 'assets/skills/next-js.svg';
import Redux from 'assets/skills/icons8-redux.svg';
import Mui from 'assets/skills/icons8-material-ui.svg';
import Sass from 'assets/skills/icons8-sass.svg';
import FireBase from 'assets/skills/icons8-firebase.svg';
import Dj from 'assets/skills/django_3.svg';
import Pg from 'assets/skills/icons8-postgresql.svg';
import Git from 'assets/skills/icons8-github.svg';
import Tui from 'assets/skills/theme-ui.svg';
import Saga from 'assets/skills/redux-saga.svg';

const skills = [
    {
        name: 'JAVASCRIPT',
        icon: JS,
    },
    {
        name: 'REACT',
        icon: React,
    },
    {
        name: 'NEXT.JS',
        icon: Next,
    },
    {
        name: 'REDUX',
        icon: Redux,
    },
    {
        name: 'REDUX-SAGA',
        icon: Saga,
    },
    {
        name: 'SCSS',
        icon: Sass,
    },
    {
        name: 'MATERIAL-UI',
        icon: Mui,
    },
    {
        name: 'THEME UI',
        icon: Tui,
    },
    {
        name: 'FIREBASE',
        icon: FireBase,
    },
    {
        name: 'DJANGO',
        icon: Dj,
    },
    {
        name: 'POSTGRESQL',
        icon: Pg,
    },
    {
        name: 'GIT',
        icon: Git,
    },


]
export default function Skills() {
  return (
    <section sx={{ variant: 'section.faq' }} id='skills'>
      <Container>
        <SectionHeader
          title="SKILLS"
        />
        <Grid sx={styles.grid}>
          {
              skills.map(skill => (
                  <Flex key={skill.name} sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                      <Image src={skill.icon} sx={{height: 48, width: 48}}/>
                      <Text sx={{padding: '10px 0'}}>{skill.name}</Text>
                  </Flex>
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
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
      null,
      'repeat(6,1fr)',
    ],
  },
};
