import styled from 'styled-components'
import { breakPoints, cores } from '../../styles'

type InputGroupPros = {
  maxWidth?: string
}

type RowPros = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowPros>`
  dislay: flex;
  column-gap: 24px;
  margin-top: ${(p) => p.marginTop || '0'};
  align-items: flex-end;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupPros>`
  flex: auto;

  max-width: ${(p) => p.maxWidth || 'auto'};

  label {
    font-size: 14px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.branca};
    border: 1px solid ${cores.branca};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    border-radius: 9px;
    margin: 16px 0;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  background-color: ${(p) => (p.isActive ? cores.verde : cores.preta)};
  height: 32px;
  border: none;
  margin-right: 32px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
