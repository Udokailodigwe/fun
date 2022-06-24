import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    image: {
        width: '350px',
        height: '350px',
        borderRadius: '100px 100px 0px 0px',

    },
    name: {
        color: 'black',
        fontFamily: 'roboto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        margin: '5px'
    },
    title: {
        fontFamily: 'roboto',
        color: 'black',
        fontSize: '8px',
        fontStyle: 'italic',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clickableIcon: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    icon: {
        color: 'white',
        '&:hover': {
            color: 'rgba(200,200,200, 0.5)',
            cursor: 'pointer',
        },
    },
    divider: {
        backgroundColor: 'cyan',
        marginTop: '20px'
    },
    downloadcv: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginTop: '30px',
        color: 'white',
        '&:hover': {
            color: 'rgba(200,200,200, 0.5)',
            cursor: 'pointer',
        },

    },

}));


