const tasks = [
    {
        id: 1,
        text: "blabal",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Good tasks",
        day: "Feb 8th at 1:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Food shopping",
        day: "Feb 7th at 6:30pm",
        reminder: true,
    }
];

const Tasks = () => {
    return (
        <>
            {/* outputing  JSX in map() is called LIST*/}
            {/* Each LIST item should have unique key */}
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
