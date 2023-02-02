import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    cardContainer: {
        position: 'relative',
        top: '30px',
        left: '-240px',
        height: '100px',
        textAlign: 'none',
        boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden',
        borderRadius: '25px',
        background: 'rgba(44,131,82,0.5)',
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
    wordStyle: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    input: {
        // position: 'relative',
        // left:'-180px',
        // top:'30px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        width: '240px',
        fontSize: '25px',
        fontWeight: '500',
    },
    addButton: {
        // position: 'relative',
        // top: '60px',
        fontSize:'18px',
        // left: '80px'
    }
}));
export default useStyles;
