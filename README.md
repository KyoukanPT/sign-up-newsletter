<h2>Sign Up Newsletter</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

- git clone https://github.com/KyoukanPT/sign-up-newsletter.git

<hr>

<h3>Node Installation</h3>
 
- Download and install <a href="https://nodejs.org/en/download"> Node.js </a> <br> 

<hr>

<h3>Project Folder Directory (Terminal)</h3>

- npm install<br>
- npm install <a href="https://expressjs.com/en/starter/installing.html"> Express </a> <br>
- npm install <a href="https://www.npmjs.com/package/body-parser"> Body Parser </a> <br>
- npm install <a href="https://www.npmjs.com/package/@mailchimp/mailchimp_marketing"> Mailchimp Marketing </a> <br>
- npm install <a href="https://www.npmjs.com/package/request"> Request </a> <br>
- node app.js <br>

<hr>

<h3>How to get and use your API Key + Audience ID</h3>
- Go to this website https://mailchimp.com/ and Register/Sign in<br>
- Follow the instructions of this website to get your API Key - https://support.checkfront.com/hc/en-us/articles/115004180154-Mailchimp-Setup-API-Key<br>
- Paste your API Key on line 35, where it says "YOUR_API_KEY"<br>
- The Server Prefix are the last 3 characters of your API Key. <strong>For example : us6</strong>. Paste the prefix on line 36, where it says "YOUR_SERVER_PREFIX"<br>
- Follow the instructions of this website to get your Audience ID - https://mailchimp.com/help/find-audience-id/<br>
- Paste your Audience ID on line 42, where it says "YOUR_AUDIENCE_ID"<br><br>

<strong>DO NOT SHARE YOUR KEYS AND ID!</strong>

<hr>

<h3>How to use the App?</h3>
<p> - After running the app with Node, go to <a href="http://localhost:3000/">Localhost</a>. </p>
<p> - The user/client should fill the form with their data and click on the sign up button.</p> 
<p> - After the sign up is accepted, they will be redirected to a success page that informs them they have successfully subscribed.</p> 
<p> - In the backend, after each successful subscription request, the subscriber's data will be saved in the user's (the newsletter admin) subscriber's list.</p> 
