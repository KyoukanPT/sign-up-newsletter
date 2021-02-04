<h2>Sign Up Newsletter</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

1 - git clone https://github.com/KyoukanPT/sign-up-newsletter.git

<hr>

<h3>Project Folder Directory (Terminal)</h3>

2 - npm install express<br>
3 - npm install body-parser<br>
4 - npm install @mailchimp/mailchimp_marketing<br>
5 - node app.js

<hr>

<h3>How to get and use your API Key + Audience ID</h3>
6 - Go to this website https://mailchimp.com/ and Register/Sign in<br>
7 - Follow the instructions of this website to get your API Key - https://support.checkfront.com/hc/en-us/articles/115004180154-Mailchimp-Setup-API-Key<br>
8 - Paste your API Key on line 35, where it says "YOUR_API_KEY"<br>
9 - The Server is the last 3 characters of your API Key. <strong>For example : us6</strong>. Paste it on line 36, where it says "YOUR_SERVER"<br>
10 - Follow the instructions of this website to get your Audience ID - https://mailchimp.com/help/find-audience-id/<br>
11 - Paste your Audience ID on line 42, where it says "YOUR_AUDIENCE_ID"<br><br>

<strong>DO NOT SHARE YOUR KEYS AND ID!</strong>

<hr>

<h3>Browser (After installing every requested npm modules + updating API Key and ID values inside app.js + starting node (step 5))</h3>
12 - <a href="http://localhost:3000/">http://localhost:3000/</a>

<hr>

<h3>Live App</h3>
https://kyoukanpt-sign-up-newsletter.herokuapp.com/
