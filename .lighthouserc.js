module.exports = {
    ci: {
      collect: {
        staticDistDir: './',
        url: ['http://localhost:3000/'],
        numberOfRuns: 3,
      },
      assert: {
        preset: 'lighthouse:recommended',
      },
      upload: {
        target: 'temporary-public-storage',
        github: {
          token: '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',
        },
      },
    },
  };