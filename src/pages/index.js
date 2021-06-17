import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import Contact from '../sections/contact';
import Feature from '../sections/feature';
import AboutMe from '../sections/aboutme';
import Projects from '../sections/projects';
import Skills from "../sections/skills";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Mostafa Rafid" />
          <Banner />
          <KeyFeature />
          <Feature />
          <Skills />
          <Projects />
          <AboutMe />
          <Contact />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
