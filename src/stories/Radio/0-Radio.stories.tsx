import React from 'react';
import { useState, useCallback, useMemo } from '@storybook/addons';
import { NAVY, Color } from '../../colors';
import { Column, Margin, Vertical } from '../Container';

import Radio from '../../components/Radio/Base';

export default {
  title: 'Radio',
  component: Radio,
};

type Gender = 'male' | 'female' | 'transgender' | 'other' | '';
type DataList = { value: Gender; label: string; color: Color; size: string; space?: number };
const dataList: DataList[] = [
  {
    value: 'male',
    label: '男性',
    color: 'green',
    size: '15px',
    space: 127,
  },
  {
    value: 'female',
    label: '女性',
    color: 'blue',
    size: '24px',
    space: 127,
  },
  {
    value: 'transgender',
    label: 'トランスジェンダー',
    color: 'yellow',
    size: '40px',
  },
  {
    value: 'other',
    label: 'その他',
    color: 'gray',
    size: '78px',
    space: 111,
  },
];

export const デフォルト = () => {
  const [gender, setGender] = useState<Gender>('');
  const onCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGender(value as Gender);
  }, []);
  const genderText = useMemo(() => {
    const prop = dataList.find(data => data.value === gender);
    return prop ? prop.label : '';
  }, [gender]);

  return (
    <div
      style={{
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      <form>
        <fieldset>
          <legend>性別</legend>
          <Column>
            {dataList.map(({ value, label }) => (
              <Radio
                key={value}
                name="gener"
                id={value}
                value={value}
                label={label}
                checked={gender === value}
                onChange={onCheck}
                disabled={value === 'other'}
              />
            ))}
          </Column>
        </fieldset>
      </form>
      <Margin />
      <div>{genderText ? `あなたの性別は${genderText}ですね。` : '性別を選んでください。'}</div>
    </div>
  );
};

export const カスタムカラー = () => {
  const [gender, setGender] = useState<Gender>('');
  const onCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGender(value as Gender);
  }, []);
  const genderText = useMemo(() => {
    const prop = dataList.find(data => data.value === gender);
    return prop ? prop.label : '';
  }, [gender]);

  return (
    <div
      style={{
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      <form>
        <fieldset>
          <legend>性別</legend>
          <Column>
            {dataList.map(({ value, label, color }) => (
              <Radio
                key={value}
                name="gener"
                id={value}
                value={value}
                label={label}
                color={color}
                checked={gender === value}
                onChange={onCheck}
              />
            ))}
          </Column>
        </fieldset>
      </form>
      <Margin />
      <div>{genderText ? `あなたの性別は${genderText}ですね。` : '性別を選んでください。'}</div>
    </div>
  );
};

export const カスタムサイズ = () => {
  const [gender, setGender] = useState<Gender>('');
  const onCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGender(value as Gender);
  }, []);
  const genderText = useMemo(() => {
    const prop = dataList.find(data => data.value === gender);
    return prop ? prop.label : '';
  }, [gender]);

  return (
    <div
      style={{
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      <form>
        <fieldset>
          <legend>性別</legend>
          <Column>
            {dataList.map(({ value, label, color, size }) => (
              <Radio
                key={value}
                name="gener"
                id={value}
                value={value}
                label={label}
                color={color}
                size={size}
                checked={gender === value}
                onChange={onCheck}
              />
            ))}
          </Column>
        </fieldset>
      </form>
      <Margin />
      <div>{genderText ? `あなたの性別は${genderText}ですね。` : '性別を選んでください。'}</div>
    </div>
  );
};

export const 余白の指定 = () => {
  const [gender, setGender] = useState<Gender>('');
  const onCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGender(value as Gender);
  }, []);
  const genderText = useMemo(() => {
    const prop = dataList.find(data => data.value === gender);
    return prop ? prop.label : '';
  }, [gender]);

  return (
    <div
      style={{
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      <form>
        <fieldset>
          <legend>性別</legend>
          <Column>
            {dataList.map(({ value, label, space }) => (
              <Radio
                key={value}
                name="gener"
                id={value}
                value={value}
                label={label}
                space={space}
                checked={gender === value}
                onChange={onCheck}
              />
            ))}
          </Column>
        </fieldset>
      </form>
      <Margin />
      <div>{genderText ? `あなたの性別は${genderText}ですね。` : '性別を選んでください。'}</div>
    </div>
  );
};
