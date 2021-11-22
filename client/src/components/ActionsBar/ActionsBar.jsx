import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { IconContext } from "react-icons";
import { IoFastFoodSharp, IoFastFoodOutline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { Referral } from '../index.js';
// import { Link, useLocation } from 'react-router-dom';

import './styles.css';

const ActionsBar = ({ loyalty, loyaltyBalance, redeemableRewards }) => {
	useEffect(() => {
		{console.log('redeemable rewards: ' + JSON.stringify(redeemableRewards))}
	}, [redeemableRewards])

	return (
		<>
		<div className={'actionsBar'}>
						<div className={'birthdayReward'}>
					🎁 Birthday Reward
				</div>
			<div className={'info'}>

				❇️ My Balance: {loyaltyBalance} &nbsp; &nbsp;
				🎉 {redeemableRewards.length > 0 ? redeemableRewards.length : ''} Rewards Available 🤩 &nbsp; &nbsp;
			</div>
			{/*<span id='invite'> Referral Invite <AiFillCopy /> </span>*/}	
		<Referral />
		</div>		
		</>
	)
}

export default ActionsBar;