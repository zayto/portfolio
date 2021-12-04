module.exports = {
  images: {
    loader: 'custom',
  },
  baseUrl: '.',
  paths: {
    '@c/*': ['components/*'],
    '@q/*': ['lib/queries/*'],
    '@t/*': ['./types/*'],
  },
};
