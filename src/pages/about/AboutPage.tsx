import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../components/ui/Text';

const experience = [
  {
    company: 'Substack',
    companyUrl: 'https://substack.com',
    role: 'Senior Product Designer',
    period: '2020-Present',
  },
  {
    company: 'Meta',
    companyUrl: 'https://meta.com',
    role: 'Product Design Lead',
    period: '2016-2020',
  },
  {
    company: 'IDEO',
    companyUrl: 'https://ideo.com',
    role: 'Interaction Design Lead',
    period: '2012-2016',
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
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Bio Section */}
      <section className="mb-12">
        <div className="space-y-4">
          <Text.H1 className="text-2xl font-medium">Hi, I'm Nick.</Text.H1>
          <Text.P className="text-secondary-foreground leading-relaxed mb-0">
            I'm a product designer and front-end engineer at{' '}
            <a
              className="text-link hover:text-link-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://substack.com"
            >
              Substack
            </a>
            , where we're creating a new economic engine for culture.
          </Text.P>
          <Text.P className="text-secondary-foreground leading-relaxed mb-0">
            Before Substack, I developed features at{' '}
            <a
              className="text-link hover:text-link-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://meta.com"
            >
              Meta
            </a>{' '}
            to protect the platform from abuse, ensure fair elections, and respond to global
            security threats.
          </Text.P>
          <Text.P className="text-secondary-foreground leading-relaxed mb-0">
            Prior to that, I was an interaction designer at{' '}
            <a
              className="text-link hover:text-link-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://ideo.com"
            >
              IDEO
            </a>
            , where I helped global brands like Google, Ford, Bayer and American Express launch
            best-in-class digital experiences.
          </Text.P>
          <Text.P className="text-secondary-foreground leading-relaxed mb-0">
            I live in the Mission, San Francisco.
          </Text.P>
        </div>
      </section>

      {/* Separator */}
      <div
        data-orientation="horizontal"
        role="none"
        className="bg-border shrink-0 h-px w-full mb-12"
      />

      {/* Experience Section */}
      <section className="mb-12">
        <Text.H2 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-6 font-medium">
          Experience
        </Text.H2>
        <div className="grid grid-cols-5 gap-y-4">
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-span-2">
                <a
                  className="hover:text-foreground transition-colors"
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.company}
                </a>
              </div>
              <div className="col-span-3">
                <Text.P className="mb-0">{item.role}</Text.P>
                <Text.P className="text-sm text-muted-foreground mb-0">{item.period}</Text.P>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Credentials Section */}
      <section className="mb-12">
        <Text.H2 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-6 font-medium">
          Credentials
        </Text.H2>
        <div className="grid grid-cols-5 gap-y-4">
          {credentials.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-span-2">
                <a
                  className="hover:text-foreground transition-colors"
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.institution}
                </a>
              </div>
              <div className="col-span-3">
                <Text.P className="mb-0">{item.degree}</Text.P>
                <Text.P className="text-sm text-muted-foreground mb-0">{item.year}</Text.P>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
