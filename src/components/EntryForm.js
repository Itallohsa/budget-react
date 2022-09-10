import React, { Fragment } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

const EntryForm = ({ description, setDescription, value, setValue, isExpense, setIsExpense }) => {
    return(
        <Fragment>
            <Form.Group>
            <Form.Input 
                width={12}
                icon='tags'
                placeholder='New shinny thing'
                label='Description'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Form.Input
                width={4}
                icon='dollar'
                iconPosition='left'
                placeholder='100.00'
                label='Value'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            </Form.Group>

            <Segment compact>
            <Checkbox 
                toggle 
                label='Is expense' 
                checked={isExpense}
                onChange={() => {setIsExpense((oldState) => !oldState)}}
            />

            </Segment>        
        </Fragment>

    )
}

export default EntryForm