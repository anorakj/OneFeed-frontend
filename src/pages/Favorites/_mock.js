// eslint-disable-next-line import/no-extraneous-dependencies

const fakeResult = [
  {
    id: 4,
    link: 'https://github.com/cloudreve/Cloudreve',
    message_id: 55,
    source: 'github_trending',
    title: '/cloudreve/Cloudreve',
  },
  {
    id: 3,
    link:
      'https://www.wsj.com/articles/one-of-the-brains-behind-tesla-found-a-new-way-to-make-electric-cars-cheaper-11598673630',
    message_id: 54,
    source: 'hackernews_homepage',
    title: 'Tesla’s former CTO is building a giant lithium-ion battery recycling operation',
  },
];

export default {
  'GET  /api/favorites/items': fakeResult,
};
