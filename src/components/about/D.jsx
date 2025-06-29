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


export default function D() {
    // const message = useSelector((state) => state.staff.message)
    // const dispatch = useDispatch()

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", padding: "10px", width: "25%"}}>
                <div style={{margin: "inherit", textAlign: "left", fontWeight: "bolder"}}>
                    Donations
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                <div style={{margin: "inherit", textAlign: "left"}}>

                    <p>By contributing to what Lovelady is doing in our community and around the world, we are using
                        what God has given us to share the good news of Jesus by serving others.</p>
                    <p>Tithing should be seen as an expression of Christian Grace.</p>
                    <p>You may mail donations to:</p><p>Lovelady Baptist Church</p>
                    <p>P. O. Box 1699</p><p>Ada, OK 74821-1699</p>
                </div>
            </div>
        </div>
    )
}
