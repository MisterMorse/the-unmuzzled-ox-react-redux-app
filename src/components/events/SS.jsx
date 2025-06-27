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
                desc={"I have been a member of Lovelady Baptist Church for over 40 years, serving as pastor for the past 10 years; I am a life-long Okie, and I graduated from Allen High School and East Central University. I was raised the son of a Southern Baptist pastor, and my father served as the pastor at our church from 1980 to 1997. I became a member of Lovelady in 1982, and – after having attended Lovelady for over 30 years – I surrendered to ministry in 2013. After serving as a pulpit supply and interim pastor in area churches for two years, I was called as pastor at Lovelady. My wife Patty and I were married at Lovelady in 1984, and we have three adult children and nine grandchildren. I love spending time with my family, as well as hunting, fishing, camping, cooking, watching sports, and gardening."}
            />
            <Event
                name={"Senior 2"}
                date={'May 25'}
                time={'10:30 AM'}
                desc={"I have been a member of Lovelady Baptist Church for over 40 years, serving as pastor for the past 10 years; I am a life-long Okie, and I graduated from Allen High School and East Central University. I was raised the son of a Southern Baptist pastor, and my father served as the pastor at our church from 1980 to 1997. I became a member of Lovelady in 1982, and – after having attended Lovelady for over 30 years – I surrendered to ministry in 2013. After serving as a pulpit supply and interim pastor in area churches for two years, I was called as pastor at Lovelady. My wife Patty and I were married at Lovelady in 1984, and we have three adult children and nine grandchildren. I love spending time with my family, as well as hunting, fishing, camping, cooking, watching sports, and gardening."}
            />
            <Event
                name={"Senior 3"}
                date={'May 25'}
                time={'10:30 AM'}
                desc={"I have been a member of Lovelady Baptist Church for over 40 years, serving as pastor for the past 10 years; I am a life-long Okie, and I graduated from Allen High School and East Central University. I was raised the son of a Southern Baptist pastor, and my father served as the pastor at our church from 1980 to 1997. I became a member of Lovelady in 1982, and – after having attended Lovelady for over 30 years – I surrendered to ministry in 2013. After serving as a pulpit supply and interim pastor in area churches for two years, I was called as pastor at Lovelady. My wife Patty and I were married at Lovelady in 1984, and we have three adult children and nine grandchildren. I love spending time with my family, as well as hunting, fishing, camping, cooking, watching sports, and gardening."}
            />
        </div>
    )
}
