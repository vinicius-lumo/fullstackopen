const Header = (props) => {
  console.log(props, 'header executado')
  return (
    <div>
      <h1>{props.course.name}</h1>
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
  console.log(props, 'content executado')
  return (
    <div>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}


const Total = (total) => {
  console.log(total, 'total executado')
  return (
    <p>Number of exercises {total.course.parts[0].exercises + total.course.parts[1].exercises + total.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name:'Fundamentos da biblioteca React', 
        exercises:10
      },
      {
        name:'Usando course para passar dados', 
        exercises:7
      },
      {
        name:'Estado de um componente',
        exercises:14
      }  
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>   
    </div>
  )
}

export default App