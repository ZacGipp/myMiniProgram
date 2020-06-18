import { observable } from 'mobx'

export default class UserStore {
  @observable
  counter = 0;

  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}
