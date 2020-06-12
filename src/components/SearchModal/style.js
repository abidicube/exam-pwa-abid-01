import { makeStyles } from '@material-ui/core/styles';
import { Centering, CreatePadding } from '@theme/mixins';
import { WHITE } from '@theme/colors';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100%',
    },
    body: {
        ...Centering,
        ...CreatePadding(20, 80, 80, 80),
        justifyContent: 'space-between',
    },
    item: {
        margin: 0,
        ...Centering,
    },
    appBar: {
        position: 'relative',
        backgroundColor: WHITE,
        boxShadow: 'none',
    },
    iconClose: {
        size: 30,
    },
}));

export default useStyles;