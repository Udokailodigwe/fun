import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.52)',
        backdropFilter: 'blur(9.1px)',
        position: 'absolute',
        right: 10,
        top: 0,
        width: '70px',
        minHeight: '400px',
        borderRadius: '5px',
        boxShadow: '0 4px 15px rgba(20, 250, 250, 0.5)',

    },
    menu: {
        margin: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    navlink: {
        fontSize: '13px'

    }
}));


