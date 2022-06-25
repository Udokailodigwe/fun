import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(9.1px)',
        // position: 'absolute',
        right: 5,
        top: 100,
        width: '30px',
        minHeight: '400px',
        borderRadius: '3px',
        boxShadow: '0 4px 5px rgba(20, 250, 250, 0.9)',
        position: 'fixed',
        /*mobile device*/
        '@media (min-width:280px) and (max-width: 540px)': {
            width: '30px',
        },
        /*mobile device*/
        '@media (max-width:360px)': {
            width: '20px',
        },

    },
    menu: {
        margin: '40px 0px',
        display: 'flex',
        flexDirection: 'column',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    navlink: {
        fontSize: '16px',
        margin: '20px 0px',
        transform: "rotate(90deg)",
        color: 'cyan',
        position: 'relative',
        right: 9,
        letterSpacing: '2px',
        cursor: 'pointer',
        /*mobile device*/
        '@media (min-width:280px) and (max-width: 540px)': {
            fontSize: '16px'
        },
        /*mobile device*/
        '@media (max-width:360px)': {
            fontSize: '14px',
        },
    },
}));


