import { IDEOIcon } from '@/components/icons/IDEOIcon';
import { MetaIcon } from '@/components/icons/MetaIcon';
import { SubstackIcon } from '@/components/icons/SubstackIcon';

export const experience = [
  {
    company: 'Substack',
    companyUrl: 'https://substack.com',
    role: 'Product Design Lead, Design Engineer',
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

export const education = [
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

export const projects = [
  // Substack projects
  {
    title: 'Substack app',
    description:
      'Contributed to all aspects of the Substack mobile app, including creation, reading, audio/video, and more.',
    year: '2025',
    images: ['/projects/app-01.jpg', '/projects/app-02.jpg', '/projects/app-03.jpg'],
  },
  {
    title: 'Substack design system',
    description:
      'Established the foundational UI and component architecture powering all new Substack product development.',
    year: '2025',
    images: ['/projects/pencraft-01.jpg', '/projects/pencraft-02.jpg'],
  },
  {
    title: 'Substack creator dashboard',
    description:
      'Re-architected the primary creator control surface to streamline publishing, analytics, and subscriber management.',
    year: '2024',
    images: [
      '/projects/dashboard-01.jpg',
      '/projects/dashboard-02.jpg',
      '/projects/dashboard-03.jpg',
      '/projects/dashboard-04.jpg',
      '/projects/dashboard-05.jpg',
    ],
  },
  {
    title: 'Substack web reader',
    description:
      'Translated the Substack mobile app into a best-in-class desktop reading experience.',
    year: '2023',
    images: [
      '/projects/reader-01.jpg',
      '/projects/reader-02.jpg',
      '/projects/reader-03.jpg',
      '/projects/reader-04.jpg',
    ],
  },
  {
    title: 'Substack notes',
    description: 'Introduced a new short-form format to evolve Substack into a social product.',
    year: '2022',
    images: ['/projects/notes-01.jpg', '/projects/notes-02.jpg', '/projects/notes-03.jpg'],
  },
  {
    title: 'Substack chat',
    description:
      'Introduced a creator-governed community layer for real-time reader conversation within a publication.',
    year: '2021',
    images: ['/projects/chat-01.jpg', '/projects/chat-02.jpg', '/projects/chat-03.jpg'],
  },
  // Meta projects
  {
    title: 'Facebook civic integrity',
    description:
      'Developed crowdsourced fact checking and moderation systems to mitigate the spread of misinformation and harmful content in the Global South.',
    year: '2020',
    images: [
      '/projects/civic-01.jpg',
      '/projects/civic-02.jpg',
      '/projects/civic-03.jpg',
      '/projects/civic-04.jpg',
    ],
  },
  {
    title: 'Facebook lightweight feedback',
    description:
      'Introduced a low-friction signal for dismissing feed content, enabling users to train ranking systems through negative feedback.',
    year: '2019',
    images: ['/projects/feedback-01.jpg'],
  },
  {
    title: 'Facebook blood donations',
    description:
      'Created a platform-wide system for requesting and fulfilling blood donations, connecting donors and organizations to address acute shortages.',
    year: '2018',
    images: ['/projects/blood-01.jpg', '/projects/blood-02.jpg'],
  },
  // IDEO projects
  {
    title: 'American Express Pay-it / Plan-it',
    description:
      'Designed a pair of swipe-based repayment tools to reduce debt anxiety and make payments easier to manage.',
    year: '2015',
    images: ['/projects/amex-02.jpg', '/projects/amex-01.jpg'],
  },
  {
    title: 'Google Kubits',
    description:
      'Developed a physical, game-driven system that taught core programming concepts through modular, code-like play.',
    year: '2014',
    images: ['/projects/google-01.jpg', '/projects/google-02.jpg', '/projects/google-03.jpg'],
  },
  {
    title: 'Bayer Contour One',
    description:
      'Created a connected hardware and app ecosystem that made glucose, insulin, and lifestyle data legible and actionable for patients and clinicians.',
    year: '2014',
    images: ['/projects/bayer-01.jpg'],
  },
  {
    title: 'NFL TV app experience',
    description:
      'Defined early UI patterns for browsing live games, highlights, and archives on smart TVs.',
    year: '2013',
    images: ['/projects/nfl-02.jpg'],
  },
  {
    title: 'Ford driver experience',
    description:
      'Designed steering-wheel–driven interfaces that centralized navigation, media, and communication into a hands-on, eyes-up driving experience.',
    year: '2012',
    images: ['/projects/ford-02.jpg'],
  },
];

export const gear = [
  {
    name: 'Fujifilm X-T5',
    nameUrl: 'https://www.fujifilm-x.com/en-us/products/cameras/x-t5/',
    category: 'Body',
  },
  {
    name: 'Fujinon XF70-300mm f/4 - f/5.6',
    nameUrl: 'https://fujiframe.com/fujifilm-lenses/fuji-70-300mm-f4-5-6-r-lm-ois-wr-lens',
    category: 'Lens',
  },
  {
    name: 'Fujinon XF 50mm f/2 R WR',
    nameUrl: 'https://fujiframe.com/fujifilm-lenses/fuji-50mm-f2-r-wr-lens',
    category: 'Lens',
  },
  {
    name: 'Fujinon XF 35mm f/2 R WR',
    nameUrl: 'https://fujiframe.com/fujifilm-lenses/fuji-35mm-f2-r-wr-lens',
    category: 'Lens',
  },
  {
    name: 'Fujinon XF 16mm f/1.4 R WR',
    nameUrl: 'https://fujiframe.com/fujifilm-lenses/fuji-16mm-f1-4-r-wr-lens',
    category: 'Lens',
  },
];
