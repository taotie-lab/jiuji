import React from 'react'
import './index.css'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {img1,img2,img3,img4,img5,img6,img7,img8} from '../../img/importimg/two'
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab'
    };
  }
  go=(p)=>{
    this.props.history.push(p)
  }
  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', bottom: 0 } }>
      
        <TabBar  
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item 
            icon={
              <div onClick={this.go.bind(this,'/home/film')}>
              <img className='imgss' src={img3} alt=""/>
              </div>
            }
            selectedIcon={
              <div onClick={this.go.bind(this,'/home/film')}>
              <img className='imgss' src={img7} alt=""/>
              </div>
            }
            title="首页"
            key="/home/film"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div onClick={this.go.bind(this,"/home/classify")}>
               <img className='imgss' src={img1} alt=""/>
              </div>
            }
            selectedIcon={
              <div onClick={this.go.bind(this,"/home/classify")} >
               <img className='imgss' src={img5} alt=""/>
              </div>
            }
            title="分类"
            key="/home/classify"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div  onClick={this.go.bind(this,"/home/news")}>
               <img className='imgss' src={img2} alt=""/>
              </div>
            }
            selectedIcon={
              <div onClick={this.go.bind(this,"/home/news")} >
              <img className='imgss' src={img8} alt=""/>
              </div>
            }
            title="消息"
            key="/home/news"
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div  onClick={this.go.bind(this,"/home/buy")}>
               <img className='imgss' src={img4} alt=""/>
              </div>
            }
            selectedIcon={
              <div onClick={this.go.bind(this,"/home/buy")} >
              <img className='imgss' src={img6} alt=""/>
              </div>
            }
            title="购物车"
            key="/home/buy"
            selected={this.state.selectedTab === 'blackTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blackTab',
              });
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className='admin-icon icon5' onClick={this.go.bind(this,"/home/my")}/>}
            selectedIcon={<div className='admin-icon icon6' onClick={this.go.bind(this,"/home/my")}/>}
            title="我的"
            key="/home/my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
           {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Admin)