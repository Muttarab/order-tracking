import { Box, Typography, makeStyles, TextField } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    decorate: {
        display: "flex",
        fontWeight: "bolder",
        fontFamily: "roboto",
        position: "relative",
        marginTop: "20px",
        "&:before": {
            width: "40px",
            height: "40px",
            backgroundColor: '#C0C0C0',
            content: '""',
            borderRadius: "50%",
        },
    },
    decoratetxt: {
        color: '#000000',
        lineHeight: "40px",
        position: " absolute",
        left: "20px",
    },
    arrow: {
        lineHeight: " 50px",
        position: " absolute",
        left: "95px",
        animationName: "upDown",
        animationDuration: "0.7s",
        animationIterationCount: "infinite",
    },
    "@global": {
        "@keyframes upDown": {
            "0%": {
                transform: "scale(1,1)",
                paddingTop: "0px",
            },
            "100%": {
                transform: "scale(1,2)",
                paddingTop: "10px",
            },
        },
    },
    divider: {
        width: "64px",
        height: "4px",
        backgroundColor: '#C0C0C0',
        margin: theme.spacing(2, 0),
    },
    sectionHeading: {
        color: '#000000',
        margin: theme.spacing(1, 0),
    },
    sectionDesc: {
        color: '#000000',
        margin: theme.spacing(1, 0),
    },
    sectionHeadingCont: {
        padding: theme.spacing(1),
        color: "#fff",
    },
    cssLabel: {
        color: "#C0C0C0",
        "&.Mui-focused": {
            color: '#C0C0C0',
        },
    },
    cssOutlinedInput: {
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
        {
            borderColor: "#fff",
            opacity: 0.5,
        },
        "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
            opacity: 1,
            borderColor: "#fff",
        },
        "&$cssFocused $notchedOutline": {
            borderColor: '#fff',
            color: '#fff',
        },
    },
    notchedOutline: {},
    cssFocused: {},
    error: {},
    disabled: {},

}));
export const Decorator = ({ label, withIcon, Icon, styles }) => {
    const classes = useStyle();
    return (
        <Box className={classes.decorate} style={styles}>
            <Typography className={classes.decoratetxt} variant='h6'>{label}</Typography>
            {
                withIcon ? <Typography className={classes.arrow} variant='h6'>{Icon}</Typography> : null
            }
        </Box>
    );
};
export const Divider = ({ style }) => {
    const classes = useStyle();
    return <div className={classes.divider} style={style}></div>;
};

export const RenderSectionHeading = ({
    smallText,
    heading,
    alignCenter,
    description
}) => {
    const classes = useStyle();
    return (
        <Box className={classes.sectionHeadingCont}>
            {/* {Decorator({
                label: smallText,
                withIcon: false,
                styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
            })} */}
            <Typography
                variant='h4'
                align={alignCenter ? "center" : "left"}
                className={classes.sectionHeading}>
                {heading}
            </Typography>
            {Divider({
                style: alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" },
            })}
            <Typography
                variant='body1'
                component='h6'
                align={alignCenter ? "center" : "left"}
                className={classes.sectionDesc}>
                {description}
            </Typography>
        </Box>
    );
};

export const RenderInputText = ({
    type,
    name,
    label,
    state,
    onChange,
    multiline,
    rows,
    autoComplete
}) => {
    const { data } = state;
    const classes = useStyle();
    return (
        <TextField
            style={{border:'1px solid #C0C0C0'}}
            InputLabelProps={{
                classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                },
            }}
            InputProps={{
                classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                },
            }}
            variant='outlined'
            placeholder={label}
            fullWidth={true}
            name={name}
            type={type}
            value={data[name]}
            onChange={onChange}
            multiline={multiline}
            rows={rows}
            autoComplete={autoComplete}
            required
        />
    );
};