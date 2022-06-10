import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    introduction: {
        position: 'absolute',
        top: '0px',
        left: '700px',
        fontSize: '35px',
    },
    search: {
        position: 'relative',
        top:'10px',
        left:'20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '40px',
        padding: '13px 18px 0px 16px',
    },
    input: {
        border: '1px solid #ccc',
        borderRadius: '3px',
        width: '240px',
        fontSize: '28px',
        fontWeight: '500',
    },
    searchButton: {
        width: '80px',
        fontSize: '20px',
    },
    context: {
        position: 'relative',
        top: '60px',
        left: '80px',
    },
    addList: {
        position: 'absolute',
        top: '20px',
        left: '1700px',
    },
    cardContainer: {
        position: 'absolute',
        top: '300px',
        left: '800px',
        height: '200px',
        textAlign: 'none',
        boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden',
        borderRadius: '25px',
        background: 'rgba(153,173,255,0.5)',
        borderTop: '1px solid rgba(255, 255, 255, 0.5)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
        color: 'black',
        padding: '2em',
        width: '100%',
        maxWidth: '420px',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        margin: '1em',
        backdropFilter: 'blur(5px)',
    },
}));
export default useStyles;