// vendor
import React from 'react'

// components
import FloatingButton from "./FloatingButton";
import ContentBoxContainer from "./ContentBoxContainer";
import BodyTextMe from './BodyTextMe';
import BodyTextSkills from './BodyTextSkills';
import BodyTextContact from './BodyTextContact';
import RenderIf from "./RenderIf";
import {
  ME_CONTENT_TYPE,
  SKILLS_CONTENT_TYPE,
  CONTACT_CONTENT_TYPE,
  PURPLE_COLOR,
  BLUE_COLOR,
  GREEN_COLOR,
} from "../lib/constants";



class Overlay extends React.Component {
  state = {
    contentType: '',
  }

  render() {
    const { contentType } = this.state

    return (
      <div>
        <RenderIf condition={contentType === ME_CONTENT_TYPE}>
          <ContentBoxContainer color={PURPLE_COLOR} onCloseClick={this.closeContentBox}>
            <BodyTextMe/>
          </ContentBoxContainer>
        </RenderIf>

        <RenderIf condition={contentType === SKILLS_CONTENT_TYPE}>
          <ContentBoxContainer color={BLUE_COLOR} onCloseClick={this.closeContentBox}>
            <BodyTextSkills/>
          </ContentBoxContainer>
        </RenderIf>

        <RenderIf condition={contentType === CONTACT_CONTENT_TYPE}>
          <ContentBoxContainer color={GREEN_COLOR} onCloseClick={this.closeContentBox}>
            <BodyTextContact/>
          </ContentBoxContainer>
        </RenderIf>

        <FloatingButton onSelect={contentType => this.setState({ contentType })}/>
      </div>
    )
  }

  closeContentBox = () => this.setState({ contentType: '' })
}

export default Overlay

