# Square Delight &#x1F3EE;


## Table of Contents 
**[Installation](#installation)** &nbsp;| &nbsp; **[Configuring your environment](#configuring-your-environment)** &nbsp; | &nbsp; **[Inspiration](#inspiration)** &nbsp; | **[Video Demo](#video-demo)** &nbsp; | &nbsp;  **[Screen Shots](#screen-shots)** &nbsp; | &nbsp; **[Limitations](#limitations)** &nbsp; | &nbsp; **[Accomplishments](#accomplishments)**

<br/>

## Installation 
1. Clone this repository
2. Run **`cd server && npm install`** to install all server dependencies
3. Run **`npm start`** from `server/` dir to run the node server on localhost:5000
5. Open a new Terminal tab, cd to `client/` dir, and run **`npm install`** to install all client dependencies
6. Run **`npm start`** to start the React app on localhost:3000

<br/>

### Configuring your environment
Delete the sample **`.env`** file (or replace the test values with your own). <br/>
Rename **`.env.example`** to **`.env`** and add your Square app credentials.

<br/>

## Inspiration

>  *A delighted customer a day keeps them coming to stay ツ* 

 I’ve used Square POS before as both an employee and a customer. But it wasn't until this hackathon that I became aware of the company + tech behind this much-needed business software. 


 ### Loyalty Rewards
 I used to work as a barista at a bubble tea franchise. Given that the majority of customers were college students, I'm positive we would have seen an increase in regulars and returning customers had the shop offered a customer loyalty reward program, much like those physical stamp cards distributed by other competing chains at the time. Eventually, the frachisor rolled out their own rewards app + loyalty program, which was a step in the right direction. Ordering bubble tea<b>&#x1F9CB;</b> (or *boba* tea <b>&#x1F609;</b>) is an expensive, luxury treat — as is any sort of made-to-order food takeout/delivery. Offering incentives based on purchases made or points earned is an excellent way to build and retain a loyal customer base.

 A referral program is another tried-and-true marketing strategy for promoting a business. Is there demand for an affiliate referral program within Square's seller community? Indeed, there is! If you search the seller community forum for 'affiliate referral', you'll get back <a href="https://www.sellercommunity.com/t5/forums/searchpage/tab/message?q=affiliate%20referral" target="_blank"><strong>200+ results related to this query</strong></a>. Here's <a href="https://www.sellercommunity.com/t5/Questions-How-To/Will-Square-Loyalty-be-developing-customer-referral-affiliate/td-p/214470" target="_blank"><strong>a recent post by one Square seller</strong></a> requesting an affiliate referral program in conjunction with Square's Loyalty program to be packaged as an all-in-one, seamless Square customer loyalty experience.

<hr/>

 ### Catering to different dietary needs
 Different individuals have different diets, some stricter than others. It isn't clear from looking at a standard food menu, which items fit into a particular diet and which don't. Typically, one has to scroll through a long menu and read each description + ingredient list (if provided). Even then, a customer cannot be sure of the ingredients, how much of each ingredient was added, or how exactly a dish was prepared (aka the 'secret' proprietary recipe), unless they ask. This might not be a concern for many, but it's a real problem for those on restrictive diets. There's a lot of trust that consumers place in chefs and servers handling their food, whether they realize it or not.

 A 16 oz banana berry smoothie sounds healthy, right? Well, not if it contains <a href="https://www.fooducate.com/product/Jamba-Juice-Classic-Smoothie-Banana-Berry-16-oz/5266A9C8-02A3-BB5F-4ECC-AC6CB8C1344D" target="_blank"><strong>60g of added sugar</strong></a>!

 <img alt="sugar overload" src="https://media0.giphy.com/media/3o6MbfSIP0BzoCN7nW/giphy.gif?cid=ecf05e477lps0zascelwheg16l5r1ag9z52z63yzafw40uic&rid=giphy.gif&ct=g" width="190px" height=""/></a> <br/>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="https://giphy.com/gifs/season-6-the-simpsons-6x25-3o6MbfSIP0BzoCN7nW">via GIPHY</a>

 ### The right to know
 I've had the pleasure of witnessing folks try Taiwananese-inspired bubble tea beverages, tapioca pearls, plus a variety of other toppings + flavors for the very first time. The long list of options often overwhelms first time customers. In such cases, I'd get asked which drink I recommend, how sweet a drink is (there are different sweetness levels, but if a customer doesn't know how sweet a drink tastes at 100%, then they won't know how to adjust the sweetness level to their liking. For example, taro flavor comes out much sweeter than other flavors cause taro syrup alone is very sweet, which is great for those with a sweet tooth but not so great for someone who prefers or requires less or no sugar). The most popular beverages contain powdered milk, whereas other drinks contain fresh milk. Not everyone is okay with consuming the former. Then there were times when I was asked questions about specific nutrition profiles, ingredients, or manufacturing process that I didn't know the answer to. 

 Most customers don't have the time or patience to go through 1-3+ different nutrition guides that they need to look up, load online, and zoom in to try to read text on their small mobile device screens 🧐. When a human is hangry, they are <strong>H A N G R Y</strong>. 😡 👿
<!-- Human + hunger = 😡👿 -->

 <img alt="hangry" src="https://media1.giphy.com/media/l4EoMN9qjAOaaAcNO/giphy.gif?cid=ecf05e47m6xi3cntohcmucwg7or8e6tsu8nxdwmc6rjrc1tn&rid=giphy.gif&ct=g" width="190px" height=""/></a> 
 <img alt="pika angry" src="https://media3.giphy.com/media/aNFT7eG2rIKK715uLk/giphy.gif?cid=ecf05e478dyo942ts6b801oro33369wi23jkn13s77a03dcu&rid=giphy.gif" width="250px" height=""/></a>

 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 <a href="https://giphy.com/gifs/pokemon-anime-aNFT7eG2rIKK715uLk">GIPHY 1</a>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://giphy.com/gifs/splat-nicksplat-ren-and-stimpy-l4EoMN9qjAOaaAcNO">GIPHY 2</a>

 The purpose of adding a dietary options filter is to foster a more inclusive customer food ordering experience. But the seller has to care enough to enter in this info in the first place (could be stored privately as custom attributes with hidden visibility).

<br/>


## Video Demo
<a href="https://rebrand.ly/square-loyalty-video-demo" target="_blank"><img alt="video thumbnail" src="client/src/assets/imgs/video-thumbnail.png" width="650px" height=""/></a>


<br/>

## Screen Shots
<img alt="catalog" src="client/src/assets/screen%20shots/1.png" width="650px" height=""/></a>
<br/>
<img alt="claim reward" src="client/src/assets/screen%20shots/2.png" width="650px" height=""/></a>
<br/>
<img alt="ineligible reward item" src="client/src/assets/screen%20shots/9.png" width="250px" height=""/></a>
<img alt="eligible reward item" src="client/src/assets/screen%20shots/5.png" width="282px" height=""/></a>
<br/>
<img alt="loyalty referral" src="client/src/assets/screen%20shots/8.png" width="450px" height=""/></a>
<br/>
<img alt="diet options filter" src="client/src/assets/screen%20shots/6.png" width="350px" height=""/></a>
<br/>
<img alt="loyalty bar" src="client/src/assets/screen%20shots/7.png" width="600px" height=""/></a>

<br/>

## Limitations
Unfinished, buggy app &nbsp;★&nbsp; Bad algorithm &nbsp;★&nbsp; Broken code <b>&#9785;&#65039;</b><br/>

Bad algo - slow performance; time complexity increases as catalog grows in size

Change approach <br/>
    - call catalogApi.searchCatalogItems + catalogApi.searchCatalogObjects from backend <br/> 
    - then render items in frontend for each reward click & option change?

<br/>

## Accomplishments

✔︎ Looked at yummy food pics w/o craving anything <b>&#x1F632;</b>

✔︎ Learned react-redux reducers from <a href='https://youtube.com/watch?v=9jULHSe41ls'><strong>this well explained video tutorial</strong></a>.

✔︎ Tried following <a href="https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way/"><strong>this guide</strong></a> on how to best structure project code in hopes that it would make my spaghetti code <b>&#x1F35D;</b> `</>` less unpleasant to read & manage. It's the best explanation that I found online (aka the only one I understood). Idk if I structured my code correctly, but I did notice an improvement in overall organization & workflow.


<br/><p></p>

<div align="center"><a href="https://rebrand.ly/devfolio" target="_blank"><img alt="contact" src="client/src/assets/imgs/contact.png" width="150px"/></a></div>

