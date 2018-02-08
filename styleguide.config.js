const path = require('path');

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	components: './lib/components/**/[A-Z]*.js',
	styleguideComponents: {
    Pathline: path.join(__dirname, 'lib/__styleguide__/Pathline/Pathline'),
  },
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				}
			]
		}
	},
};
