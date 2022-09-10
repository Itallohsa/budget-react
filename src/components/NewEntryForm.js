import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
    return(
        <Form unstackable>
        <Form.Group>
          <Form.Input 
          width={12}
          icon='tags'
          placeholder='New shinny thing'
          label='Description'
          />
          <Form.Input
          width={4}
          icon='dollar'
          iconPosition='left'
          placeholder='100.00'
          label='Value'
          />
        </Form.Group>
        <ButtonSaveOrCancel/>
      </Form>    )
}

export default NewEntryForm