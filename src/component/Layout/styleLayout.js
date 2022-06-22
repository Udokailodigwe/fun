import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: '5px',
        alignItems: 'center',
        height: '100vh',
    },
    paper1: {
        borderRadius: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.52)',
        boxShadow: '0 4px 30px rgba(20, 250, 250, 0.9)',
        backdropFilter: 'blur(9.1px)',
        height: '500px',
        width: '900px',
    },
    paper2: {
        borderRadius: '16px',
        backgroundColor: 'rgba(250, 255, 255, 0.52)',
        boxShadow: '0 4px 30px rgba(20, 250, 250, 0.9)',
        backdropFilter: 'blur(9.1px)',
        height: '550px',
        width: '350px',
        marginRight: '20px'

    }
}))