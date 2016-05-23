import Router from 'koa-router'

const router = new Router({
  prefix: '/test'
})

router
  .get('/json', (ctx, next) => {
    ctx.body = {
      test: 'json'
    }
  })
  .get('/', (ctx, next) => {
    ctx.body = "this is test page!"
  })
  .post('/post', (ctx, next) => {
    ctx.body = ctx.request.body
  })
  .get('/indexPic', ctx => {
    ctx.body = [{
      "url": "http://www.ncuhome.cn/",
      "picurl": "http://common.ncuhome.cn/UploadFiles/Image/2015-12/20151226112028.jpg",
      "title": "元旦"
    }, {
      "url": "http://www.ncuhome.cn/",
      "picurl": "http://common.ncuhome.cn/UploadFiles/Image/2015-12/20151223040459.jpg",
      "title": "圣诞节"
    }, {
      "url": "http://y.ncuhome.cn/",
      "picurl": "http://common.ncuhome.cn/UploadFiles/Image/2015-12/20151208111618.jpg",
      "title": "入学教育考试"
    }, {
      "url": "http://people.ncuhome.cn/",
      "picurl": "http://common.ncuhome.cn/UploadFiles/Image/2015-11/20151127121639.jpg",
      "title": "人物4"
    }, {
      "url": "http://www.ncuhome.cn/",
      "picurl": "http://common.ncuhome.cn/UploadFiles/Image/2015-11/20151120091702.jpg",
      "title": "小雪"
    }]
  })
  .get('/indexNews', ctx => {
    ctx.body = [{
      "inforTime": "2016-01-15 阅读数 6",
      "inforName": "我校黄芽保同学喜获全国学生资助管理中心公开表彰",
      "pic": "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      "inforAdd": "家园网",
      "inforCon": "     我校黄芽保同学喜获全国学生资助管理中心公开表彰 巫瑞兰、郑胜水报道：近日，全国学生资助管理中心公布第二届“国家资助 助我飞翔”全国励志成长成才优秀学生名单，我校经济与管理学院黄芽保同学荣获此"
    }, {
      "inforTime": "2015-12-30 阅读数 2",
      "inforName": "拒绝“剩”宴 光盘在行动",
      "pic": "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      "inforAdd": "学生通讯社",
      "inforCon": " 学生通讯社 讯 记者 倪嘉卉 李文绘 曾霞 报道：古有诗云：“锄禾日当午，汗滴涸下土。谁知盘中餐，粒粒皆辛苦。” 12 月 21 日上午，由南昌大学校青志协主办的“光盘行动”在一食堂门前举行，旨在发"
    }, {
      "inforTime": "2015-12-30 阅读数 27",
      "inforName": "经管学院迎新晚会：金猴迎新春 经管展风采",
      "pic": "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      "inforAdd": "学生通讯社",
      "inforCon": " 学生通讯社 讯   记者 娄瑞晨、林雪纯 报道： 12 月29日晚，由经管学院团委主办，经管学院学生会承办的经济管理学院“高顿财经杯”班级文艺汇演暨 2016 年迎新年晚会 在我校音乐厅举行。校长助"
    }, {
      "inforTime": "2015-12-18 阅读数 22",
      "inforName": "2014-2015学年南昌大学优秀学生评选结果",
      "pic": "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      "inforAdd": "家园网",
      "inforCon": " 个  "
    }, {
      inforTime: "2015-12-08 阅读数 7",
      inforName: "宣贷款知识 明贷款流程",
      pic: "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      inforAdd: "家园网",
      inforCon: " 宣贷款知识 明贷款流程 记化学学院生源地信用助学贷款知识宣讲会顺利开展 （ 化学学院 讯 尹庆 龙娟 报道） 11月27日中午12点30分，化学学院生源地信用助学贷款知识宣讲会于建工楼A233教室如"
    }, {
      inforTime: "2015-12-06 阅读数 2",
      inforName: "生命科学学院诚信建档大会成功召开",
      pic: "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      inforAdd: "家园网",
      inforCon: " 为进一步加强和改进大学生思想政治教育与管理工作，按照省教育厅与学校相关文件要求落实加强大学生诚信教育，2015年11月30 日12时20分，生命科学学院在1栋学生干部之家进行了由校资助中心组织、由生"
    }, {
      inforTime: "2015-11-27 阅读数 8",
      inforName: "食品学院:一份贷款,一份承诺",
      pic: "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      inforAdd: "家园网",
      inforCon: " 11月19号晚，在一栋一楼党员活动室召开了食品学院2015年首次生源地信用助学贷款知识宣讲会，本次大会旨在为借贷生讲解贷款中的细则以及注意事项，传播诚信借贷理念。邓志辉老师出席并主持了本次大会。 大"
    }, {
      inforTime: "2015-11-26 阅读数 21",
      inforName: "药学院举办第十二届寝室文化艺术节之寝室内务比拼大赛",
      pic: "http://120.27.137.151:8585/static/ncuhome/image/school_infors_1.png",
      inforAdd: "家园网",
      inforCon: " （药学院团学联记者 尚雨）11月15日晚7点，药学院寝室文化艺术节之“搭建心灵家园，共创和谐公寓”寝室内务比拼大赛正式拉开序幕。本次大赛旨在提高学生的内务整理能力，营造整洁优雅的寝室文化氛围。"
    }]
  })

export default router
