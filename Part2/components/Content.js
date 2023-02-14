const Content = ({parts}) => {
    const sum = parts.reduce((sum, part) => {return sum + part.exercises}, 0)
    return (
        <div>
        {parts.map(part =>
            <p key={part.id}>{part.name} {part.exercises}</p>
            )}
        <b>Total of {sum} exercises</b>
        </div>
    )
}
export default Content