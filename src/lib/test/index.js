import ETest from './src/test'

ETest.install = function (Vue) {
  Vue.component(ETest.name, ETest)
}

export default ETest
