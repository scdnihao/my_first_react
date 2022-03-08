
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const path = require('path');
// const webpack=require('webpack')

let htmlwebpackplugin = require('html-webpack-plugin');//引入html-webpack-plugin插件 

let get_html = function(name,chunk){//封装
    return {
        template: './app/ejs/generate/'+ name + '.ejs',
        filename:  name+ '.html',
        chunks  : ['main',chunk||null],//这里引入公共文件main.js，另外一个文件按需引入，当然也可以把这个的值设为数组，传入function的第二个值用数组就行
        chunksSortMode: 'manual',//将chunks按引入的顺序排序
        inject  : true,//所有JavaScript资源插入到body元素的底部
        hash    : true,
		xhtml	: true
    }
};


module.exports = {
        entry: './src/index.js',
        output:{
            path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
            filename:'bundle.js' //这是指定 输出的文件的名称
        },
        devServer: {
            static: {
              directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000,
            inline:true
          },
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader' 
                    ]
                },
                
            ]
        },
        plugins: [
            //new一个模板出来测试一下
   　　		new htmlwebpackplugin(get_html("home","main"))
        ]
   
}

