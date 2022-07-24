import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        /*devices*/
        '@media (max-width:1264px)': {
            flexDirection: 'column',
        }
    },
    paper1: {
        borderRadius: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 5px rgba(20, 250, 250, 0.9)',
        backdropFilter: 'blur(9.1px)',
        width: '800px',
        height: '100vh',
        marginTop: '10vh',
        /*medium and large device*/
        '@media (min-width:541px) and (max-width: 1264px)': {
            width: '600px',
            margin: '2vh -10px',
        },
        /*mobile device*/
        '@media (min-width:280px) and (max-width: 540px)': {
            width: '330px',
            margin: '2vh -20px',
        },
        /*mobile device*/
        '@media (max-width:360px)': {
            width: '230px',
            margin: '2vh -20px',
        },
    },

    paper2: {
        borderRadius: '100px 100px 0px 0px',
        backgroundColor: 'rgba(250, 255, 255, 0.2)',
        boxShadow: '0 4px 5px rgba(20, 250, 250, 0.9)',
        backdropFilter: 'blur(9.1px)',
        width: '350px',
        position: 'fixed',
        height: '100vh',
        marginTop: '10vh',
        /*medium and large device*/
        '@media (min-width:541px) and (max-width: 1264px)': {
            width: '300px',
            margin: '2vh -10px',
            height: '520px',
            position: 'relative',
        },
        /*mobile device*/
        '@media (min-width:280px) and (max-width: 540px)': {
            width: '330px',
            height: '520px',
            margin: '2vh -20px',
            position: 'relative',
        },
        /*mobile device*/
        '@media (max-width:360px)': {
            width: '230px',
            height: '400px',
            margin: '2vh -20px',
            position: 'relative',
        },
    },
}))