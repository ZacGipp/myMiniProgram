import Taro, { Component, Config } from '@tarojs/taro'

class BasePage extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '金麦客商户通'
  }

  componentWillMount () {}

  componentWillReact () {}

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  linkTo (path: string, params: object = {}) {
    let url = path;
    Object.keys(params).map((key, idx) => {
      if (idx === 0) url += `?${key}=${params[key]}`
      else url += `&${key}=${params[key]}`
    })
    Taro.navigateTo({url});
  }

  redirectTo (path: string, params: object = {}) {
    let url = path;
    Object.keys(params).map((key, idx) => {
      if (idx === 0) url += `?${key}=${params[key]}`
      else url += `&${key}=${params[key]}`
    })
    Taro.redirectTo({url});
  }

}

export default BasePage
