// 此文件用于测试和侧边栏数据格式的参考。

const themeConfig = {
  sidebar: {
    '/多目录/': [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          ['01.章节1/01.章节1-1', '章节1-1'],
          ['01.章节1/02.章节1-2', '章节1-2'],
        ],
      },
      {
        title: 'Group 2',
        collapsable: false,
        children: [
          ['02.章节2/01.章节2-1', '章节2-1'],
          ['02.章节2/02.章节2-2', '章节2-2'],
          ['02.章节2/03.章节2-3', '章节2-3'],
          ['02.章节2/04.章节2-4', '章节2-4'],
        ],
      },
    ],
  },
};
