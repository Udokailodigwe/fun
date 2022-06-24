import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    },
    paper1: {
        borderRadius: '16px 16px 0px 0px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 5px rgba(20, 250, 250, 0.9)',
        backdropFilter: 'blur(9.1px)',
        width: '800px',
        height: '100vh'
    },
    paper2: {
        borderRadius: '100px 100px 0px 0px',
        backgroundColor: 'rgba(250, 255, 255, 0.3)',
        boxShadow: '0 4px 5px rgba(20, 250, 250, 0.9)',
        backdropFilter: 'blur(9.1px)',
        height: '100vh',
        width: '350px',
        position: 'fixed'
    }
}))