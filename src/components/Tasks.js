const Tasks = ({ tasks }) => {
    return (
        <>
            {/* outputing  JSX in map() is called LIST*/}
            {/* Each LIST item should have unique key */}
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    );
};

export default Tasks;
