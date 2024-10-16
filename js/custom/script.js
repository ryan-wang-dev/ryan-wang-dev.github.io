'use strict';
const fs = require('hexo-fs');
const url = require('url');


hexo.extend.generator.register('script', function(locals){
  const config = hexo.config;
  const theme = hexo.theme.config;

  var env = require('../../package.json')

  if(theme.audio) {
    siteConfig.audio = theme.audio
  }

  var text = '';

  ['utils', 'dom', 'player', 'global', 'sidebar', 'page', 'pjax'].forEach(function(item) {
    text += fs.readFileSync('themes/anzhiyu/source/js/custom/'+item+'.js').toString();
  });

  text = 'var CONFIG = ' + JSON.stringify(siteConfig) + ';' + text;

  return {
      path: theme.js + '/app.js',
      data: function(){
        return hexo.render.renderSync({text:  text, engine: 'js'});
      }
    };
});
