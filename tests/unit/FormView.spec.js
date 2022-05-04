import { mount, createLocalVue, shallowMount, config } from '@vue/test-utils'
import Vuex from 'vuex';
import FormView from '@/views/FormView.vue'
import FormStep3 from '@/components/FormStep3.vue'

describe('FormView', () => {
  it('has data', () => {
    expect(typeof FormView.data).toBe('function')
  })
})

describe('Mounted FormView', () => {
  const wrapper = mount(FormView);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the correct markup of step 1', () => {
    expect(wrapper.text()).toContain('Hello There!')
  })
  
  it('renders correctly with different data for step 2', async () => {
    wrapper.setData({ step: 2})
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Tell us about yourself')
  })
})

describe('FormView step 1 flow', () => {
  const wrapper = mount(FormView);
  
  it('has a start button', () => {
    expect(wrapper.find('#startReg').exists()).toBe(true)
  })

  it('button click to get step two', async () => {
    const button = wrapper.find('#startReg')
    button.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.step).toBe(2)
    expect(wrapper.text()).toContain('Tell us about yourself')
  })
  
})

describe('FormView step 2 flow', () => {
  const wrapper = mount(FormView);
  
  it('Add data In step two and verifies result', async () => {
    const button = wrapper.find('#startReg')
    button.trigger('click')
    await wrapper.vm.$nextTick()
    const nameInput = wrapper.find('#name')
    await nameInput.setValue('testUser')
    const ageInput = wrapper.find('#age')
    await ageInput.setValue(50)

    expect(wrapper.text()).toContain('500HKD')
  })



})

describe('FormView step 3 flow', () => {

const localVue = createLocalVue();
localVue.use(Vuex);

const userFormMock = jest.fn();
userFormMock.mockReturnValue({
  name: 'testName',
  age: 50,
  country: {
    countryName: 'testCountry',
    currencyCode: 'HKD'
  },
  package: {
    text: 'testPackage'
  }
});

const totalPremiumMock = jest.fn();
totalPremiumMock.mockReturnValue(500);
const store = new Vuex.Store({
  getters: {
    userForm: userFormMock,
    totalPremium: totalPremiumMock
  },
});
const wrapper = shallowMount(FormStep3, {
  localVue,
  store,
});

  it('verifies step three result', async () => {
    expect(wrapper.text()).toContain('Summary')
    expect(wrapper.text()).toContain('testName')
    expect(wrapper.text()).toContain('testCountry')
    expect(wrapper.text()).toContain('testPackage')
    expect(wrapper.text()).toContain('500HKD')
  })

})

