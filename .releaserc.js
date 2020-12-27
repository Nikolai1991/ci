module.exports = {
    branch: ["main"],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      ['@semantic-release/npm', { npmPublish: false }],
      '@semantic-release/github',
    ],
  };

