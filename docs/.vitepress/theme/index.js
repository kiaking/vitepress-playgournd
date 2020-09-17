import DefaultTheme from 'vitepress/dist/client/theme-default'
// import Helloworld from '../components/index'

console.log('HI')

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.use(Helloworld)
  }
}
