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


export default function Senior() {
    // const message = useSelector((state) => state.staff.message)
    // const dispatch = useDispatch()

    return (
        <div>
            <Event
                name={"Senior 1"}
                date={'May 25'}
                time={'10:30 AM'}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <Event
                name={"Senior 2"}
                date={'May 25'}
                time={'10:30 AM'}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <Event
                name={"Senior 3"}
                date={'May 25'}
                time={'10:30 AM'}
                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
        </div>
    )
}
