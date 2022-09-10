import './App.css';
import 'fomantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useState } from 'react';
import EntryLines from './components/EntryLines';

function App() {

  let initialEntries = [
    {
      id: 1,
      description: 'Work income',
      value: '$1000,00',
      isExpense: false,
    },
    {
      id: 2,
      description: 'Water Bill',
      value: '$20,00',
      isExpense: true,
    },
    {
      id: 3,
      description: 'Rent',
      value: '$300,00',
      isExpense: true,
    },
    {
      id: 4,
      description: 'Power Bill',
      value: '$50,00',
      isExpense: true,
    },

  ];

  const [entries, setEntry] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    console.log('entries', entries);
    console.log('result', result);
    setEntry(result);
  };

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({id: entries.length + 1, description, value, isExpense,});
    console.log('entries', entries);
    console.log('result', result);
    setEntry(result)
  };



  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title='Your Balance' value='2,550.53' size='small'/>

      <DisplayBalances/>

      <MainHeader title='History' type='h3'/>

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm addEntry={addEntry}/>

    </Container>
  );
}

export default App;
