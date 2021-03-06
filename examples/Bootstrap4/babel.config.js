// @ts-check

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'IE >= 10']
        },
        useBuiltIns: 'entry',
        debug: false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
