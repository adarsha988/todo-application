import { Button, Form, InputGroup } from 'react-bootstrap';

function AddInputGroup({label,palceholder,button}) {
  return (
    <> 
          <InputGroup className="mb-3">
         <InputGroup.Text>{label||"Label"}</InputGroup.Text>
            <Form.Control placeholder={palceholder||"Placeholder"} />
              <Button variant="outline-secondary" id="button-addon2">{button||"button Name"}</Button>
             </InputGroup>
  </>
  )
}

export default AddInputGroup