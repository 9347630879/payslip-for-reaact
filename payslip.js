import React from "react";
import './App.css'
export function Payslips() {
    return(
        <div className="sai">
            <div className="sai-one">
                <h3 className="design">Mantra technologies pvt ltd.</h3>
                <div className="parent-d">
                    <p className="size">1st floor vertex cooperate bridge, jubliie enclave hitech madhapur hyderabad-500081.p:(040)29800028</p>
                    <h3 className="payslip">Payslips for the of july in 2023</h3>
                </div>
            </div>
            <div className="child">
                <div className="child1">
                    <p>Name:<span>G.SAI SUNDHAR</span></p>
                    <p>join date:<span>june</span></p>
                    <p>designation:<span>developer</span></p>
                    <p>department:<span>engineering</span></p>
                    <p>location:<span>hyderabad</span></p>
                    <p>effective working days:<span>21</span></p>
                    <p>days in month:<span>22</span></p>
                </div>
                <div className="child2">
                    <p>bank name:</p>
                    <p>bank account number:</p>
                    <p>PF no:</p>
                    <p>ESI:</p>
                    <p>PAN no:</p>
                    <p>LOP:</p>
                </div>
            </div>
            <div>
                <div  className="child-one">
                   <div className="child-d1">
                   <label>Earning</label><span>actual</span>
                   </div>
                   <div className="child-d2">
                   <label>deducation</label><span>actual</span>
                   </div>
                </div>
                <div className="child-two">
                    <div className="child-d3">
                        <p>basic:<span>11178.00</span></p>
                        <p>HRA:<span>3353.00</span></p>
                        <p>MEDICAL ALLOWANCES:<span>1677.00</span></p>
                        <p>TRANSPORT ALLOWANCES:<span>1677.00</span></p>
                        <p>SPECIAL ALLOWANCES:<span>26770.00</span></p>
                    </div>
                    <div className="child-d4">
                        <p>PF<span>1800.00</span></p>
                        <p>prof tax<span>1800.00</span></p>
                    </div>
                </div>
                <div className="total-earning">
                    <div className="total-1">
                        <p>total earning INR:2000</p>
                    </div>
                </div>
                <h6>Next pay for the month (total earning-time declaration)
                <h6>twenty thousand five hundred fourty four</h6>
                </h6>
            </div>
        </div>
    )
}