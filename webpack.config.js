const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	context:__dirname,
	entry:'./src/app.js',
	output : {
		filename:'js/[name].bundle.js',
		path: path.resolve(__dirname,'./dist')
	},	
	module: {
   		loaders: [
             { test: /\.js$/, exclude: path.resolve(__dirname,'node_modules'), include: path.resolve(__dirname,'src'), loader: "babel-loader" }
             ,{ test: /\.html$/, loader: 'html-loader'}
             ,{ test: /\.css$/, loaders: [ 'style-loader','css-loader?importLoaders=1','postcss-loader']}
             ,{ test: /\.less$/, loader: 'style-loader!css-loader!postcss-loader!less-loader'}
             ,{ test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'}
             ,{ test: /\.(png|jpg|gif|svg)$/i, loader: 'file-loader'}
        ]
    },
// 插件
	plugins: [
		new htmlWebpackPlugin({
			//filename :'index-[hash].html',
			filename :'index.html',
			template:'index.html',
			inject:'body',
			// 打包压缩
			minify :{
			// 删除注释
			removeComments : true,
			// 删除空格
			collapseWhitespace:true
			}
		})
	]
}
