import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  function fetchStudents() {
    fetch('http://localhost:4825/api/students')
      .then(res => res.json())
      .then(data => setStudents(data.studentss))
      .catch(e => console.error(e));
  }
  fetchStudents();

  function handleNextButtonClick() {
    fetchStudents();
    setIndex(index => (index + 1) % students.length); 

    if((index + 1) % students.length === 0) {
      setCount(count => count + 1);
    }
  }

  return (
    <>
      <header className="container">HEADER</header>
      <main className="container">
        <button onClick={handleNextButtonClick}>Next Student</button>
        <div className="result"><span>Name:</span> {students[index] ? students[index].name : ''}</div>
        <div className="result"><span>Age:</span> {students[index] ? students[index].age : ''}</div>
        <div className="result"><span>Marks:</span> {students[index] ? students[index].marks.join(', ') : ''}</div>
        <div className="countResult"><span>Count:</span> {count}</div>
      </main>
      <footer className="container">FOOTER</footer>
    </>
  );
}

export default App;