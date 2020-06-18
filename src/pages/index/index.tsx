import { ComponentType } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'

import './index.scss'
import BasePage from "../../component/common/BasePage";

type PageStateProps = {
  counterStore: {
    counter: number
    increment: Function
    decrement: Function
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps
}

@inject('counterStore')
@observer
class Index extends BasePage {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    // wx.login({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    wx.request({
      url: '',
    })
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props

    return (
      <View className='index'>
        <AtButton type='primary' onClick={this.increment}>+</AtButton>
        <AtButton type='primary' onClick={this.decrement}>-</AtButton>
        <AtButton type='primary' onClick={this.incrementAsync}>Add Async</AtButton>
        <Text>{counter}</Text>
        <AtButton type='primary' onClick={() => this.redirectTo('/pages/login/index')}>去登陆</AtButton>
      </View>
    )
  }
}

export default Index as ComponentType
