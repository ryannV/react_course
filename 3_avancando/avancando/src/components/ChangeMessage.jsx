const ChangeMessage = ({ alterMessage }) => {
    const argument = ["Ryann", "Victor", "Vieira", "Miranda"];
  return (
    <div>
        <button onClick={() => alterMessage(argument[0])}>1</button>
        <button onClick={() => alterMessage(argument[1])}>2</button>
        <button onClick={() => alterMessage(argument[2])}>3</button>
        <button onClick={() => alterMessage(argument[3])}>4</button>
    </div>
  )
}

export default ChangeMessage