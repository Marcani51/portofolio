import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { SSvg } from '../s-svg'

describe('SSvg', () => {
  it('renders properly', () => {
    const wrapper = mount(SSvg, { props: { name: 'Hello Vitest yaa' } })
    expect(wrapper.text()).toContain('Hello Vitest yaa')
  })
})
