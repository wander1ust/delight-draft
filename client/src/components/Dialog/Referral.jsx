import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { Typography, Box } from "@material-ui/core";
const axios = require("axios");
import "./styles.css";

/*
  TODOs: send referral email, handle recipient account creation + 1st purchase with discount applied, store referralCode in Customer note, load gift card to referrer's account
*/

function Referral() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElmts = e.currentTarget.elements;
    // await axios.post('/api/referral',
    //   {
    //     'firstName': formElmts.firstName.value,
    //     'lastName': formElmts.lastName.value,
    //     'email': formElmts.email.value
    //   }
    // )
    // .then(response => {
    //     console.log(`referralInviteSent: ${JSON.stringify(response)}`);
    // })
    // .catch(error => {
    //     console.log(`referralInvite Error: ${error}`);
    // });
  };

  // const fetchCustomer = async () => {
  //   const customer = await fetch('/api/customer')
  //     .then(res => res.json())
  //     .then(data => data);

  //   const customerData = await customer.data;
  // };

  // TODO: replace with actual values
  // hardcoded - temp placeholders
  const firstName = "Naru";
  const lastName = "Touzumaki";
  const discount = "20%";
  const storeName = "Grumble";
  const currentUserName = "Ruby";
  const email = "blah@bjlbfkjdn.com";
  const referralCode = "12345"; // logged in user's referrer ID

  // temp placeholder
  const referralLink = `../Customer/Signup/?email=${email}&referralCode=${referralCode}`;

  const affiliateDisclosure =
    "* This email contains an affiliate link. The referrer will earn a small commission or financial reward at no additional cost to you when you sign up and place your 1st order.";

  return (
    <div className="wrapper">
      <Button id="btn" variant="outlined" onClick={handleClickOpen}>
        Referral Invite <MdEmail />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Affiliate Referral ~ Loyalty Program</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/*Invite a friend, subscriber, or family */}
            Earn a <span class="em">$5 gift card</span> for every new customer
            who signs up and makes a 1st time purchase through your referral
            link. No minimum! 😍
            <Box className="spacing"></Box>
            <span>Please enter details for the chosen recipient below.</span>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            placeholder="hokage@konoha.com"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            placeholder="Naru"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            placeholder="Touzumaki"
            fullWidth
            variant="standard"
          />
          <Box class="spacing"></Box>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            fullWidth
            defaultValue={`Hey ${firstName} ${lastName}! 

I know you love miso chashu pork ramen + a great deal. So I thought you might enjoy ${discount} off your first order at ${storeName} - one of my favorite eateries! ${storeName} has everything from yummy ramen🍜 to clay pot dishes🍲, sandwiches🥪, tacos🌮, and boba tea🧋! (I know cause I'm one of their loyal customers 👸🏻). You can thank me later 🤤
  
  Sign up URL: 
  ${referralLink}

  (Important: please don't share this link with anyone else!)

  Referral Code: ${referralCode}

                                                                      - ${currentUserName}
  
  ${affiliateDisclosure}                                                                      `}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Send Invite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Referral;