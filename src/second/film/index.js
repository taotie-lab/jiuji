
import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import Recommend from '../../third/recommend'
import Free from '../../third/free'
import Filmtoone from '../../third/filmtoone'
import Saytofilm from '../../third/saytofilm'
import Wuli from '../../third/wuli'
const tabs = [
  { title: '推荐' ,path:'/home/film/recommend',Component:Recommend},
  { title: '限时购',path:'/home/film/free' ,Component:Free},
  { title: '拼团购',path:'/home/film/filmtoone',Component:Filmtoone },
  { title: '砍价购' ,path:'/home/film/saytofilm',Component:Saytofilm},
  { title: '旧机回收',path:'/home/film/wuli',Component:Wuli }
];
class Film extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    
    return (
      <div>
        <Tabs tabs={tabs}
          initialPage={0}
          onTabClick={(tab, index) => {this.props.history.push(tab.path)}}
        >
     {
       tabs.map((item,index)=>{
        let {Component} = item
         return(
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Component></Component>
          </div>
         )
       })
     }
    </Tabs>
    <WhiteSpace />
      </div>
    )
  }
  
}
export default Film




