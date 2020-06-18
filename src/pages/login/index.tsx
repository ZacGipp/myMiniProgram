import { ComponentType } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

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

  config: Config = {
    navigationBarTitleText: '登录',
    backgroundColor: '#000'
  };


  render () {

    return (
      <View className='content'>
        <Text>12</Text>
      </View>
    )
  }
}

export default Index as ComponentType
