import { StatusBar } from 'expo-status-bar';
import { TransactionSearchScreen } from './src/screens/TransactionSearchScreen';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <TransactionSearchScreen />
    </>
  );
}
