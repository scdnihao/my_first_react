/**
 * [description]
 * 使用过create-react-app（以下简称cra）的朋友都知道，这是react官方的一款脚手架工具，
 * 使用过内部集成了使用react-app-rewired,使用此插件可以暴露出webpack
 * 但是！react-app-rewired2.x以后，不再支持injectBabelPlugin的方式，需要安装customize-cra。
 * npm install customize-cra --save-dev 或者  yarn add customize-cra --dev
 * 所以新建config-overrides.js可以读取到该文件
 */
 const { override, fixBabelImports,addPostcssPlugins } = require('customize-cra');
 
 /**
  * [关闭打包后的sourcemap description]
  * [打包后我们会发现静态文件夹中会有很多的css和js的map文件，关闭sourcemap]
  */
 process.env.GENERATE_SOURCEMAP = "false";
  
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
    addPostcssPlugins([require('postcss-pxtorem')({
                    rootValue: 16,
                    propList: ['*']
                    // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
                    // propWhiteList: []
    }),])
  
  );