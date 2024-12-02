// import { useState } from "react";
import "./MyOrg.css";

const MyOrg = (props) => {
    // const [nombreVariable, setNombreVariable] = useState("valor inicial");

    // const [show, setShow] = useState(true);


    // const handleClick = () => {
    //     // console.log("click");
    //     props.setShowForm(!props.showForm);
    // }

    return (
        <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img onClick={props.switchShowForm} src="/img/add.png" alt="add" />
        </section>
    )
}

export default MyOrg;