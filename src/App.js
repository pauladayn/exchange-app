import ExchangeProvider from "./context/exchangeContext";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <ExchangeProvider>
        <Form />
      </ExchangeProvider>
    </>
  );
}

export default App;
