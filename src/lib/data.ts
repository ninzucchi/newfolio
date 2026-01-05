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

export const projects: {
  slug: string;
  title: string;
  description: string;
  year: string;
  images: string[];
  url?: string;
}[] = [
  // Substack projects
  {
    slug: 'substack-app',
    title: 'Substack app',
    description: 'The best way for creators and their readers to experience Substack.',
    year: '2025',
    images: [
      '/projects/app-01.jpg',
      '/projects/app-02.jpg',
      '/projects/app-03.jpg',
      '/projects/app-04.jpg',
    ],
  },
  {
    slug: 'substack-creator-dashboard',
    title: 'Substack creator dashboard',
    description:
      'The primary surface for creators to publish, view analytics, and manage their audiences on Substack.',
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
    slug: 'substack-web-reader',
    title: 'Substack web reader',
    description:
      'A fully-featured desktop reading experience that brings the Substack app to the web.',
    year: '2023',
    images: [
      '/projects/reader-01.jpg',
      '/projects/reader-02.jpg',
      '/projects/reader-03.jpg',
      '/projects/reader-04.jpg',
    ],
  },
  {
    slug: 'substack-notes',
    title: 'Substack notes',
    description:
      "Substack's flagship short-form format, allowing creators to publish with less pressure.",
    year: '2022',
    images: ['/projects/notes-01.jpg', '/projects/notes-02.jpg', '/projects/notes-03.jpg'],
  },
  {
    slug: 'substack-chat',
    title: 'Substack chat',
    description:
      'A community space for creators to host real-time conversations with their readers.',
    year: '2021',
    images: ['/projects/chat-01.jpg', '/projects/chat-02.jpg', '/projects/chat-03.jpg'],
  },
  {
    slug: 'substack-design-system',
    title: 'Substack design system',
    description: 'The foundational UI and component kit powering all new Substack features.',
    year: '2025',
    images: ['/projects/pencraft-01.jpg', '/projects/pencraft-02.jpg'],
  },
  // Meta projects
  {
    slug: 'facebook-civic-integrity',
    title: 'Facebook civic integrity',
    description:
      'A crowdsourced fact checking and moderation system to help prevent the spread of misinformation in the Global South.',
    year: '2020',
    images: [
      '/projects/civic-01.jpg',
      '/projects/civic-02.jpg',
      '/projects/civic-03.jpg',
      '/projects/civic-04.jpg',
    ],
  },
  {
    slug: 'facebook-lightweight-feedback',
    title: 'Facebook lightweight feedback',
    description:
      'A low-friction interaction to dismiss unwanted content, letting users train their algorithms via negative feedback.',
    year: '2019',
    images: ['/projects/feedback-01.jpg'],
  },
  {
    slug: 'facebook-blood-donations',
    title: 'Facebook blood donations',
    description:
      'A platform-wide network to connect donors to organizations addressing acute blood shortage.',
    year: '2018',
    images: ['/projects/blood-01.jpg', '/projects/blood-02.jpg'],
  },
  // IDEO projects
  {
    slug: 'american-express-pay-it-plan-it',
    title: 'American Express Pay-it / Plan-it',
    description:
      "A pair of signature interactions to help reduce users' anxiety around credit card debt.",
    year: '2015',
    images: ['/projects/amex-02.jpg', '/projects/amex-01.jpg'],
  },
  {
    slug: 'google-kubits',
    title: 'Google Kubits',
    description:
      'A game-driven system that teaches core programming concepts through physical play.',
    year: '2014',
    images: ['/projects/google-01.jpg', '/projects/google-02.jpg', '/projects/google-03.jpg'],
  },
  {
    slug: 'bayer-contour-one',
    title: 'Bayer Contour One',
    description:
      'A connected sensor and wearable app to make diabetes data legible to patients and clinicians.',
    year: '2014',
    images: ['/projects/bayer-01.jpg'],
  },
  {
    slug: 'nfl-tv-app-experience',
    title: 'NFL TV app experience',
    description:
      'A vision for the first smart TV app from the NFL, letting users browse games, highlights, and more.',
    year: '2013',
    images: ['/projects/nfl-02.jpg'],
  },
  {
    slug: 'ford-driver-experience',
    title: 'Ford driver experience',
    description:
      'A steering-wheel–controlled interface to let drivers navigate, communicate, and more with their hands on the wheel.',
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

export const skills = {
  Design: ['Systems design', 'Product design', 'Prototyping', 'Fast sketching', 'Slow refinement'],
  Engineering: ['TypeScript', 'React', 'Radix', 'CSS', 'Git'],
  Product: [
    'Product management',
    'Product strategy',
    'Experiment design',
    'Data analysis',
    'Linear',
  ],
};
