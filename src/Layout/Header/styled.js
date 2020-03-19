import styled from 'styled-components';

const flexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 5px 5px lightgray;

  @media screen and (max-width: 770px) {
    height: 60px;
  }
  
  position: absolute;
  transform: ${({ vis }) => vis ? 'translateY(0)' : 'translateY(-80px)'};
  transition: transform 0.3s;
`;

const Content = styled.div`
  width: calc(100% - 90px);
  max-width: 1920px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 770px) {
    width: 95%;

    img {
      display: none;
    }
  }
`;

const Title = styled.div`
  font-size: 36px;
  color: gray;
  font-weight: 500;
  padding-left: 10px;

  b {
    font-weight: 600;
    color: dodgerblue;
  }

  @media screen and (max-width: 770px) {
    font-size: 18px;
    padding: 0;
  }
`;

const OptionsWrapper = styled(flexCenter)`
  position: relative;
  z-index: 10;

  @media screen and (max-width: 770px) {
    position: absolute;
    top: 75px;
    right: 0;
    transform: ${({ vis }) => vis ? 'translateY(0)' : 'translateY(-80px)'};
    transition: transform 0.3s;
  }
`;

const OptionsButton = styled(flexCenter)`
  cursor: pointer;
  outline: none;
  font-weight: 500;
  transition: color 0.3s;
  user-select: none;
  font-size: 18px;
  color: ${props => props.open ? 'dodgerblue' : 'gray'};

  i {
    font-size: 32px;
    transform: ${props => props.open ? 'rotate(180deg)' : 'none'};
    transition: transform 0.5s;
  }

  &:hover {
    color: dodgerblue;
  }
`;

const OptionsContent = styled(flexCenter)`
  position: absolute;
  width: 200px;
  background-color: white;
  border-radius: 10px;
  top: 70px;
  right: 0;
  height: 100px;
  overflow: hidden; 
  flex-direction: column;
  box-shadow: 1px 3px 5px 1px lightgray;
  transform-origin: top;
  transform: ${props => props.open ? 'scale(1,1)' : 'scale(1,0)'};
  transition: transform 0.3s;

  @media screen and (max-width: 770px) {
    top: 40px;
    right: 5px;
  }
`;

const Option = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s, border-bottom-color 0.5s;
  color: gray;
  z-index: 50;

  i {
    font-size: 18px;
  }

  &:first-child {
    border-bottom: 1px solid lightgray;
  }

  &:hover {
    color: dodgerblue;
  }
`;

export {
  Wrapper,
  Content,
  Title,
  OptionsWrapper,
  OptionsButton,
  OptionsContent,
  Option
}