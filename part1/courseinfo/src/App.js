const Header = (course) => {
  console.log(course)
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = (content) => {
  console.log(content)
  return (
    <p>
      {content.part} {content.exercises}
    </p>
  )
}

const Total = (total) => {
  console.log(total)
  return (
    <p>Number of exercises {total.part1 + total.part2 + total.part3}</p>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>   
      <Content part={part1} exercises={exercises1} />   
      <Content part={part2} exercises={exercises2} />   
      <Content part={part3} exercises={exercises3} />   
      <Total part1={exercises1} part2={exercises2} part3={exercises3} />
    </div>
  )
}

export default App