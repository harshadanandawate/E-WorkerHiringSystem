import React from "react";

class Payment extends React.Component{
    render() {
        return ( 
            <div class="container">
               <div class="page-header text-center">
                 <h1>Payment Gateway</h1>
               </div> 
              <div class="container">
                 <div class="row">
                    <div class="col-xs-12 col-md-6 col-md-offset-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                               <div class="row">
                                  <h3 class="text-center">Enter Payment Details : </h3><br/><br/>
                         </div>
                         </div>
                          <div class="panel-body">
                              <form role="form">
                                <div class="row">
                                   <div class="col-xs-12">
                                      <div class="form-group"> <label>CARD NUMBER</label>
                                        <div class="input-group"> <input type="tel" name="card_no" class="form-control"  placeholder="Valid Card Number"   /> <span class="input-group-addon"><span class="fa fa-credit-card"></span></span> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-md-6">
                                    <div class="form-group"> <label><span class="visible-xs-inline">EXP</span> DATE</label> <input type="tel" name="exp_date"  class="form-control" placeholder="MM / YY"   /> </div>
                                </div>
                                <div class="col-xs-5 col-md-5 pull-right">
                                    <div class="form-group"> <label>CV CODE</label> <input type="tel" name="cv" class="form-control" placeholder="CVC"  /> </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group"> <label>CARD OWNER</label> <input type="text" name="card_owner" class="form-control" placeholder="Card Owner Name"  /> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-xs-12"> <button class="btn btn-success btn-lg btn-block"  >Confirm Payment</button> </div>
                            <div class="col-xs-12"> <button class="btn btn-danger btn-lg btn-block"  style={{marginLeft: "10px"}} >Cancel</button> </div>
                            <div class="col-xs-12"> <button class="btn btn-warning btn-lg btn-block" style={{marginLeft: "20px"}} >Logout</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
    }
}

export default Payment