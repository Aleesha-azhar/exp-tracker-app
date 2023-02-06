import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTransactions from '../MyComponents/AddTransactions';
import Balance from '../MyComponents/Balance';
import IncomeExpense from '../MyComponents/IncomeExpense';
import TransactionsList from '../MyComponents/TransactionsList';
import { addTransaction, deleteTransaction } from '../redux/actions';


export class Main extends Component {
  render() {
    const {transactions, addTransaction, deleteTransaction} = this.props;

    return (
      <div className='container'>
        <Balance transactions={transactions}/>
        <IncomeExpense transactions={transactions}/>
        <AddTransactions
         addTransaction={(transaction) => addTransaction(transaction)} 
         id={transactions[0] ? transactions[0].id + 1 : 1}/>
        <TransactionsList transactions={transactions} deleteTransaction={(id) => deleteTransaction(id)}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id))

});


export default connect(mapStateToProps, mapDispatchToProps)(Main)