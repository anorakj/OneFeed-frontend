// eslint-disable-next-line import/no-extraneous-dependencies

const fakeResult = [
  {
    description:
      '标准输出指的是命令执行所回传的正确的信息，而标准错误输出可以理解为命令执行失败后，所回传的错误信息。 一般情况下，不管正确还是错误信息数据默认的是输出到屏幕上。可以通过数据流重定向将stdout和stderr分别传送到其他的文件或者设备去',
    id: 866,
    link: 'https://www.infoq.cn/article/c4215cfdae4ca1c2dbbf5f606',
    title: 'Linux数据流重定向',
  },
  {
    description:
      '为了提升 DNS 性能，DNS 采用了多级缓存，一般配置的缓存时间较长，所以无法及时感知到服务变化',
    id: 867,
    link: 'https://www.infoq.cn/article/9aaac01f45748cd2f7797fe2a',
    title: 'RPC原理',
  },
  {
    description:
      '通过大力发展“新基建”，将帮助政府部门更快从数字管理走向智慧化，提高服务型政府的效率；同时帮助制造业完成数字化升级，提升企业的生产效率以及质量。',
    id: 868,
    link: 'https://www.infoq.cn/article/1NPMjZflXojCMLmRTMPR',
    title: '“新基建”长期利好ICT产业',
  },
  {
    description:
      'Tik Tok 事件发酵至今已经有些时日了，这个时候写一篇文章应该也算不上是蹭热点，我还是挺想分析一下这个事件背后的逻辑和影响，哪怕 Tik Tok 被禁这事儿本就没什么逻辑。',
    id: 870,
    link: 'https://www.infoq.cn/article/Me4G62dqOPZ8pomqUsLh',
    title: '中国互联网，被逼下南洋？',
  },
  {
    description: '在本文，作者总结了自己在编写高性能软件和使用性能糟糕的软件时学到的一些教训。',
    id: 859,
    link: 'https://www.infoq.cn/article/2xBCHuSjb13UCQAISqOU',
    title: '写了多年软件，我在软件性能上学到的4点教训',
  },
  {
    description: '本文解读tensorFlow 2.0的架构设计。\n',
    id: 860,
    link: 'https://www.infoq.cn/article/SILW7NGJHI1mKp1DpuYb',
    title: '分布式系统架构设计：以第一性原理思维模型解读TensorFlow 2.0的架构设计',
  },
  {
    description:
      '此前，美国限制华为采购自己设计但使用美国技术制造的芯片，如今，美国进一步升级禁令，限制华为采购任何使用美国技术制造的芯片。',
    id: 865,
    link: 'https://www.infoq.cn/article/UfQgC9RfdxdCONZGBvxx',
    title: '美国对华为极限施压！全面封锁第三方芯片采购路径',
  },
  {
    description: '央行数字货币时代临近。',
    id: 864,
    link: 'https://www.infoq.cn/article/459euhriCE57yagacLJ9',
    title: '美联储与麻省理工将共建数字美元代码库，合作代码将开源',
  },
  {
    description:
      '本文是Golang官方文档How to Write Go Code的翻译。由于众所周知的原因，国内是打不开golang.org的，而百度搜索的Golang教程良莠不齐，很多都有错误。尤其当Go 1.14发布后，基于Gopath的组织方式已经过期了，取而代之的是Mudule。因为网上缺少此类的教程，所',
    id: 863,
    link: 'https://www.infoq.cn/article/11356ca6abc04c656954a89d0',
    title: '翻译：如何编写Golang代码(How to Write Go Code)',
  },
  {
    description: '本文介绍贝壳-交易平台的质量数据指标模型。\n',
    id: 861,
    link: 'https://www.infoq.cn/article/rxN9AHZWKzwXyRqBvSCI',
    title: '贝壳-交易平台的质量分模型建设',
  },
  {
    description:
      '本文介绍了Raygun公司在一定业务场景下，通过移除Nginx，服务性能得到很大提升的一个案例。',
    id: 869,
    link: 'https://www.infoq.cn/article/mjdyLvDbw2SGa8ZxERzR',
    title: '通过移除Nginx，Raygun公司怎样将TPS提高了44%？',
  },
  {
    description:
      '“人找信息”主要通过搜索技术来实现，而基于人和信息的关系实现“信息找人”，则主要依赖推荐及广告技术。',
    id: 862,
    link: 'https://www.infoq.cn/article/73zA7AHrg1oSMDtFA9tv',
    title: '阿里广告match技术最新突破：亿级商品全库最优检索技术',
  },
];

export default {
  'GET  /api/items/infoq': fakeResult,
};
