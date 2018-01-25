import React from 'react'
import {
  Avatar,
  FloatingMenu,
  Option,
  Options
} from "./StyledComponents"
import {
  ME_CONTENT_TYPE,
  SKILLS_CONTENT_TYPE,
  CONTACT_CONTENT_TYPE,
  PURPLE_COLOR,
  BLUE_COLOR,
  GREEN_COLOR,
} from "../lib/constants";

class FloatingButton extends React.Component {
  state = {
    menuIsOpen: false
  }

  AVATAR_URL = "http://ic.stefanbahnson.se/overlay/me.jpg"

  render() {
    const { onSelect } = this.props
    const { menuIsOpen } = this.state

    return (
      <div>
        <FloatingMenu>
          <Options>
            <Option pos={!menuIsOpen && 200}
                    color={GREEN_COLOR}
                    onClick={() => onSelect(CONTACT_CONTENT_TYPE)}>
              <h3>{CONTACT_CONTENT_TYPE}</h3>
            </Option>

            <Option pos={!menuIsOpen && 300}
                    color={BLUE_COLOR}
                    onClick={() => onSelect(SKILLS_CONTENT_TYPE)}>
              <h3>{SKILLS_CONTENT_TYPE}</h3>
            </Option>

            <Option pos={!menuIsOpen && 400}
                    color={PURPLE_COLOR}
                    onClick={() => onSelect(ME_CONTENT_TYPE)}>
              <h3>{ME_CONTENT_TYPE}</h3>
            </Option>
          </Options>

          <div style={{ position: 'relative', cursor: 'pointer' }}
               onClick={() => this.setState({ menuIsOpen: !menuIsOpen })}>
            <Avatar src={this.AVATAR_URL} alt="user's avatar"/>
          </div>
        </FloatingMenu>
      </div>
    )
  }
}

export default FloatingButton