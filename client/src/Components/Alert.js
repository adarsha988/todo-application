import {Alert} from 'react-bootstrap'

function MsgAlert({variant,msg}) {
  return (
    <>
    <Alert  variant={variant||"danger"}>{msg||"message"}</Alert>
    </>
  )
}

export default MsgAlert;