import React from 'react';
import styled, { css } from 'styled-components';

const REACT_CSS = 'React.CSSProperties';
const REACT_NODE = 'React.ReactNode';
const F_COLOR = `'green'\n|  'blue'\n|  'yellow'\n|  'gray'`;

const isReject = name => {
  if (!name) return true;
  switch (name) {
    case 'Container': {
      return true;
    }
    case 'Margin': {
      return true;
    }
    case 'Vertical': {
      return true;
    }
    case 'Center': {
      return true;
    }
    case 'Column': {
      return true;
    }
    case 'Unknown': {
      return true;
    }
    default: {
      return false;
    }
  }
};

const getPropType = propType => {
  return propType === 'any' ? false : propType;
};

const createPropTypes = (propName, propType) => {
  const type = getPropType(propType);
  switch (propName) {
    case 'styles': {
      return type || REACT_CSS;
    }
    case 'style': {
      return type || REACT_CSS;
    }
    case 'children': {
      return type || REACT_NODE;
    }
    case 'color': {
      return type === 'Color' ? F_COLOR : type;
    }
    case 'title': {
      return type || REACT_NODE;
    }
    case 'description': {
      return type || REACT_NODE;
    }
    default: {
      return type || 'any';
    }
  }
};

const createDefaultValue = value => {
  const types = typeof value;
  switch (types) {
    case 'undefined': {
      return '';
    }
    case 'boolean': {
      return String(value);
    }
    case 'string': {
      return value === '' ? `''` : `'${value}'`;
    }
  }
};

const TableComponent = ({ propDefinitions, type }) => {
  if (isReject(type.displayName)) return null;

  return (
    <Table>
      <THead>
        <Tr>
          <Th>prop名</Th>
          <Th>型</Th>
          <Th>デフォルト値</Th>
          <Th last>説明</Th>
        </Tr>
      </THead>
      <TBody>
        {propDefinitions.map(
          ({
            property = '',
            propType = { name: '' },
            required = false,
            description = '',
            defaultValue,
          }) => (
            <Tr key={property} required={required}>
              <Td>
                <PropName required={required}>{property}</PropName>
              </Td>
              <Td align="left" pre={propType.name === 'Color'}>
                {createPropTypes(property, propType.name)}
              </Td>
              <Td>{createDefaultValue(defaultValue)}</Td>
              <Td width={240} align="left">
                {description}
              </Td>
            </Tr>
          ),
        )}
      </TBody>
    </Table>
  );
};

const Table = styled.table`
  font-family: Hiragino Sans, 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
  border-spacing: unset;
  color: #34495e;
  box-sizing: border-box;
  padding: 8px 16px;
`;

const THead = styled.thead`
  background-color: #2c3e50;
  color: #ffffff;
  border-right: 1px solid #ffffff;
  word-break: keep-all;
  white-space: nowrap;
`;

const TBody = styled.tbody``;

const Tr = styled.tr`
  height: 40px;
  font-weight: ${({ required }) => (required ? 'bold' : 300)};
`;
const Th = styled.th`
  min-width: 80px;
  padding: 0 10px;
  text-align: center;
  border-right: ${({ last }) => (last ? 'unset' : `1px solid #FFFFFF`)};
  box-sizing: border-box;
`;

const Td = styled.td`
  min-width: ${({ width }) => width || 160}px;
  padding: 8px;
  border: 1px solid #bdc3c7;
  text-align: left;
  letter-spacing: 1.125px;
  box-sizing: border-box;
  word-break: break-word;
  white-space: ${({ pre }) => (pre ? 'pre' : 'normal')};
`;

const PropName = styled.span`
  ${({ required }) =>
    required &&
    css`
      ::after {
        content: '*';
        color: #ff4242;
        font-size: 1.25rem;
      }
    `}
`;

export default TableComponent;
