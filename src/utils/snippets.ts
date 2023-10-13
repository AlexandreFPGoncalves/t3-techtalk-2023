const reactCounterSnippet = `function App() {
const [counter, setCounter] = useState(0);
  return (
    <>
	  <p>{counter}</p>
      <button onClick={() => setCounter(counter +1)}>Click Me</Box>
    </>
  );
}`;

export const snippets = {
  reactCounterSnippet,
};
