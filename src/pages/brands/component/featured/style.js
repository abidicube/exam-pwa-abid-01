import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: 233,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    imgBrand: {
        width: '100%',
        height: 'auto',
    },
    // featuredSlide: {
    //     [theme.breakpoints.down('sm')]: {
    //         width: '50% !important',
    //     },
    // },
}));

export default useStyles;
