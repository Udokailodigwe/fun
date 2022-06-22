import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    image: {
        width: '350px',
        height: '350px',
        borderRadius: '10px',
    },
    name: {
        fontFamily: 'roboto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        margin: '5px'
    },
    title: {
        fontFamily: 'roboto',
        color: 'grey',
        fontSize: '11px',
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
        '&:hover': {
            color: 'grey',
            cursor: 'pointer',
        },
    }

}));


