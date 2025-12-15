const CodeBackground = () => {
  const codeLines = [
    { text: "const App = () => {", top: "10%", left: "5%" },
    { text: "useEffect(() => {", top: "22%", left: "60%" },
    { text: "return <Component />;", top: "36%", left: "12%" },
    { text: "export default Hero;", top: "48%", left: "70%" },
    { text: "function fetchData() {", top: "62%", left: "8%" },
    { text: "if (isLoading) return null;", top: "74%", left: "50%" },
    { text: "const [state, setState] = useState();", top: "86%", left: "18%" },
    { text: "axios.get('/api/data')", top: "30%", left: "80%" },
    { text: "public function index()", top: "55%", left: "38%" },
    { text: "SELECT * FROM users;", top: "92%", left: "65%" },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {codeLines.map((line, index) => (
        <span
          key={index}
          className={`
            absolute
            text-base md:text-lg
            font-mono
            text-[#95D5B2]/60
            ${index % 2 === 0 ? "animate-floatSlow" : "animate-floatSlowAlt"}
          `}
          style={{
            top: line.top,
            left: line.left,
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  );
};

export default CodeBackground;
