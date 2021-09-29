import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <>
            {/* outputing  JSX in map() is called LIST*/}
            {/* Each LIST item should have unique key */}
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </>
    );
};

export default Tasks;
