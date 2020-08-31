// eslint-disable-next-line import/no-extraneous-dependencies

const fakeResult = [
  {
    description: '科技公司如何快速招聘人才：大、中、小企业存在关键差别',
    is_favorite: 1,
    link: 'https://www.infoq.cn/article/KluxFvPzxou2CoAkdkdG',
    message_id: 261,
    title: 'CTO 如何快速招聘人才？',
  },
  {
    description: '从“写代码”变成“看代码”？',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/txlwVBbazskPdtcgczEk',
    message_id: 260,
    title: '无代码编程时代，程序员的工作内容会发生哪些变化？ | 话题',
  },
  {
    description:
      'Doris在小米从2019年9月上线接入第一个业务至今，已经在海内外部署近十个集群（总体达到几百台BE的规模），每天完成数万个在线分析查询，承担了我们包括增长分析和报表查询在内的大多数在线分析需求。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/b8f23f8716dd662a7ec5e11e3',
    message_id: 259,
    title: '基于Apache Doris的小米增长分析平台实践',
  },
  {
    description:
      '   金融级移动开发平台 mPaaS（Mobile PaaS）为 App 开发、测试、运营及运维提供云到端的一站式解决方案，能有效降低技术门槛、减少研发成本、提升开发效率，协助企业快速搭建稳定高质量的移动应用。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/ff768319804649f6539511773',
    message_id: 258,
    title: 'mPaas研发流程和线上运维介绍',
  },
  {
    description: 'AI就是人类的未来。如果你不参与，那么就意味着你至少落后了一步。',
    is_favorite: 1,
    link: 'https://www.infoq.cn/article/9UMGkqd31p8tEAbNta0u',
    message_id: 24,
    title: '如何从软件工程师转型到人工智能工程师？',
  },
  {
    description:
      '说明：即使你对 SOFA RPC 的技术不熟悉，也能从这篇文章中体会到排查问题的实用技巧，希望对大家有所启发。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/ffd1b2f416f510d1bdfefe467',
    message_id: 23,
    title: '一个空格引发的“救火之旅” - 记一次 SOFA RPC 的排查过程',
  },
  {
    description:
      'Ray 是 UC Berkeley RISELab 出品的分布式框架。为了应对 增强学习对大数据集实时计算的需求。 Ray 底层对于分布式计算的优化。尤其是采用了 Apache Arrow 的 plasma 内存数据架构性能非常优秀，Ray 的衍生项目 Modin 针对 Pandas 做了优化。值得深入研究。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/1bf9d6404f2c1536102c8d45a',
    message_id: 22,
    title: 'Ray 分布式计算框架详解',
  },
  {
    description:
      '根据 Gartner 对微服务的定义：“微服务是范围狭窄、封装紧密、松散耦合、可独立部署且可独立伸缩的应用程序组件。”',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/qXCl87G3fsIUbNVuLKOI',
    message_id: 21,
    title: '谈谈微服务设计中的API网关模式',
  },
  {
    description: '设计模式是用于解决问题的完美工具',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/2VJ1tSD1dimElT3qg0Kv',
    message_id: 20,
    title: '你应该了解的5种TypeScript设计模式',
  },
  {
    description:
      "Kruise 是 OpenKruise 中的核心项目之一，Kruise 是 cruise的谐音，字面意义巡航，豪华游艇（'K' for Kubernetes）。寓意 Kubernetes 上应用的自动巡航，如果把原生 Kubernetes 资源 Deployment 或 StatefulSet 比作小船，那 Kruise 确实就是豪华游艇了。",
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/100f8d7cc24e016314e482924',
    message_id: 19,
    title: 'OpenKruise：Kubernetes 核心控制器 Plus',
  },
  {
    description: '作为核心开发，特别是技术团队的管理者，尤其需要拥有第三阶段的能力。\n',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/4IKOMUQk89U0GXgNl3XN',
    message_id: 18,
    title: '为什么技术同学需要有更多的业务思考？',
  },
  {
    description:
      '闲鱼已经从一个茶水间创业的内部小产品，变成了在C2C领域的领先平台。线上交易的繁荣亟需技术架构做相应的调整、演进才能支撑业务的快速发展。\n',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/dJYw6wJ9aYqBXaafvgNf',
    message_id: 17,
    title: '闲鱼靠什么支撑起万亿的交易规模？',
  },
  {
    description:
      '经过几年的发展，美团外卖的日订单早已突破千万单。业务成长到一定阶段后，进行商业变现是一个常见的问题。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/8fcYSDAxhm1zSTeXNhtx',
    message_id: 12,
    title: '强化学习在外卖商业中发挥的作用 | ArchSummit',
  },
  {
    description:
      '作为一种新型高精度定位技术，经历多年的发展，UWB定位技术的实现原理是什么，本文告诉你答案。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/UdrFfDotYwRU23KBIl3o',
    message_id: 11,
    title: '搞定物联网定位：UWB高精度定位技术原理与实现',
  },
  {
    description: '查看更多AI领域资讯',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/zyEa5aBEVzUN41Z6qygV',
    message_id: 10,
    title:
      'AI周报：扎克伯格敦促美国攻击TikTok；蚂蚁集团上半年人均月薪5.5万元；中芯国际上半年净利润暴涨556%',
  },
  {
    description: '更多产业动态>>',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/kDBpiGT9p6OqBk63ZuYy',
    message_id: 9,
    title:
      '区块链周报：建行短暂开通数字人民币钱包后下线；加密技术被纳入中国禁止出口技术目录；“区块链应用操作员”国标编制启动',
  },
  {
    description: '这一期就从数据传输的完整性、私密性、源认证、不可否认性四个方面说明信息安全',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/3a74665634791cb4dd1e98e58',
    message_id: 8,
    title: '安全系列之——数据传输的完整性、私密性、源认证、不可否认性',
  },
  {
    description: '>本文收录在个人博客：www.chengxy-nds.top，技术资料共享，同进步',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/b30deb9f1f26566e19d1dabe5',
    message_id: 7,
    title: '我也没想到 Springboot + Flowable 开发工作流会这么简单',
  },
  {
    description: '如何真正做到标准，自运维，以应用为中心和用户为中心的 Kubernetes 平台？',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/guVQwz9H1llDefRmo4rH',
    message_id: 6,
    title: '阿里张磊：如何构建以应用为中心的“Kubernetes”？',
  },
  {
    description:
      '图神经网络DeepWalk 算法原理DeepWalk算法图网络现在非常的流行，应用场景也十分的广泛，在推荐领域应用也十分广泛。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/o7tDyFJ6akV1eoOlsg2z',
    message_id: 5,
    title: '详解Graph Embedding经典方法：算法原理、代码实现与应用样例',
  },
  {
    description:
      '微信 和 钉钉，分属于 腾讯 和 阿里巴巴 两大阵营，当他们之间可以互联互通，会是一种怎样神奇的场景？',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/36204fde5970c3a0da2eb9324',
    message_id: 4,
    title: '打通微信和钉钉服务是一种怎样的体验？',
  },
  {
    description:
      '我有一段时间没有更新FCC前端教程了，这一周就继续写完CSS与CSS3基础的教程。最近工作和生活都比较繁忙所以文章更新也受到了一定的影响。不过技术文章写作再忙也不会放弃的。我会继续努力坚持着一周一篇文章的进度，继续为大家带来我学习到的知识。让我们一起',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/5aca289ecc7f8d664e32037b3',
    message_id: 3,
    title: '【FCC前端教程】44关学习CSS与CSS3基础「二」',
  },
  {
    description:
      '随着美国政府对华为的围堵步步升级，芯片的重要性已经家喻户晓，但中国企业被“卡脖子”的不止是芯片。今年6月以来，由于被美国商务部列入实体清单，哈工大、哈工程等老牌工科院校无法继续使用正版的计算仿真软件MATLAB，一度引起热议，这一软件由美国公司Mathworks开发，是应用广泛的基础仿真软件。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/2SA0hh4TISKTD83OfqNw',
    message_id: 2,
    title: '不止芯片，国产工业软件也需要突围',
  },
  {
    description:
      '数组做为一种基础的数据存储结构，应用十分广泛。数组是用连续的内存空间来存储固定长度的、*相同数据类型*的一种数据结构。数据结构是跟语言无关的，这里，使用java来进行数组的相关操作。数组的索引是从0开始的。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/fd46b2911b53148043a22601b',
    message_id: 1,
    title: '揭开数组的真面目',
  },
  {
    description: '为什么 NLP 领域没有出现像“CV 四小龙”那样的独角兽公司？',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/zo227zNcRNPBXLdYOACf',
    message_id: 16,
    title: '为什么NLP 跑不出独角兽？',
  },
  {
    description:
      '通过以上的对话，身为程序员的你是否也遇到过妹子这样的问题呢？传统的而且网上到处充斥着的也是这类方式，客户端根据自己的滚动不断的更新pagesize和pageindex两个参数，然后上传给服务端接口获取数据，而且网络上也很少说明这种方式是否有问题，那到底有没',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/ecc68e93e3b43c454b46a25a0',
    message_id: 15,
    title: '小小的分页引发的加班血案',
  },
  {
    description: '简介：云原生社区活动---Kubernetes源码剖析第一期第二周',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/04453b78affa84c0544602bfc',
    message_id: 14,
    title: 'k8s-client-go源码剖析(二)',
  },
  {
    description:
      '🚀面试造火箭！汽车75马力就够奔跑了，那你怎么还想要2.0涡轮+9AT呢？不要觉得你在写CRUD，有时候是你把需求设计成了日复一日的增删改查。',
    is_favorite: 0,
    link: 'https://www.infoq.cn/article/9f116bfad546bc5fd0538ba56',
    message_id: 13,
    title: '面经手册 · 第8篇《LinkedList插入速度比ArrayList快？你确定吗？》',
  },
];

export default {
  'GET  /api/items/infoq': fakeResult,
};
