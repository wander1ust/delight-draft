import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  products: {
    marginTop: '3em',
  },
  highlight: {
    border: '2px solid lightgreen',
    backgroundColor: '2px solid green',
    color: 'darkred'
  },
  show: {
    display: 'block'
  },
  hide: {
    display: 'none'
  },  
}));
