import React from 'react';
import styled, { css } from 'styled-components';
import ForwardIcon from '../../Icons/Forward';
import { WHITE, NAVY, GRAY, GREEN } from '../../../colors';

export type ProduceLinkProps = {
  /** URL */
  href: string;
  /** 両側にかける余白 */
  margin?: string;
  /** 使用可否 */
  disabled?: boolean;
  /** 報告済みであるか否か */
  reported?: boolean;
  /** 卸が了解を押したか否か */
  readed?: boolean;
  /** 卸からメッセージがきてるか否か */
  message?: boolean;
  /** カスタムスタイル */
  styles?: React.CSSProperties;
  /** リンクのテキスト */
  children?: React.ReactNode;
};

const getNavMessage = (reported?: boolean, message?: boolean) => {
  if (message) return '確認';
  if (reported) return '変更';
  return null;
};

function ProduceLink({
  href,
  margin = '0px',
  disabled = false,
  reported = false,
  readed = false,
  message = false,
  styles,
  children,
}: ProduceLinkProps) {
  const navMessage = getNavMessage(reported, message);

  return (
    <Anchor href={disabled ? undefined : href} disabled={disabled} margin={margin} style={styles}>
      <Container reported={reported}>
        {reported && <Reported>済</Reported>}
        <div>
          <ProduceName reported={reported}>{children}</ProduceName>
          {readed && <Readed>既読</Readed>}
        </div>
      </Container>
      <Container>
        {navMessage && <NavMessage>{navMessage}</NavMessage>}
        <ForwardIcon disabled={disabled} />
      </Container>
    </Anchor>
  );
}

const Anchor = styled.a<{ disabled: boolean; margin: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ margin }) => `calc(100% - ${margin})`};
  min-height: 72px;
  padding: 0px 30px 0px 30px;
  margin: 5px 0;
  background-color: ${WHITE};
  color: ${({ disabled }) => (disabled ? GRAY.hover : NAVY.default)};
  border-radius: 36px;
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;
const Container = styled.div<{ reported?: boolean }>`
  display: inline-flex;
  align-items: center;

  ${({ reported }) =>
    reported &&
    css`
      margin-left: -12px;
    `}
`;
const Reported = styled.div`
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${GREEN.default};
  line-height: 36px;
  text-align: center;
  font-weight: bold;
  color: ${WHITE};
`;
const Readed = styled.div`
  color: ${GRAY.press};
  font-size: 14px;
`;
const NavMessage = styled.div`
  margin-right: 10px;
  font-size: 14px;
  white-space: nowrap;
`;
const ProduceName = styled.div<{ reported: boolean }>`
  max-width: ${({ reported }) => (reported ? 150 : 200)}px;
  letter-spacing: 1.6px;
`;
Anchor.displayName = 'Anchor';
Container.displayName = 'Container';
Reported.displayName = 'Reported';
Readed.displayName = 'Readed';
NavMessage.displayName = 'NavMessage';
ProduceName.displayName = 'ProduceName';

export default ProduceLink;
