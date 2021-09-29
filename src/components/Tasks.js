import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {/* outputing  JSX in map() is called LIST*/}
            {/* Each LIST item should have unique key */}
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    );
};

export default Tasks;
