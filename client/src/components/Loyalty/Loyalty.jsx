import React, { useState, useRef, useEffect } from 'react';
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle, AiFillCheckCircle, AiFillMinusCircle } from "react-icons/ai";
import { AiOutlineCheckSquare, AiFillCheckSquare, AiFillMinusSquare } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import './styles.css';

// TODO: when account loyalty balance increases unlock new rewards as they become available

const Loyalty = ({ loyalty, loyaltyBalance, setLoyaltyBalance, onClick, selectedReward, variationItem, setRedeemableRewards }) => {
	const { balance } = loyalty
	const [messageVisible, setMessageVisible] = useState(false);
	const [rewardActive, setRewardActive] = useState(null);
	// const [loyaltyBalance, setLoyaltyBalance] = useState([]);
	// const [redeemableRewards, setRedeemableRewards] = useState([]);

	const handleRewardClick = (e, rewardInfo) => {
		// activateReward();
		const id = e.target.getAttribute('id');
        onClick({id: id, info: rewardInfo});
        setRewardActive(true);	   
	   	setMessageVisible(true);
	   
	    setTimeout(() => {
	      setMessageVisible(false);
	    }, 2000);        
        // onClick(JSON.stringify(rewardInfo));
        // ${selectedReward == rewardInfo ? 'reward-active' : 'reward-inactive'}
    }

	// name, discountType, amount, points
	const renderRewards = () => {
		let arr = [];
			
			loyalty.rewards.map((reward, i) => {
				const { definition } = reward;
				const { scope, catalogObjectIds, discountType, percentageDiscount } = definition;
				const rewardInfo = {scope: scope, catalogObjectIds: catalogObjectIds, discountType: discountType, percentageDiscount};
				
				arr.push(
					<div key={`reward-${i}`} ref={rewardCoupon} className={`reward ${isRewardRedeemable(reward) ? 'reward-unlocked' : 'reward-locked'} ${rewardActive && selectedReward && selectedReward.id.slice(-1) == i ? 'reward-active' : ''}`}> 
						{renderButton(reward, rewardInfo, i)}
						{reward.name} &nbsp; {reward.points} pts. 
					</div>
				);
			})		
		// }
		return arr;
	}

	const isRewardRedeemable = (reward) => {
		return loyalty.balance >= reward.points;
	}
	
	const renderButton = (reward, rewardInfo, i) => {
		if (isRewardRedeemable(reward)) {	
	        return <>
		        <button id={`rewardBtn-${i}`} ref={rewardCoupon} className={`label-redeem text-bold`} onClick={(e) => handleRewardClick(e, rewardInfo)}>CLAIM REWARD</button>	
		         
		        <AiOutlineCheckSquare id='outline-check-circle' className='icon-circle' />	
	        </>			
		} else {
			return <>
				<div className='label-ineligible'>You are {reward.points - loyalty.balance} points away! 🚀</div> 			
				<AiFillMinusSquare id='minus-circle' className='icon-circle' />
			</>
			// return <AiFillCheckCircle className='check-circle' />
		}		
	}	
	// setTimeout(() => {return 'hide'}, 3000)
	const renderMessage = () => {
		if (selectedReward) {
			return <h3 className={`message text-bold ${messageVisible ? 'show' : 'fade'}`} onTransitionEnd={() => setMessageVisible(false)}>Please choose a Reward item to add to cart <FaCartPlus /> </h3>
		}
	}

	const rewardCoupon = useRef(null);

    const activateReward = () => {
	    // rewardCoupon.current.style.backgroundColor('#dbf0e1');
	    rewardCoupon.current.classList.remove('reward-unlocked');
	    rewardCoupon.current.classList.add('reward-active');
	}	

	useEffect(() => {
		if (loyalty && loyalty.rewards) {
			// if (isRewardRedeemable(reward)) {
				const redeemable = loyalty.rewards.filter(reward => isRewardRedeemable(reward));
				// isRewardRedeemable(reward);
				// redeemableRewards.push(redeemable);
				setRedeemableRewards(redeemable);
				// redeemable.push(reward);									
		} 		
	}, [loyalty])

	useEffect(() => {
		if (variationItem) { 
			setLoyaltyBalance(Number(loyalty.balance) + Number(variationItem.price));
		}
	}, [variationItem])	

	return (		
		<div className='text-center'>		 		
			<div id='title' className='text-bold'> L{/*<span id='flower-emoji'>🌺</span>*/}oyalty Rewards </div>
			<p>My Account Balance: {loyaltyBalance ? loyaltyBalance : loyalty.balance} points</p>
			{loyalty && loyalty.rewards && renderRewards()} 
			{renderMessage()}
		</div>

	);
}

export default Loyalty;
