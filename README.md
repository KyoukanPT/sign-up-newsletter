<h2>Sign Up Newsletter</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

1 - git clone https://github.com/KyoukanPT/sign-up-newsletter.git

<hr>

<h3>Initial Setup</h3>

2 - Download and install <a href="https://nodejs.org/en/download"> Node.js </a> <br>
3 - Terminal: npm install<br>
4 - Terminal: node app.js

<hr>

<h3>How to get and use your API Key + Audience ID</h3>
5 - Go to this website https://mailchimp.com/ and Register/Sign in<br>
6 - Follow the instructions of this website to get your API Key - https://support.checkfront.com/hc/en-us/articles/115004180154-Mailchimp-Setup-API-Key<br>
7 - Paste your API Key on line 35, where it says "YOUR_API_KEY"<br>
8 - The Server Prefix are the last 3 characters of your API Key. <strong>For example : us6</strong>. Paste the prefix on line 36, where it says "YOUR_SERVER_PREFIX"<br>
9 - Follow the instructions of this website to get your Audience ID - https://mailchimp.com/help/find-audience-id/<br>
10 - Paste your Audience ID on line 42, where it says "YOUR_AUDIENCE_ID"<br><br>

<strong>DO NOT SHARE YOUR KEYS AND ID!</strong>

<hr>

<h3>Browser (After the 4 first steps + getting key and id)</h3>
11 - <a href="http://localhost:3000/">http://localhost:3000/</a>
