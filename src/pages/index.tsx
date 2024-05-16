export default function Index() {
  const [count, setCount] = useState(0);
  const SomeContext = createContext({});

  return (
    <div className="text-center">
      <div>Hello React !</div>

      <button
        className="m-2 rounded-md bg-blue-500 px-5 py-1 text-white transition hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
}
