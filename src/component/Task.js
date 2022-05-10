import {FaTimes} from 'react-icons/fa'
const Task = ({task , onDelete , onToogle}) => {
  return (
    <div className="task"
    onDoubleClick={()=>onToogle(task.id)}>
        <h3>{task.text}
        < FaTimes onClick={() => 
          onDelete (task.id)}/>
          </h3>
        <p>{task.day}</p>
    
        </div>
  )
}

export default Task