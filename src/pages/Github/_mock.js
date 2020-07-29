// eslint-disable-next-line import/no-extraneous-dependencies

const fakeResult = [
  {
    description: '\n      GPT-3: Language Models are Few-Shot Learners\n    ',
    id: 591,
    language: null,
    repository: '/openai/gpt-3',
    star: '\n\n        3,872\n',
  },
  {
    description: '\n      For empowering community ',
    id: 592,
    language: 'Ruby',
    repository: '/forem/forem',
    star: '\n\n        13,970\n',
  },
  {
    description: '\n      Vue 3 core documentation\n    ',
    id: 593,
    language: 'Vue',
    repository: '/vuejs/docs-next',
    star: '\n\n        85\n',
  },
  {
    description:
      '\n      An open source scientific computing environment for JavaScript TOTALLY in your browser, matrix operations with GPU acceleration, TeX support, data visualization and symbolic computation.\n    ',
    id: 594,
    language: 'TypeScript',
    repository: '/lidangzzz/hedgehog-lab',
    star: '\n\n        497\n',
  },
  {
    description: '\n      \n',
    id: 595,
    language: 'Python',
    repository: '/home-assistant/core',
    star: '\n\n        34,270\n',
  },
  {
    description:
      '\n      A complete computer science study plan to become a software engineer.\n    ',
    id: 596,
    language: null,
    repository: '/jwasham/coding-interview-university',
    star: '\n\n        125,117\n',
  },
  {
    description: '\n      completely free for everyone. Its build-in Flutter Dart.\n    ',
    id: 597,
    language: 'Dart',
    repository: '/mitesh77/Best-Flutter-UI-Templates',
    star: '\n\n        7,106\n',
  },
  {
    description:
      '\n      Fully functional Twitter clone built in flutter framework using Firebase realtime database and storage\n    ',
    id: 598,
    language: 'Dart',
    repository: '/TheAlphamerc/flutter_twitter_clone',
    star: '\n\n        477\n',
  },
  {
    description: '\n      Zulip server - powerful open source team chat\n    ',
    id: 599,
    language: 'Python',
    repository: '/zulip/zulip',
    star: '\n\n        12,171\n',
  },
  {
    description: '\n      Open Source Computer Vision Library\n    ',
    id: 600,
    language: 'C++',
    repository: '/opencv/opencv',
    star: '\n\n        46,563\n',
  },
  {
    description: '\n      Open Source Web Application Framework for ASP.NET Core\n    ',
    id: 601,
    language: 'C#',
    repository: '/abpframework/abp',
    star: '\n\n        4,088\n',
  },
  {
    description: '\n      \n',
    id: 602,
    language: null,
    repository: '/ossu/computer-science',
    star: '\n\n        62,961\n',
  },
  {
    description:
      '\n      Experience, Learn and Code the latest breakthrough innovations with Microsoft AI\n    ',
    id: 603,
    language: 'C#',
    repository: '/microsoft/ailab',
    star: '\n\n        5,856\n',
  },
  {
    description: '\n      Computer vision based ML training data generation tool. ',
    id: 604,
    language: 'JavaScript',
    repository: '/OvidijusParsiunas/myvision',
    star: '\n\n        135\n',
  },
  {
    description:
      '\n      Deep Learning papers reading roadmap for anyone who are eager to learn this amazing tech!\n    ',
    id: 605,
    language: 'Python',
    repository: '/floodsung/Deep-Learning-Papers-Reading-Roadmap',
    star: '\n\n        26,890\n',
  },
  {
    description: '\n      Elyra extends JupyterLab Notebooks with an AI centric approach.\n    ',
    id: 606,
    language: 'Python',
    repository: '/elyra-ai/elyra',
    star: '\n\n        343\n',
  },
  {
    description: null,
    id: 607,
    language: 'Java',
    repository: '/cylonid/NativeAlphaForAndroid',
    star: '\n\n        87\n',
  },
  {
    description:
      "\n      Test prompts for OpenAI's GPT-3 API and the resulting AI-generated texts.\n    ",
    id: 608,
    language: 'Python',
    repository: '/minimaxir/gpt-3-experiments',
    star: '\n\n        156\n',
  },
  {
    description:
      '\n      Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more\n    ',
    id: 609,
    language: null,
    repository: '/bradtraversy/design-resources-for-developers',
    star: '\n\n        16,373\n',
  },
  {
    description: "\n      Lean's OpenWrt source\n    ",
    id: 610,
    language: 'C',
    repository: '/coolsnowwolf/lede',
    star: '\n\n        11,478\n',
  },
  {
    description: '\n      疫情期间的回国航班汇总\n    ',
    id: 611,
    language: null,
    repository: '/USCreditCardGuide/airlines-to-china-covid-19',
    star: '\n\n        37\n',
  },
  {
    description: null,
    id: 612,
    language: 'Python',
    repository: '/KalleHallden/reddit_automations',
    star: '\n\n        105\n',
  },
  {
    description: '\n      A curated list of references for MLOps \n    ',
    id: 613,
    language: null,
    repository: '/visenger/awesome-mlops',
    star: '\n\n        485\n',
  },
  {
    description: '\n      Bypass Paywalls web browser extension for Chrome and Firefox.\n    ',
    id: 614,
    language: 'JavaScript',
    repository: '/iamadamdev/bypass-paywalls-chrome',
    star: '\n\n        6,908\n',
  },
  {
    description:
      '\n      Puppeteer recorder is a Chrome extension that records your browser interactions and generates a Puppeteer script. \n    ',
    id: 615,
    language: 'JavaScript',
    repository: '/checkly/puppeteer-recorder',
    star: '\n\n        7,645\n',
  },
];

export default {
  'GET  /api/items/github': fakeResult,
};
