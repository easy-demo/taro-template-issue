import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

const obj_normal = {
  text: '普通属性',
  action: () => {
    return '调用普通函数方法';
  },
};

const obj_define_property = {};

Object.defineProperty(obj_define_property, 'text', {
  value: 'defineProperty属性',
});

Object.defineProperty(obj_define_property, 'action', {
  get: () => {
    return () => {
      return '调用defineProperty函数方法';
    };
  },
});

const obj_proxy = new Proxy({}, {
  get: (target, property) => {
    if (target[property]) {
      return target[property];
    }

    if (property === 'text') {
      return 'Proxy属性';
    }

    if (property === 'action') {
      return () => {
        return '调用Proxy函数方法';
      };
    }

    return;
  },
});



export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>1、{obj_normal.text}</Text>
        <Text>2、{obj_normal.action()}</Text>
        <Text>3、{obj_define_property.text}</Text>
        <Text>4、{obj_define_property.action()}</Text>
        <Text>5、{obj_proxy.text}</Text>
        <Text>6、{obj_proxy.action()}</Text>
      </View>
    )
  }
}
