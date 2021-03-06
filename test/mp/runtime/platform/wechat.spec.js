import {
  resetVue,
  createPage,
  setMPPlatform,
  resetMPPlatform
} from '../../helpers'

describe('wechat', () => {
  it('should get platform from $mp', () => {
    resetVue()
    setMPPlatform('wechat')

    const pageOptions = {
      template: `<div></div>`,
      mpType: 'page'
    }

    const { vm } = createPage(pageOptions)

    expect(vm.$mp.platform).toBe('wechat')

    resetMPPlatform()
  })

  it('should not set obj convery flag in wechat', () => {
    resetVue()
    setMPPlatform('wechat')

    const pageOptions = {
      template: `<div>
        <div v-for="item in list">{{item}}</div>
      </div>`,
      mpType: 'page',
      data: {
        list: [1, 2, 3]
      }
    }

    const { vm } = createPage(pageOptions)

    expect(vm.$mp.platform).toBe('wechat')
    expect(vm.$mp.page.data.$root[0].h._obj).toBeUndefined();

    resetMPPlatform()
  })
})
