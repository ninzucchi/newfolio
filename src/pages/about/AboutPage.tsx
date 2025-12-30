import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../components/ui/Text';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/text/SectionHeader';
import { TextLink } from '../../components/ui/TextLink';
import {
  GridContainerThree,
  GridContainerTwo,
  GridColumnIcon,
  GridColumnTitle,
  GridColumnDate,
} from '../../components/ui/Grid';
import { IconContainer } from '../../components/ui/IconContainer';
import { SubstackIcon } from '../../components/icons/SubstackIcon';
import { MetaIcon } from '../../components/icons/MetaIcon';
import { IDEOIcon } from '../../components/icons/IDEOIcon';

const experience = [
  {
    company: 'Substack',
    companyUrl: 'https://substack.com',
    role: 'Senior Product Designer',
    period: '2020-Present',
    icon: SubstackIcon,
  },
  {
    company: 'Meta',
    companyUrl: 'https://meta.com',
    role: 'Product Design Lead',
    period: '2016-2020',
    icon: MetaIcon,
  },
  {
    company: 'IDEO',
    companyUrl: 'https://ideo.com',
    role: 'Interaction Design Lead',
    period: '2012-2016',
    icon: IDEOIcon,
  },
];

const credentials = [
  {
    institution: 'Carnegie Mellon',
    institutionUrl: 'https://cmu.edu',
    degree: 'MS, Human Computer Interaction',
    year: '2012',
  },
  {
    institution: 'Vassar College',
    institutionUrl: 'https://vassar.edu',
    degree: 'BA, Cognitive Science',
    year: '2011',
  },
];

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col gap-16"
    >
      {/* Bio Section */}
      <Section>
        <Text.H1 className="text-2xl font-medium">Hi, I'm Nick.</Text.H1>
        <Text.B3>
          I'm a product designer and front-end engineer at{' '}
          <TextLink newTab href="https://substack.com" className="underline">
            Substack
          </TextLink>
          , where we're creating a new economic engine for culture.
        </Text.B3>
        <Text.B3>
          Before Substack, I developed features at{' '}
          <TextLink newTab href="https://meta.com" className="underline">
            Meta
          </TextLink>{' '}
          to protect the platform from abuse, ensure fair elections, and respond to global security
          threats.
        </Text.B3>
        <Text.B3>
          Prior to that, I was an interaction designer at{' '}
          <TextLink newTab href="https://ideo.com" className="underline">
            IDEO
          </TextLink>
          , where I helped global brands like Google, Ford, Bayer and American Express launch
          best-in-class digital experiences.
        </Text.B3>
        <Text.B3>I live in the Mission, San Francisco.</Text.B3>
      </Section>

      <Section>
        <SectionHeader>Experience</SectionHeader>
        <GridContainerThree>
          {experience.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <React.Fragment key={index}>
                <GridColumnIcon>
                  <IconContainer>
                    <IconComponent className="text-fg-primary" size={20} />
                  </IconContainer>
                </GridColumnIcon>
                <GridColumnTitle>
                  <TextLink
                    newTab
                    href={item.companyUrl}
                    className="hover:text-foreground underline"
                  >
                    {item.company}
                  </TextLink>
                  <Text.B4 className="text-fg-secondary">{item.role}</Text.B4>
                </GridColumnTitle>
                <GridColumnDate>
                  <Text.B4 className="text-fg-secondary">{item.period}</Text.B4>
                </GridColumnDate>
              </React.Fragment>
            );
          })}
        </GridContainerThree>
      </Section>

      <Section>
        <SectionHeader>Education</SectionHeader>
        <GridContainerTwo>
          {credentials.map((item, index) => (
            <React.Fragment key={index}>
              <GridColumnTitle>
                <TextLink
                  newTab
                  href={item.institutionUrl}
                  className="hover:text-foreground underline"
                >
                  {item.institution}
                </TextLink>
                <Text.B4 className="text-fg-secondary">{item.degree}</Text.B4>
              </GridColumnTitle>
              <GridColumnDate>
                <Text.B4 className="text-fg-secondary">{item.year}</Text.B4>
              </GridColumnDate>
            </React.Fragment>
          ))}
        </GridContainerTwo>
      </Section>
    </motion.div>
  );
}
