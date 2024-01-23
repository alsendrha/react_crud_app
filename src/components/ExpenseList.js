import React from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ initialExpenses, expenses, handleDelete, handleEdit, handleClearItem }) => {
  return (
    <>
      <ul className='list'>
        {initialExpenses.map(expense => {
          return (
            <ExpenseItem key={expense.id} expense={expense}
              handleEdit={handleEdit} handleDelete={handleDelete} />
          )
        })}
      </ul>
      {expenses.length > 0 ?
        <button className='btn' onClick={() => handleClearItem()}>
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
        : null
      }
    </>
  )
}

export default ExpenseList
