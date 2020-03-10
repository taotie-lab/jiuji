import img1 from '../../img/消息通知.png'
import img2 from '../../img/九机活动.png'
import img3 from '../../img/九机头条.png'
import img4 from '../../img/九机客服.png'
import Action from '../../third/news/action'
import Message from '../../third/news/message'
import Headline from '../../third/news/headline'
import Service from '../../third/news/service'
let list =[
  {img:img1,txt:'消息通知',path:'/home/news/message',Component:Message},
  {img:img2,txt:'九机活动',path:'/home/news/action',Component:Action},
  {img:img3,txt:'九机头条',path:'/home/news/headline',Component:Headline},
  {img:img4,txt:'九机客服',path:'/home/news/service',Component:Service}
]
export {list}
