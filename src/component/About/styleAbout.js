import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    aboutContainer: {
        color: 'white',
        overflowY: 'scroll',
        height: '100vh',
    },
    aboutintro: {
        fontFamily: 'Quicksand',
    },
    divider: {
        backgroundColor: 'cyan',
        margin: '20px',
    },
    image: {

    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        fontFamily: 'Quicksand',

    },
    gridChildTitle: {

    },
    gridChildDescription: {
        fontFamily: 'Quicksand',

    }
}));

