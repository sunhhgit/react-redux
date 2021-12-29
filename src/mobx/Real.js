import React, { Component } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

// 创建 state
// eslint-disable-next-line no-unused-vars
class State {
  constructor() {
    makeAutoObservable(this); // 这是 mobx 6.x 的方式，可以代替下面的所有声明：
    // this.value = observable.box(0);
    // this.data = observable({});
  }
  value = 0
  onChange = () => {
    this.value++;
  }
}

class Mobx extends Component {
  // eslint-disable-next-line no-undef
  state = state // 注入 state
  render() {
    return (
      <>
        <button onClick={this.state.onChange}>改变 data{this.state.value}</button>
        <Mobx2 />
      </>
    );
  }
}

export default observer(Mobx); // state 同步
