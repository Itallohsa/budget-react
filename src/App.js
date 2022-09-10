import './App.css';
import 'fomantic-ui-css/semantic.css';
import { Container, Grid, Icon, Segment, } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title='Your Balance' value='2,550.53' size='small'/>

      <DisplayBalances/>

      <MainHeader title='History' type='h3'/>

      <EntryLine description='Income' value='$10,00'/>
      <EntryLine description='Expense' value='$10,00' isExpense/>

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm/>

    </Container>
  );
}

export default App;
