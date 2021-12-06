## I. What do you find valuable with the API and its current feature set?

Square's developer docs cover everything that I (didn't) expect, and more. It checks all the boxes of what good documentation should be imo - extensive, unassuming, and rich with helpful code examples. This was, hands down, the most reliable, comprehensive, developer friendly platform that I've had the pleasure of developing on to date.

I say this as an amateur hobbyist programmer; whether that means something, or nothing at all, I'll let you be the judge 😝. But I've been learning web development on my own for some time now, so I'd like to think I have some sense of what's good, what's bad, what's horrendous 🤣, and what's commendable. Fortunately, Square falls into the last category, which has made for a positive, lasting first impression in my mind.

<br>

### What I Loved About the Square API Docs

I found the Square Developer platform to be very beginner developer friendly, comprehensive, reliable, and easy to navigate. Bonus points for the intuitive layout, well-thought-out content structure + content flow, functional search bar, multi-language in-browser code editor with relevant sample codes every step of the way, an API explorer for testing API requests on the fly, Square sandbox payment test values, and special attention given to known API limitations + common pitfalls (in all the right places too, might I add).

I love that Square Developer supports two types of docs for its APIs:

1. comprehensive docs with detailed explanations

2. a no-frills, technical API reference that very simply lists out all the parameters, expected inputs & outputs, limitations & example code snippets

The way everything is structured - expandable + collapsible attributes, sample codes, side menu organized into categories > sub-categories, readability, etc. - is all perfect the way it is 👍. This makes it easy for any newcomer to dive right in, start coding, and quickly gather pieces of information from one centralized source. All parameter inputs are laid out plain & simple, clearly & consistently, which saves a newbie dev *a great deal* of time trying to figure things out via trial & error (case in point: once I spent hours to a day trying to figure out how to structure an API call only to discover that instead of accepting a JSON string as the other functions did, the specific function in question only accepted a primitive string 😮‍💨 I found out from an active community member kind enough to tell me the parameter type when I asked). So it's lovely to see all parameters & parameter types specified in Square's API reference.

This one is strangely specific, but I loved how anytime I entered a new search in the search bar, Square just seemed to know my preference for opening every link in a new browser tab. It did this for me automatically, so I didn't have to cmd+click every time 😍. Hitting the backscape key to go back to a page I'm on is one of my pet peeves. So this one small feature is a big plus in my book!

Something else that deserves shouting out is how Square doesn't shy away from expected/known limitations & challenges. It's great to see how transparent and forthcoming Square's team is with disclosing these details (e.g. BigInt, In-App Payments SDK limitations, etc), instead of hiding necessary pieces of info or sweeping them under the rug like they don't exist.

<br><hr/><br>

## II. How would you like to see us improve upon the API?

#### SUGGESTION #1
Provide standard seller dummy dashboards that developers can use for development & testing right away

Sample sandbox storefronts with dummy content preloaded - fake customers created, catalog of test items uploaded with item data prepopulated (prices, images, descriptions, variations), loyalty accrual rules already created to save time

Basic starter templates for various product & service industries




#### SUGGESTION #2
Accept CatalogImage as a product attribute so that users can upload CatalogImages from an imported xslx/csv file. Add CatalogImages as an attribute column to the exported file in Seller Inventory dashboard




#### SUGGESTION #3
Offer the option to add multiple catalog images for different item variations via Square Point of Sale




#### SUGGESTION #4
- Enable Sandbox dashboard login at https://squareupsandbox.com/login
- Allow access to Sandbox dashboard via direct url:
https://squareupsandbox.com/dashboard


At present, Sandbox dashboard can only be launched via Square Developer Portal. All url paths under **`https://squareupsandbox.com/*`** redirect to Seller account dashboard: **`https://squareup.com/*`**. Session timeouts + page refreshes revert to non-sandbox test environment, which can be inconvenient when one is working only in sandbox. But maybe this is intentional, and introducing direct login like this presents a security vulnerability that I'm not aware of?




#### SUGGESTION #5
A glossary of Square POS specific terms + lingo to dispell any confusion for those who may be unfamiliar with or easily confused by some features, like various catalog options, item variations, item ids, variation ids, etc.




#### SUGGESTION #6
Add ability to delete multiple catalog items from items page in seller sandbox dashboard

It also takes some time to upload larger image files. If an item isn't saved before an image has finished uploading (once new image appears in thumbnail; not when user clicks 'Done'), then the image never uploads, but the seller may not realize this. The only way to know is to click & check each item individually or to run code that checks whether every item has an imageId defined & returning items where imageId is undefined or image source is incorrect.

It would be nice if a seller can preview all item images from their Items list dashboard page (similar to how all prices are listed on one page). That way, sellers can tell which items have missing/incorrect images that need adding/updating.





#### ONE-TIME ERROR: RESOLVED IN DUE TIME

Import Inventory - 500 Server Error
Unable to import catalog items from xlsx file (exported from Seller dashboard)
to [sandbox dashboard](https://squareupsandbox.com/dashboard/items/library)

Square error msg: "Import file should contain at least a header and one data row."
500 Internal Service POST Error

Inaccurate file read
- all product attribute values (columns in document), with the exception of **`Price Format`**, are detected as null

**`Confirm`** action button is disabled.

[screen shots](client/src/assets/screen%20shots/error/)

<br><hr/><br>

## III. Do you have any other thoughts or feedback to share?

Overall, I was genuinely impressed with the level of care and attention to detail that went into creating, supporting, documenting, and updating the Square APIs. I was starting to wonder if difficult to follow API documentation was the norm, if my bar was set too high, or if I'm just awfully slow at piecing things together. Thank you for proving to me that it can be done, and that it can be done well 👏

It's clear that Square has the right resources and proper processes in place to build a developer platform that is second to none. It's also clear that the Square team values feedback from devs building on Square. Otherwise, the docs wouldn't be nearly half as good as they are. That you're even asking for feedback at the end of a hackathon says a lot. The effort that the Square team has put into building & improving the APIs is greatly appreciated and does not go unnoticed. Prior to this hackathon, I was aware of the POS that most small businesses rely on these days, but I didn't know about Square. Now, Square has become the model dev platform that I'll be referencing from here on out.

Lastly, this isn't feedback for the APIs - just my personal thoughts on this particular hackathon experience. One suggestion that I have is to consider scheduling & hosting weekly challenges, community events, or office hours if possible (similar to Dolby's Build The World hackathon, which hosted weekly side quests, an active forum discussion + regular office hours). This could help drive engagement and build excitement around any future Square hackathons 🙂