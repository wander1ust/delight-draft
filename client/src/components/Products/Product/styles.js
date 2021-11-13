import { makeStyles } from '@material-ui/core/styles';
// import './animate.css';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    // maxHeight: '350px',
    // position: 'absolute'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9     
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  points: {
    // marginLeft: '5em',
    display: 'inline-block'
  },  
  rating: {
    display: 'inline-block !important',
    position: 'relative'
  },
  highlight: {
    border: '5px solid lightgreen',
    backgroundColor: '2px solid green',
    color: 'green',

  },  
  rewardLabel: {   
    "&::after": {
      display: 'block',
      // content: '"This item is eligible for Rewards!"',
      content: '"⭑ Rewards eligible! ⭑"',
      backgroundColor: 'gold',
      textAlign: 'center',
      // position: 'relative',
      // margin: '-2em auto',
      // marginTop: '-1.8em',
      // marginLeft: '4em',
      padding: '0.2em',
      fontWeight: 900,
      // width: '15em',
      // float: 'left'
    }
  },
  show: {
    display: 'block'
  },
  hide: {
    display: 'none'
  },
  block: {
    display: 'block'
  },
  centerText: {
    textAlign: 'center'
  },  
  boldText: {
    fontWeight: 900
  },
  redText: {
    color: 'darkred !important'
  },
  smallText: {
    fontSize: '1.2em',
    fontFamily: 'Marker Felt'
  },
  itemVariation: {
    border: '1px solid gray',
    borderRadius: '0.5em',
    backgroundColor: '#e6e6fa',
    display: 'inline-block',
    padding: '0.2em 0.5em',
    marginLeft: '0.5em',
    color: '#003b4a',
    cursor: 'default'
  },
  borderGreen: {
    border: '3px solid lightgreen'
  },  
  borderGray: {
    border: '3px solid gray'
  },
  borderDefault: {
    border: '1px solid gray'
  },
  borderNone: {
    border: 'none'
  },
  fade: {     
    animation: 'fadeout 1s linear forwards',
    '-webkitAnimation': `fadeout 1s linear forwards`
  },
  '@keyframes fadeout': {  
    '50%': {
      height: '2em'
    },
    '100%': {
      opacity: 0,
      height: 0
    }
  }
}));
