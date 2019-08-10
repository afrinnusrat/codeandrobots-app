import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Player/Screen'

const config = {
  name: 'Robot',
  connection: { type: 'bluetooth' },
  features: {
    drive: true,
    beep: true
  },
  params: [
    {
      title: 'Speed',
      values: ['Slow', 'Normal', 'Fast'],
      defaultIndex: 1
    }
  ],
  skills: [
    {title: 'Jump'},
    {title: 'Shuffle'},
    {title: 'Bow'},
    {title: 'Spin'},
    {title: 'Dance'},
    {title: 'Moonwalk'},
    {title: 'Chill'}
  ]
}

describe('Player', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        config={config}
        message='Use joystick to drive'
        showNotConnectedModal={false}
        onDraggableMove={(touch) => {}}
        onDraggableRelease={(touch) => {}}
        onDraggableStart={() => {}}
        onSliderPress={() => {}}
        onSkillPress={() => {}}
        onHideNotConnectedModal={(touch) => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})