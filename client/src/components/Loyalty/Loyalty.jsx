import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle, AiFillCheckCircle, AiFillMinusCircle } from "react-icons/ai";
import { AiOutlineCheckSquare, AiFillCheckSquare, AiFillMinusSquare } from "react-icons/ai";
import './styles.css';

const Loyalty = ({ loyalty, onClick }) => {
	const { balance } = loyalty

	const handleRewardClick = (rewardInfo) => {
        onClick(rewardInfo);
        // onClick(JSON.stringify(rewardInfo));
    }

	// name, discountType, amount, points
	const renderRewards = () => {
		let arr = [];
		if (loyalty && loyalty.rewards) {
			loyalty.rewards.map(reward => {
				const { definition } = reward;
				const { scope, catalogObjectIds, discountType, percentageDiscount } = definition;
				const rewardInfo = {scope: scope, catalogObjectIds: catalogObjectIds, discountType: discountType, percentageDiscount};
				arr.push(
					<div className={`reward ${isRewardRedeemable(reward) ? 'dark-green' : 'gray'}`}> 
						{renderCheckIcon(reward, rewardInfo)}
						{reward.name} &nbsp; {reward.points} pts. 
					</div>
				);
			})		
		}
		return arr;
	}

	const isRewardRedeemable = (reward) => {
		return loyalty.balance >= reward.points;
	}
	
	const renderCheckIcon = (reward, rewardInfo) => {
		if (isRewardRedeemable(reward)) {	
	        return <>
		        {/*<div className='label-redeem'>Click to redeem</div> */}
		        <button className='label-redeem bold-text' onClick={() => {handleRewardClick(rewardInfo)}}>Claim Reward</button>	         
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

	return (		
		<>		 		
			<h3> My Loyalty Balance: {loyalty.balance} points</h3>
			{loyalty && renderRewards()} 
		</>

	);
}

export default Loyalty;
