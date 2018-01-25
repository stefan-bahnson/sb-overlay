import React from 'react'

import { CloseButton, ContentBox } from "./StyledComponents"

const ContentBoxContainer = ({ color = '#fff', children, onCloseClick }) => (
  <ContentBox color={color}>
    <CloseButton onClick={onCloseClick} color={color}>X</CloseButton>
    {children}
  </ContentBox>
)

export default ContentBoxContainer