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
      {props.name} {props.quant}
    </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part name={props.part[0].name} quant={props.part[0].quant} />
      <Part name={props.part[1].name} quant={props.part[1].quant} />
      <Part name={props.part[2].name} quant={props.part[2].quant} />
    </div>
  )
}


const Total = (total) => {
  return (
    <p>Number of exercises {total.quant[0] + total.quant[1] + total.quant[2]}</p>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {name:'Fundamentos da biblioteca React', quant:10},
    {name:'Usando props para passar dados', quant:7},
    {name:'Estado de um componente', quant:14},
  ]

  return (
    <div>
      <Header name={course}/>   
      <Content part={parts} />
      <Total quant={parts} />
    </div>
  )
}

export default App