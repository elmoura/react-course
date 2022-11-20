import './index.css';

export const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      Date
      <div className='expense-item__description'>
        <h2>Title</h2>
        <div className='expense-item__price'>29.95</div>
      </div>
    </div>
  ); 
};
