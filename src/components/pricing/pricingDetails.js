import React from "react";
import './pricing.css';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import { Button } from "@mui/material";

const PricingDetails = (props) => {
    const checkIcon=<AiOutlineCheckCircle style={{ color: 'blue',marginRight:'10px'}} size={18}  />
    const style={
        width:'100%',
        backgroundColor:'blue',
        color:'white',
        marginTop:'50px'
    }
    return (
        <>
            <div style={{ margin: '15px', padding: '10px' }}>
                <div className="price">
                    {props.price}
                </div>
                <div className="plan">
                    {props.plan}
                </div>
                <div className="billing-type">
                    {props.billingType}
                </div>
                <div >
                    <div className="display-flex"  >
                     <div>{checkIcon}</div>{props.feature1}
                    </div>
                    <div className="display-flex">
                    {checkIcon}{props.feature2}
                    </div>
                    <div className="display-flex">
                    {checkIcon}{props.feature3}
                    </div>
                    <div className="display-flex">
                    {checkIcon}{props.feature4}
                    </div>
                    <div className="display-flex">
                    {checkIcon}{props.feature5}
                    </div>
                </div>
                <Button variant="contained" sx={style}>GET STARTED</Button>
            </div>
        </>
    );
}
export default PricingDetails;