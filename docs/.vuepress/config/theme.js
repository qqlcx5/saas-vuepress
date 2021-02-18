const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', '..','..', 'utils/modules');
const docsRoot = path.join(__dirname,'..', '..');
const readFile = require(utilsRoot + '/readFile');

const 学习 = readFile(docsRoot + '/学习');
const 指南 = [{
    title: '基础',
    collapsable: false,
    children: readFile(docsRoot + '/指南')
}]


const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [{
        text: '指南',
        link: '/指南/01.介绍',
      },{
        text: '学习',
        link: '/学习/01.章节1/01.章节1-1',
      },
      
  ],
  
  sidebar: {
    '/指南/': 指南,
    '/学习/': 学习,
  },
};

module.exports = themeConfig;
