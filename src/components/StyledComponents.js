import { fadeInUp } from './styled.animations';
import styled from 'styled-components'

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  background-color: "#eee";
  border-radius: 50%;
  cursor: cursor;
  box-shadow: 2px 2px 6px rgba(0, 0, 0 , 0.4);
`

export const FloatingMenu = styled.div`
  position: fixed;
  bottom: 60px;
  left: 60px;
  font-family: Arial, sans-serif;
  `

export const Options = styled.div`
  overflow: hidden;
  position: relative;
  bottom: -40px;
  padding-bottom: 52px;
`

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.pos ? 0 : 80}px;
  height: ${props => props.pos ? 0 : 80}px;
  padding: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  text-align: center;
  margin: 8px auto 0 auto;
  color: #f7f7f7;
  cursor: pointer;
  transform: translateY(${props => props.pos ? props.pos : 0}px);
  transition: all 300ms ease-in-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0 , 0.4);
  &:active {
    transform: scale(0.5);
  }
  &:hover {
    color: white;
  }
`

export const ContentBox = styled.div`
  position: fixed;
  left: 50%;
  width: 400px;
  transform: translateX(-200px);
  background-color: ${props => props.color};
  color: #fff;
  padding: 32px;
  line-height: 1.6;
  font-family: Arial, sans-serif;
  box-shadow: 2px 2px 6px rgba(0, 0, 0 , 0.4);
  animation: ${fadeInUp} 0.6s;
  letter-spacing: 1px;
  `

export const CloseButton = styled.div`
  position: absolute; 
  top: -12px; 
  right: -12px;
  display: inline-block;
  text-align: center;
  padding: 6px 13px;
  color: ${props => props.color};
  font-weight: 900;
  border-radius: 50%;
  border: 4px solid ${props => props.color};
  background-color: white;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: ${props => props.color};
    color: white;
  }
`

export const Text = styled.p`
  color: whitesmoke;
`

export const Link = styled.a`
  text-decoration: none;
  color: #73efa7;
`