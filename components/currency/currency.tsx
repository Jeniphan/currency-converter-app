import React, { useEffect } from 'react'
import './currency.module.css'
import { useAppContext } from '@hooks/context'

export const Currency = (props) => {
  const context = useAppContext()
  const { selectCurrency, changeCurrency, amount, onChangeAmount } = props;

  return (
    <div className="currency">
      <select value={selectCurrency} onChange={changeCurrency}>
        {context.currencyChoice.map((choice: string, index: number) => {
          return <option key={index} value={choice}>{choice}</option>
        })
        }
      </select>
      <input
        type="number"
        className=""
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  )
}
