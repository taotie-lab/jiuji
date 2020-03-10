import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import  './index.css'
import Action from '../../third/news/action'
import Message from '../../third/news/message'
import Headline from '../../third/news/headline'
import Service from '../../third/news/service'
const tabs = [
  { title: <Badge >消息通知</Badge>,path:'/home/news/message' },
  { title: <Badge >九机活动</Badge>,path:'/home/news/action' },
  { title: <Badge >九机头条</Badge>,path:'/home/news/headline' },
  { title: <Badge >九机客服</Badge>,path:'/home/news/service' },
];
class News extends React.Component{
render(){
  return(
    <div>
      <Tabs tabs={tabs}
      initialPage={0}
      onTabClick={(tab, index) => {this.props.history.push(tab.path)}}
    >
      
      <div className='style'>
      <Message></Message>
      </div>
      <div className='style'>
      <Action></Action>
      </div>
      <div className='style'>
      <Headline></Headline>
      </div>
      <div className='style'>
      <Service></Service>
      </div>
    </Tabs>
    <WhiteSpace />
    </div>
  )
}
 
}
export default News


 