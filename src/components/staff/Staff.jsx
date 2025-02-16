import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { saveMessage} from "./StaffSlice.js";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

// import styles from "./Counter.module.css"

export function Staff() {
    const count = useSelector((state) => state.staff.getStaff)
    const dispatch = useDispatch()

    return (
        <Form>
            <FormGroup>
                <Label for={ "message" } hidden>
                    Message
                </Label>
                <Input id={"message"} name={"message"} placeholder="Message" type={"text"} onChange={()=>dispatch(saveMessage(event.target.value))} />
            </FormGroup>
            <FormGroup>
                <Label for={ "send" } hidden>
                    Message
                </Label>
                <Button id={"send"} name={"send"} onClick={()=>
                    dispatch(saveMessage("a"))
                }>
                    Send
                </Button>
            </FormGroup>
        </Form>
    )
}


export default Staff