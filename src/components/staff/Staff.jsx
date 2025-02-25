import { useSelector, useDispatch } from "react-redux"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import { saveMessage } from "./StaffSlice.js";

export function Staff() {
    const message = useSelector((state) => state.staff.message)
    const dispatch = useDispatch()

    return (
        <div>
            <Form>
                {message}
                <FormGroup>
                    <Label for={ "messageTarget" } hidden>
                        Message
                    </Label>
                    <Input id={ "messageTarget" } name={ "message" } placeholder="Message" type={ "text" } onChange={ () => dispatch(saveMessage(event.target.value)) } />
                </FormGroup>
                <FormGroup>
                    <Label for={ "sendTarget" } hidden>
                        Send
                    </Label>
                    <Button id={ "sendTarget" } name={ "send" }>
                        Send
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Staff
