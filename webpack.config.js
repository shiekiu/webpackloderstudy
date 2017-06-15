const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	context:__dirname,
	// 入口文件
	entry:'./src/app.js',
	// 输出
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
             //增加图片压缩功能，如果图片小于5k转成64位数据，减少http请求
             ,{ test: /\.(png|jpg|gif|svg)$/i, loaders: ['url-loader?limit=5000&name=assets/[name]-[hash:5].[ext]','image-webpack-loader']}
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
