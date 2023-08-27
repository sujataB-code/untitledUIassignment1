import { Card, Grid } from "@mui/material";
import React from "react";
import PricingDetails from "./pricingDetails";
import { PricingData } from "../../constants/pricingDetails";
import './pricing.css'

const Pricing = () => {
    return (
        <>
            <div className="pricingwrapper">
                <div className="pricing-details">
                    Pricing
                </div>
                <div className="simple-pricing">
                    Simple, transparent pricing
                </div>
                <div className="pricing-main">
                    We belive Untitled should be accessible to all companies, no matter the size.
                </div>
                {/* pricing packages start here */}
                <Grid container justifyContent="space-between" marginTop={4}>
                    {
                        PricingData.map((item) => (
                            <Grid item xs={12} sm={5.85} md={3.8} lg={3.7} paddingTop={3}>
                                <Card variant="outlined" style={{ borderRadius: '10px', border: '2px solid blue' }}>
                                    {/* package format starts here */}
                                    <PricingDetails
                                        price={item.price}
                                        plan={item.plan}
                                        billingType={item.billingType}
                                        feature1={item.features.feature1}
                                        feature2={item.features.feature2}
                                        feature3={item.features.feature3}
                                        feature4={item.features.feature4}
                                        feature5={item.features.feature5}
                                    />
                                    {/* package format ends here */}
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid >
                {/* pricing packages ends here */}

            </div>
        </>
    );
}
export default Pricing;