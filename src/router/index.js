import React from 'react'
import Loadable from 'react-loadable'
var Home = Loadable ({ // 异步加载组件
  loader:()=>import('../App.js'),
  loading:()=><div>loading.....</div>
})
var NotFound = Loadable ({ 
  loader:()=>import('../first/notfound'),
  loading:()=><div>loading.....</div>
})
var Login = Loadable ({ 
  loader:()=>import('../first/login'),
  loading:()=><div>loading.....</div>
})


// 二级路由
var Buy = Loadable ({ 
  loader:()=>import('../second/buy'),
  loading:()=><div>loading.....</div>
})
var My = Loadable ({ 
  loader:()=>import('../second/my'),
  loading:()=><div>loading.....</div>
})
var Film = Loadable ({ 
  loader:()=>import('../second/film'),
  loading:()=><div>loading.....</div>
})
var News = Loadable ({ 
  loader:()=>import('../second/news'),
  loading:()=><div>loading.....</div>
})
var Classify = Loadable ({ 
  loader:()=>import('../second/classify'),
  loading:()=><div>loading.....</div>
})


// 三级路由
var Recommend = Loadable ({ 
  loader:()=>import('../third/recommend'),
  loading:()=><div>loading.....</div>
})
var Free = Loadable ({ 
  loader:()=>import('../third/free'),
  loading:()=><div>loading.....</div>
})
var Filmtoone = Loadable ({ 
  loader:()=>import('../third/filmtoone'),
  loading:()=><div>loading.....</div>
})
var Saytofilm = Loadable ({ 
  loader:()=>import('../third/saytofilm'),
  loading:()=><div>loading.....</div>
})
var Wuli = Loadable ({ 
  loader:()=>import('../third/wuli'),
  loading:()=><div>loading.....</div>
})

// 分类
var One = Loadable ({ 
  loader:()=>import('../third/phone/one'),
  loading:()=><div>loading.....</div>
})
var Two = Loadable ({ 
  loader:()=>import('../third/phone/two'),
  loading:()=><div>loading.....</div>
})

// 消息
var Message = Loadable ({ 
  loader:()=>import('../third/news/message'),
  loading:()=><div>loading.....</div>
})
var Action = Loadable ({ 
  loader:()=>import('../third/news/action'),
  loading:()=><div>loading.....</div>
})
var Headline = Loadable ({ 
  loader:()=>import('../third/news/headline'),
  loading:()=><div>loading.....</div>
})
var Service = Loadable ({ 
  loader:()=>import('../third/news/service'),
  loading:()=><div>loading.....</div>
})

export const routes =[ //一级路由
  {
    path:'/home',
    component:Home
  },
  {
    path:'/404',
    component:NotFound
  },
  {
    path:'/login',
    component:Login
  }
]

export const second=[ //二级路由
  {
    path:'/home/buy',
    component:Buy
  },
  {
    path:'/home/my',
    component:My 
  },
  {
    path:'/home/film',
    component:Film 
  },
  {
    path:'/home/news',
    component:News 
  },
  {
    path:'/home/classify',
    component:Classify 
  }                                            
]

export const third=[ //三级路由
  {
    path:'/home/film/recommend',
    component:Recommend
  },
  {
    path:'/home/film/free',
    component:Free
  },
  {
    path:'/home/film/filmtoone',
    component:Filmtoone
  },
  {
    path:'/home/film/saytofilm',
    component:Saytofilm
  },
  {
    path:'/home/film/wuli',
    component:Wuli
  }
]

export const phone =[ //分类
  {
    path:'/home/classify/one',
    component:One
  },
  {
    path:'/home/classify/two',
    component:Two
  }
]

export const news =[ //消息
  {
    path:'/home/news/message',
    component:Message
  },
  {
    path:'/home/news/action',
    component:Action
  },
  {
    path:'/home/news/headline',
    component:Headline
  },
  {
    path:'/home/news/service',
    component:Service
  }
]