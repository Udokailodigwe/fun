import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(9.1px)',
        // position: 'absolute',
        right: 5,
        top: 100,
        width: '30px',
        minHeight: '400px',
        borderRadius: '3px',
        boxShadow: '0 2px 10px rgba(20, 250, 250, 0.5)',
        position: 'fixed'

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
        letterSpacing: '2px'
    },
}));


