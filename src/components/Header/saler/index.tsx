import React from 'react';
import styled from 'styled-components';
import IconButton from '../../Button/shared/IconButton';
import { NAVY, GRAY } from '../../../colors';
import Fonts from '../../../fonts';
import { Event } from '../../../@types/EventEmitter.d';
import VegitableIcon from '../../Icons/Vegitable';
import InformationIcon from '../../Icons/Information';
import SettingIcon from '../../Icons/Setting';
import LogoutIcon from '../../Icons/Logout';
import FudoloopLogo from '../../Icons/Logo';

export type HeaderProps = {
  admin?: boolean;
  saler?: string;
  user?: string;
  onVegitable?: (e: Event['click']) => void;
  onInformation?: (e: Event['click']) => void;
  onSetting?: (e: Event['click']) => void;
  onLogout?: (e: Event['click']) => void;
};

function Header({
  admin,
  saler,
  user,
  onVegitable,
  onInformation,
  onSetting,
  onLogout,
}: HeaderProps) {
  const color = admin ? 'blue' : 'green';
  return (
    <Container>
      <Wrapper>
        <Logo>
          <FudoloopLogo />
        </Logo>
        <Grow />
        <Information>
          <span>{saler}</span>
          <User>{user}さん</User>
        </Information>
        <Grow />
        <Navigation>
          <IconButton color={color} onClick={onVegitable}>
            <VegitableIcon />
            入荷予定量
          </IconButton>
          <IconButton color={color} onClick={onInformation}>
            <InformationIcon />
            利用状況
          </IconButton>
          <IconButton color={color} onClick={onSetting}>
            <SettingIcon />
            設定
          </IconButton>
          <IconButton color={color} onClick={onLogout}>
            <LogoutIcon />
            ログアウト
          </IconButton>
        </Navigation>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: auto;
  right: 0;
  z-index: 1000;
  background-color: ${NAVY.dark};
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 80px;
  padding-left: 22px;
  padding-right: 38px;
  color: ${GRAY.hover};
  align-items: center;
`;
const Grow = styled.div`
  flex: 1 1 auto;
`;
const Information = styled.div`
  ${Fonts['500']};
  font-size: 0.875rem;
  letter-spacing: -0.35px;
  padding-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const User = styled.span`
  margin-left: 20px;
`;
const Logo = styled.div`
  display: inline-block;
`;
const Navigation = styled.div`
  display: inline-flex;
`;

export default Header;
