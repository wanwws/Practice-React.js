import './App.css'
import StudentItem from './assets/components/StudentItem'
// import NewStudentItem from './assets/components/NewStudentItem'
// import StudentItem2 from './assets/components/StudentItem2'

function App() {
  const studentLlist = [
    {name: "wan", surname:"kbp", age:24},
    {name: "june", surname:"wst", age:25},
    {name: "nunu", surname:"kbp", age:4},
    {name: "irene", surname:"ctnk", age:2}
  ]

  return (
    <div className='App'>
      <h1>Vite + React</h1>
      {/* <NewStudentItem /> */}
      <StudentItem name={studentLlist[0].name} surname={studentLlist[0].surname} age={studentLlist[0].age}/>
      <StudentItem name={studentLlist[1].name} surname={studentLlist[1].surname} age={studentLlist[1].age}/>
      <StudentItem name={studentLlist[2].name} surname={studentLlist[2].surname} age={studentLlist[2].age}/>
      <StudentItem name={studentLlist[3].name} surname={studentLlist[3].surname} age={studentLlist[3].age}/>
      {/* <StudentItem2 /> */}
    </div>
  )
}

export default App
