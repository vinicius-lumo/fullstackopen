const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props, 'Part executado')
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}


const Total = (total) => {
  return (
    <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name:'Fundamentos da biblioteca React', 
      exercises:10
    },
    {
      name:'Usando props para passar dados', 
      exercises:7
    },
    {
      name:'Estado de um componente',
      exercises:14
    }
  ]

  return (
    <div>
      <Header name={course}/>   
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App