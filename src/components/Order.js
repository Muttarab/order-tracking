import { Box, Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { RenderSectionHeading } from './Common';
import { RenderInputText } from "./Common";
import ScrollAnimation from "react-animate-on-scroll";
import OrderStatus from "./OrderStatus";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Row, Col, Card } from 'antd';
import axios from 'axios';
import Clamp from "react-multiline-clamp";
import 'antd/dist/antd.css';

const endPoint = `https://omnitrack.herokuapp.com/trackbytrackingnumber`
const useStyle = makeStyles((theme) => ({
    section: {
        width: "100%",
        height: "auto",
        backgroundColor: '#FFFFFF',
        padding: theme.spacing(10, 0, 8, 0),
    },
    submitBtn: {
        backgroundColor: "#ef028d",
        color: "#fff",
        border: '1px solid #fff',
        "&:hover": {
            backgroundColor: "#ef028d",
            border: '1px solid #fff'
        },
    },
}));

export default function Order() {
    const classes = useStyle();
    const [orderTrack, setOrderTrack] = useState(false);
    const [orderData, setOrderData] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const [state, setState] = useState({
        data: {
            ordernumber: ""
        },
    });
    const handleOnChange = ({ target }) => {
        const { data } = state;
        data[target.name] = target.value;
        setState({ data });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOrderTrack(false)
        const response = await axios.get(`${endPoint}/${state?.data?.ordernumber}`).then(response => {
            return response.data
        })
            .then(data => {
                setOrderData(data)
                setOrderTrack(true)
            })
            .catch(error => {
                setOpen(true)
            })
        e.target.reset();
    };

    const capitalizeFirstLetter = (str) => {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const outputCourierData = orderData?.courier_tracking?.reduce((acc, e) => {
        const date = new Date(e.courierDate);
        const mm = monthNames[date.getMonth()];
        const dd = date.getDate();
        const key = `${mm} ${dd}`;
        acc[key] ? acc[key].push(e) : acc[key] = [e];
        return acc;
    }, {})
    let date;

    return (
        <Box className={classes.section} id='Contact'>
            <ScrollAnimation animateIn='fadeIn'>
                <Container maxWidth='xl'>
                    <Grid container justifyContent="center" spacing={1}>
                        <Grid item xs={12} sm={7}>
                            {RenderSectionHeading({
                                heading: "Track your Order!",
                            })}
                            <br />
                            <form onSubmit={handleSubmit}>
                                <Grid
                                    container
                                    direction='row'
                                    justifyContent='center'
                                    alignItems='center'>
                                    <Grid item xs={10} sm={9} style={{ flexGrow: "1" }}>
                                        {RenderInputText({
                                            label: "Please Enter your Order/Tracking Number",
                                            type: 'string',
                                            name: "ordernumber",
                                            state: state,
                                            onChange: handleOnChange,
                                            autoComplete: 'off'
                                        })}
                                    </Grid>
                                    <Grid item xs={8} sm={2} style={{ marginLeft: '2px' }}>
                                        <Button
                                            style={{height:'60px'}}
                                            variant='outlined'
                                            type='submit'
                                            fullWidth={true}
                                            className={classes.submitBtn}>
                                            <b>Track</b>
                                        </Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                    {
                        orderTrack ?
                            <Grid direction={'row'} style={{ marginTop: "50px" }}>
                                <Box>
                                    <Grid item xs={12}>
                                        <OrderStatus orderData={orderData} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Row>
                                            <Col span={12}>
                                                <Card title={<Typography variant='h6' style={{ color: '#1654ce', fontFamily: 'Gill Sans Nova Bold' }}>Shipping Details</Typography>} style={{ background: '#ffffff', marginLeft: '60px', marginRight: '10px' }}>
                                                    {Object.keys(outputCourierData).map((value, index) => {
                                                        return <>
                                                            <Card title={value} style={{ background: '#FFFFFF' }}>
                                                                {outputCourierData[value]?.map((value, index) => {
                                                                    return <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                                        <span style={{ color: 'gray' }}>{date = new Date(value?.courierDate).toLocaleTimeString([], { timeStyle: 'short' })}</span> {value?.courierStatus}
                                                                    </Card>
                                                                })}
                                                            </Card>
                                                        </>
                                                    })}
                                                </Card>
                                            </Col>
                                            <Col span={12}>
                                                <Card title={<Typography variant='h6' style={{ color: '#1654ce', fontFamily: 'Gill Sans Nova Bold' }}>Customer Information</Typography>} style={{ background: '#ffffff', marginRight: '60px', marginLeft: '10px' }}>
                                                    <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                        <b>Full Name:</b> {capitalizeFirstLetter(`${orderData?.customer?.name} `)}
                                                    </Card>
                                                    <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                        <b>Phone#:</b> {capitalizeFirstLetter(`${orderData?.customer?.phone} `)}
                                                    </Card>
                                                    <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                        <b>Location:</b> {orderData?.customer?.city}
                                                    </Card>
                                                    <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                        <b>Payment Method:</b> {orderData?.gateway}
                                                    </Card>
                                                </Card>
                                                <Card title={<Typography variant='h6' style={{ color: '#1654ce', fontFamily: 'Gill Sans Nova Bold' }}>Items Information</Typography>} style={{ background: '#ffffff', marginRight: '60px', marginLeft: '10px' }}>
                                                    {orderData?.line_items?.map((value, index) => {
                                                        return <>
                                                        <Card style={{ background: '#ffffff' }}>
                                                            <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                                <Clamp withTooltip lines={1}>
                                                                    <b>Name:</b> {value?.name}
                                                                </Clamp>
                                                            </Card>
                                                            <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                                <b>Price:</b> {value?.price}
                                                            </Card>
                                                            <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                                <b>Quantity:</b> {value?.quantity}
                                                            </Card>
                                                            <Card type="inner" style={{ background: '#F0F0F0' }}>
                                                                <b>Sku:</b> {value?.sku}
                                                            </Card>
                                                            </Card>
                                                        </>
                                                    })}
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Box>
                            </Grid>
                            : ''
                    }
                </Container>
            </ScrollAnimation>
            <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: "top", horizontal: "right" }} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Data not Found, Please Enter a Valid Number!
                </Alert>
            </Snackbar>
        </Box>
    );
}