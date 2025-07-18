// import { useSelector, useDispatch } from "react-redux"
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
//
// import { saveMessage } from "./StaffSlice.js";

// eslint-disable-next-line react/prop-types
// function StaffPic({pic}) {
//     return (
//         <img src={pic} style={{width: "15%", objectFit: "contain", padding: "10px", marginBottom: "auto"}} alt={""} />
//     )
// }

// eslint-disable-next-line react/prop-types
function Event({name, date, time, desc}) {
    return (
        <div style={{display: "flex", flexDirection: "column", margin: "10px", padding: "10px 20px"}}>
            {/*<StaffPic pic={pic} />*/}
            <div style={{display: "flex", flexDirection: "column", padding: "10px", width: "25%"}}>
                <div style={{margin: "inherit", textAlign: "left", fontWeight: "bolder"}}>
                    {name}
                </div>
                <div style={{margin: "inherit", textAlign: "left", fontWeight: "bold"}}>
                    {date}
                </div>
                <div style={{margin: "inherit", textAlign: "left"}}>
                    {time}
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                <div style={{margin: "inherit", textAlign: "left"}}>
                    {desc}
                </div>
            </div>
        </div>
    )
}


export default function Events() {
    // const message = useSelector((state) => state.staff.message)
    // const dispatch = useDispatch()

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", padding: "10px", width: "25%"}}>
                <div style={{margin: "inherit", textAlign: "left", fontWeight: "bolder"}}>
                    What We Believe
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                <div style={{margin: "inherit", textAlign: "left"}}>
                    We believe that Jesus is Lord and Savior, and the Bible is the divinely inspired Word that serves as the final written authority for the living out of the Christian faith.
                </div>
            </div>
        </div>
    )
}
