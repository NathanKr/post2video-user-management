<h1>Project Name</h1>
....



<h2>Project Description</h2>
....

<h2>Motivation</h2>
<h3>current status</h3> 
i have passed google oauth verification and now i want to ask for x100 more quota but i want first to have some use managment to have basic app still without payment but i do want the free tier (e.g. up tp 6 videos , total videos 20 mints and total spend 20 cent) mode so google can see the product.

<h3>use managment</h3> 
to handle free tier i need user managment which include the following
- store the user signup info e.g. user password
- store the user role : admin , free tier , free tier expired 
- store the user meta data : number of uploaed video , cents reamins to use

<h3>constraints</h3> 
- i prefer free tool which handle users on his side for up to few tousent of users
- i use next.js 15 with app router
- my app use youtube api and to use it you need to authenticate using google oauth2

<h2>Installation</h2>
....


<h2>Usage</h2>
....


<h2>Technologies Used</h2>
....


<h2>Design</h2>
questions
 
<h3>which tool</h3>
given next.js clerk is probably the best choise


<h3>sign up to post2video with youtube gmail account only</h3>
no :
- this will increase friction 
- will not eliminate maliciouse free tier user
- will not help with later google oauth (may be even complicate it)
- this is stored thus contradict the fact that google api info is not stored as claimed in <a href='https://www.post2youtube.com/privacy-policy'>privecy policy</a> 

do not restrict the suggested signup but for user \ password you need to configure clerk to send confirmation mail

<h3>should i ask for google oauth screen after sign up </h3>
no , first two steps do not required it so delay until required and user gain confidence and like the app

<h3>any relation between clerk and google oauth</h3>
Clerk and Google OAuth for accessing Google services (like YouTube API) are strictly separate processes that serve different purposes.

Here's a concise recap:

    Clerk: Manages the authentication and user identity within your Post2Video application. It handles who your users are, their sign-in methods (including Google Sign-in as an option), and their sessions within your app. Clerk verifies user identities.

    Google OAuth (for YouTube API): Manages authorization for your application to access a user's Google/YouTube account and data on their behalf. It's about what your app is permitted to do with the user's Google account (e.g., upload videos, manage playlists). This requires explicit consent from the user through Google's consent screen.

<h2>Code Structure</h2>
....

<h2>Demo</h2>
....

<h2>Points of Interest</h2>
<ul>
    <li>...</li>
   
</ul>

<h2>References</h2>
<ul>
    <li>...</li>
   
</ul>

