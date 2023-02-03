import {createStyles, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    resultHeader: {
        position: 'relative',
        left: '50px',
        fontSize: '25px',
    },
    resultContext: {
        position: 'relative',
        left: '20px',
        fontsize: '30px',
    },

}));
export default useStyles;
