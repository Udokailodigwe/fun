import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    image: {
        width: '350px',
        height: '350px',
        borderRadius: '100px 100px 0px 0px',
        /*medium devices*/
        '@media (min-width:541px) and (max-width: 680px)': {
            width: '450px',
            height: '450px'
        },
        /*mobile device*/
        '@media (min-width:280px) and (max-width: 540px)': {
            width: '330px',
            height: '330px',
        },
        /*mobile device*/
        '@media (max-width:360px)': {
            width: '230px',
            height: '230px',
        },

    },
    name: {
        color: 'black',
        fontFamily: 'roboto',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        margin: '5px',
        /*mobile device*/
        '@media (min-width:280px) and (max-width: 540px)': {
            fontSize: '30px',
        },
        /*mobile devices*/
        '@media (max-width:360px)': {
            fontSize: '20px',
        },
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


