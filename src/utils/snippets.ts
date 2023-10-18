const reactCounterSnippet = `function App() {
const [counter, setCounter] = useState(0);
  return (
    <>
	  <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
    </>
  );
}`;

const createT3App = `npm create t3-app@latest`;

export const snippets = {
  reactCounterSnippet,
  createT3App,
};
