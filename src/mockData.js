import Mock from 'mockjs'
const projectList = Mock.mock({
  'list|16': [{
      'type|1-3':[{
         'type': {'title':'@cword(2,4)', "to": {'name':'default'} ,'id|+1': 1},
         'detial|1-6': [{'title':'@cword(2,4)','to':{'name':'default'}, 'id|+1': 100}]
      }]
  }]
})

const productList = {
  'product|10-20': [{
    'img': '@dataImage("370x208", "Hello Mock.js!")',
    'title': '@cword(3,5)',
    'score': '@integer( 0, 5 )',
    'commentNum': '@integer( 0, 10000 )',
    'tab|3-5': ['@cword(2,4)'],
    'address': '@county(true)',
    'avg_price':'@integer( 100, 200 )',
    'items|3-5':[{
      'title': '@cword(2,4)',
      'price': '@integer( 100, 300 )',
      'counterPrice': '@integer( 200, 300 )',
      'saleNum': '@integer( 800, 10000 )'
    }]
  }]
}

const cityGroup = {
  'A|20-30':["@city"],
  'B|20-30':["@city"],
  'C|20-30':["@city"],
  'D|20-30':["@city"],
  'E|20-30':["@city"],
  'F|20-30':["@city"],
  'G|20-30':["@city"],
  'H|20-30':["@city"],
  'I|20-30':["@city"],
  'J|20-30':["@city"],
  'K|20-30':["@city"],
  'L|20-30':["@city"],
  'M|20-30':["@city"],
  'N|20-30':["@city"],
  'O|20-30':["@city"],
  'P|20-30':["@city"],
  'Q|20-30':["@city"],
  'R|20-30':["@city"],
  'S|20-30':["@city"],
  'T|20-30':["@city"],
  'U|20-30':["@city"],
  'V|20-30':["@city"],
  'W|20-30':["@city"],
  'X|20-30':["@city"],
  'Y|20-30':["@city"],
  'Z|20-30':["@city"],
}

const hotCitys = {
  'hotCitys|7':["@city"]
}
const recentCitys = {
  'recentCitys|3-6': ["@city"]
}

const proviceList = {
   'provices|34': [{
      'provice': "@province",
      'city|30-40' : ["@city"]
   }]
}

const restByKey = Mock.mock({
  'all|12':[{
    'img': '@dataImage("370x208", "Hello Mock.js!")',
    'title': '@cword(5,15)',
    'subTitle': '@cword(3,6)',
    'price|150-2000': 160,
    'address': '@county'
  }],
  'food|12':[{
    'img': '@dataImage("370x208", "Hello Mock.js!")',
    'title': '@cword(5,15)',
    'subTitle': '@cword(3,6)',
    'price|150-2000': 160,
    'address': '@county'
  }],
  'spa|12':[{
    'img': '@dataImage("370x208", "Hello Mock.js!")',
    'title': '@cword(5,15)',
    'subTitle': '@cword(3,6)',
    'price|150-2000': 160,
    'address': '@county'
  }],
  'movie|12':[{
    'img': '@dataImage("370x208", "Hello Mock.js!")',
    'title': '@cword(5,15)',
    'subTitle': '@cword(3,6)',
    'price|150-2000': 160,
    'address': '@county'
  }],
  'travel|12':[{
    'img': '@dataImage("370x208", "Hello Mock.js!")',
    'title': '@cword(5,15)',
    'subTitle': '@cword(3,6)',
    'price|150-2000': 160,
    'address': '@county'
  }],
  'rest|12':[{
    'img': '@dataImage("370x208", "Hello Mock.js!")',
    'title': '@cword(5,15)',
    'subTitle': '@cword(3,6)',
    'price|150-2000': 160,
    'address': '@county'
  }]
});
export default [
  {
    url: 'http://api.llshi.com/api/index/menulist',
    type: 'get',
    response: (res) => {
      // let _fileter_list = [];
      // if (res.body.key) {
      //   let _fileter_list = projectList.fileter(i => i.name == res.body.key)
      // }
      // 没错，你应该已经猜到了，res.body就是我们传入到接口的数据，我们可以在这里做些逻辑操作
      // res包含完整的请求头信息
      return {
        code: 200,
        message: "操作成功",
        data: projectList
      }     
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/restByKey',
    type: 'get',
    response: (res) => {
      return {
        code: 200,
        message: "操作成功",
        data: restByKey
      }     
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/register',
    type: 'put',
    response: (res) => {
      return {
        status: 'success',
        code: 200,
        message: "操作成功",
        data: 'success'
      }     
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/login',
    type: 'get',
    response: (res) => {
      const {userName, password} = res.query;
      const flag = userName==='llshi' && password ==='lgzs12345';
      const success = {
        status: 'success',
        code: 200,
        message: "操作成功",
        data: 'success'
      }  
      const error = {
        status: 'error',
        code: 200,
        message: '账号或密码不正确，请重新输入',
        data: 'error'
      }   
      return flag ? success : error;
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/citys',
    type: 'get',
    response: (res) => {
      return {
        status: 'success',
        code: 200,
        message: "操作成功",
        data: proviceList
      }     
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/hotCitys',
    type: 'get',
    response: (res) => {
      return {
        status: 'success',
        code: 200,
        message: "操作成功",
        data: hotCitys
      }     
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/recentCitys',
    type: 'get',
    response: (res) => {
      return {
        status: 'success',
        code: 200,
        message: "操作成功",
        data: recentCitys
      }     
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/cityGroup',
    type: 'get',
    response: (res) => {
      return {
        status: 'success',
        code: 200,
        message: "操作成功",
        data: cityGroup
      }     
      // 使用return返回前端需要的数据
    }
  },
  {
    url: 'http://api.llshi.com/api/index/productList',
    type: 'get',
    response: (res) => {
      return {
        status: 'success',
        code: 200,
        message: "操作成功",
        data: productList
      }     
      // 使用return返回前端需要的数据
    }
  }
]
