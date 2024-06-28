import React from 'react'

function TaskStatus({total,completed}) {
return (
    <>{completed} of {total} completed</>
  )
}

export default TaskStatus