import { mount } from '@vue/test-utils'
import ErrorView from '@/views/ErrorView.vue'


describe('Mounted ErrorView', () => {
  const wrapper = mount(ErrorView);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.text()).toContain('Your age is over our accepted limit')
  })

  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
