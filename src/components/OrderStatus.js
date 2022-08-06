import React from "react";
import './OrderStatus.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderStatus({ orderData }) {
  return (
    <div className="main_container">
      <div className="container padding-bottom-3x mb-1">
        <div className="card mb-3">
          <div id="tracking-info" className="p-4 text-center text-lg rounded-top"><span><b style={{ fontSize: '18px' }}>Order</b></span><span style={{ fontSize: '18px' }} className="text-medium"># {orderData?.order_number}</span></div>
          <div id="status-info" className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2">
            <div className="w-100 text-center py-1 px-2"><span className="text-medium"><b>Status:</b></span> {orderData?.courier_status}</div>
          </div>
          <div className="card-body">
            {orderData?.courier_status === 'Delivered' ?
              <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon"><img src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/ordered.png?v=1659795521" alt='Ordered' height={35} width={35} /></div>
                  </div>
                  <h4 className="step-title">Ordered</h4>
                </div>
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon"><img src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/order_ready1_1.png?v=1659795479" alt='Order Ready' height={35} width={35} /></div>
                  </div>
                  <h4 className="step-title">Order Ready</h4>
                </div>
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon"><img src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/in_transit_1.png?v=1659795387" alt='In Transit' height={35} width={35} /></div>
                  </div>
                  <h4 className="step-title">In Transit</h4>
                </div>
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon"><img src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/out_for_delivery_1.png?v=1659795594" alt='Out for Delivery' height={35} width={35} /></div>
                  </div>
                  <h4 className="step-title">Out for Delivery</h4>
                </div>
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/delivered.png?v=1659795000" alt='Delivered' height={35} width={35} /></div>
                  </div>
                  <h4 className="step-title">Delivered</h4>
                </div>
              </div> : orderData?.courier_status === 'Out for Delivery' ?
                <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/ordered.png?v=1659795521" alt='Ordered' height={35} width={35} /></div>
                    </div>
                    <h4 className="step-title">Ordered</h4>
                  </div>
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/order_ready1_1.png?v=1659795479" alt='Order Ready' height={35} width={35} /></div>
                    </div>
                    <h4 className="step-title">Order Ready</h4>
                  </div>
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/in_transit_1.png?v=1659795387" alt='In Transit' height={35} width={35} /></div>
                    </div>
                    <h4 className="step-title">In Transit</h4>
                  </div>
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/out_for_delivery_1.png?v=1659795594" alt='Out for Delivery' height={35} width={35} /></div>
                    </div>
                    <h4 className="step-title">Out for Delivery</h4>
                  </div>
                  <div className="step">
                    <div className="step-icon-wrap">
                      <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/delivered.png?v=1659795000" alt='Delivered' height={35} width={35} /></div>
                    </div>
                    <h4 className="step-title">Delivered</h4>
                  </div>
                </div> : orderData?.courier_status === 'In Transit' ?
                  <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                    <div className="step completed">
                      <div className="step-icon-wrap">
                        <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/ordered.png?v=1659795521" alt='Ordered' height={35} width={35} /></div>
                      </div>
                      <h4 className="step-title">Ordered</h4>
                    </div>
                    <div className="step completed">
                      <div className="step-icon-wrap">
                        <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/order_ready1_1.png?v=1659795479" alt='Order Ready' height={35} width={35} /></div>
                      </div>
                      <h4 className="step-title">Order Ready</h4>
                    </div>
                    <div className="step completed">
                      <div className="step-icon-wrap">
                        <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/in_transit_1.png?v=1659795387" alt='In Transit' height={35} width={35} /></div>
                      </div>
                      <h4 className="step-title">In Transit</h4>
                    </div>
                    <div className="step">
                      <div className="step-icon-wrap">
                        <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/out_for_delivery_1.png?v=1659795594" alt='Out for Delivery' height={35} width={35} /></div>
                      </div>
                      <h4 className="step-title">Out for Delivery</h4>
                    </div>
                    <div className="step">
                      <div className="step-icon-wrap">
                        <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/delivered.png?v=1659795000" alt='Delivered' height={35} width={35} /></div>
                      </div>
                      <h4 className="step-title">Delivered</h4>
                    </div>
                  </div> : orderData?.courier_status === 'Order Ready' ?
                    <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                      <div className="step completed">
                        <div className="step-icon-wrap">
                          <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/ordered.png?v=1659795521" alt='Ordered' height={35} width={35} /></div>
                        </div>
                        <h4 className="step-title">Ordered</h4>
                      </div>
                      <div className="step completed">
                        <div className="step-icon-wrap">
                          <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/order_ready1_1.png?v=1659795479" alt='Order Ready' height={35} width={35} /></div>
                        </div>
                        <h4 className="step-title">Order Ready</h4>
                      </div>
                      <div className="step">
                        <div className="step-icon-wrap">
                          <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/in_transit_1.png?v=1659795387" alt='In Transit' height={35} width={35} /></div>
                        </div>
                        <h4 className="step-title">In Transit</h4>
                      </div>
                      <div className="step">
                        <div className="step-icon-wrap">
                          <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/out_for_delivery_1.png?v=1659795594" alt='Out for Delivery' height={35} width={35} /></div>
                        </div>
                        <h4 className="step-title">Out for Delivery</h4>
                      </div>
                      <div className="step">
                        <div className="step-icon-wrap">
                          <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/delivered.png?v=1659795000" alt='Delivered' height={35} width={35} /></div>
                        </div>
                        <h4 className="step-title">Delivered</h4>
                      </div>
                    </div> : orderData?.courier_status === 'Ordered' ?
                      <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                        <div className="step completed">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/ordered.png?v=1659795521" alt='Ordered' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Ordered</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/order_ready1_1.png?v=1659795479" alt='Order Ready' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Order Ready</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/in_transit_1.png?v=1659795387" alt='In Transit' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">In Transit</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/out_for_delivery_1.png?v=1659795594" alt='Out for Delivery' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Out for Delivery</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/delivered.png?v=1659795000" alt='Delivered' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Delivered</h4>
                        </div>
                      </div>
                      : <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/ordered.png?v=1659795521" alt='Ordered' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Ordered</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/order_ready1_1.png?v=1659795479" alt='Order Ready' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Order Ready</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/in_transit_1.png?v=1659795387" alt='In Transit' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">In Transit</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/out_for_delivery_1.png?v=1659795594" alt='Out for Delivery' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Out for Delivery</h4>
                        </div>
                        <div className="step">
                          <div className="step-icon-wrap">
                            <div className="step-icon"><img style={{marginBottom:'10px'}} src="https://cdn.shopify.com/s/files/1/0580/2318/2524/files/delivered.png?v=1659795000" alt='Delivered' height={35} width={35} /></div>
                          </div>
                          <h4 className="step-title">Delivered</h4>
                        </div>
                      </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}