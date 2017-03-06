#React Fed Exercise

#### This repository creates a photo gallery of photos from NASA using the following technologies. React, Node, Express, Expect for testing, and the Flickr API for the photos generated on the page. Credit for open source code utilized in this is denoted in the LICENSE file

## How to clone this repository

Open up your terminal or command prompt and create a folder to host this file

```
cd Desktop
mkdir practiceFolder && cd practiceFolder
```

Next we will clone this git repository

```
git clone https://github.com/kccarr/React-Fed-Exercise.git
```

If you check the status you will see that you have a lot of uncommitted or new code. We will add all the new files and then commit them to our git repository and save them for later to deploy
```
git status
git add .
git commit -am "first commit"
```

You will need to remove the remote location where the code is stored on Github as my remote is the one currently identified in my files. You will change them to your own remote or repository. Let's identify the remote and then remove it:

```
git remote -v
git remote rm [insert remote destination name]
```
Here is an additional link explaining the process: https://help.github.com/articles/removing-a-remote/

Finally lets start a new repository and push our code to Github. Go on Github and start a new repository. Then enter the following into your terminal:

```
git remote add origin https://github.com/[your username]/[the repo name].git
git push -u origin master
```



## Demo

http://toinfinityandbeyond.herokuapp.com/

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:XXXX`](http://localhost:XXXX) in a browser.

The 'XXXX' above signifies a 4 digit number. Depending on your workstation it can vary. Common numbers that show up are 3000, 3001, 8080, 8081, etc.


## How to test our code?

To test type in the following after you have installed the code and ran it successfully once:

```
npm test
```

If you notice any failed tests that is a good starting point to inspect an issue and improve your code!

## How do I deploy to Heroku?

Make sure you sign up for a free account on Heroku.com. Once you have the proper credentials you can start the process of deploying your app online. Login first and make sure you have already initialized git.

You can check if you initialized git by typing in:
```
git status
```

Login into heroku and then create a "dyno" which is a space online when you can deploy your code.
```
heroku login
heroku create
```
Now push your code to heroku

```
git push heroku master
```

Now go check out your fully deployed website. Happy coding!


