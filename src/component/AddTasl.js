import { useState} from  'react' 

const AddTasl = ({onAdd}) => {
       const [text, setText] = useState('')
       const [day, setDate] = useState('')
       const [reminder, setReminder] = useState(false)

       const onSubmit = (e) => {
              e.preventDefault()
              if(!text){
                     alert('please add task')
                     return
              }
              onAdd({text,day,reminder})
              setText('')
              setDate('')
              setReminder(false)
       }
  return (
   <form className='add-form' onSubmit={onSubmit}>
       <div className='form-control'>
<label>Task</label>
<input className ='Textbox' type='text' placeholder='Add task'
value={text} onChange={(e) => setText(e.target.value)}/>
       </div>
       <div className='form-control'>
<label>Time </label>
<input className ='Textbox' type='text' placeholder='Add Date'
value={day} onChange={(e) => setDate(e.target.value)}/>
       </div>
       <div className='form-control 
       form-control-check'>
<label>Remainder</label>
<input type='checkbox'
checked={reminder}
value={reminder} onChange={(e) =>setReminder(e.currentTarget.checked)}/>
       </div>
 <input className="btn btn-block" 
   type='submit' value='Save Task'/>
   </form>
  )
}

export default AddTasl
