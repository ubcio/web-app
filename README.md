# Introduction 

Hello World. If you are an open source contributor looking to contribute to the front-end of ubc.io or if you are a 
member of the ubc.io front-end team then you are in the right place. If you are a member of the ubc.io back-end team 
or just someone interested in working on the back-end through pull requests then you probably want to head over to 
our [back-end repository](https://github.com/ubcio/server). 

### Contributing 

If you are putting effort into improving ubc.io but you aren't on any of the ubc.io teams, well that's ridiculous! If 
you are working to make ubc.io better then you deserve recognition, you should be on at least one of the teams and 
your name should be up on the website as one of the developers. This isn't hard to do, just contact us at ubcio.team@gmail.com
and we will get you on board. We also like to chill/code/learn together so if you believe in the project and want to improve 
it might as well do it together with the rest of us :)

If you don't have the most experience but you really want to contribute, awesome! We would love to have you, and we will 
even teach some cool technologies like Angular/Mongo/Express/Node/Firebase to help you get up to speed so you can start
improving the project! As you can see from our 3rd philosophy, positive environments are important to us, we want to grow 
as a group and don't mind at all if you don't have the most experience, but a positive attitude and an aptitude to help 
others is essential. Every member of the ubc.io team will be welcoming so please reach out to any of us at any time if 
you have any questions :)

### Philosophies
 
 1. As a group of students, together, we can build great things
 2. Students come first (no fees/ads, features that benefit students more will be given priority)
 3. Positive environments foster great ideas

# Project Setup

### Prerequisites

If you have a fresh install of Ubuntu (or another distro) then try and get the following things in the order
that they are listed (commands are given):

1. nvm
  - Node Version Manager
  - Makes dealing with Node versions a lot easier
  - Instructions to install: [here](https://github.com/creationix/nvm)
  - nvm may 'disappear' every time you close terminal, it is useful to add the following to your ~/.bashrc file: . ~/.nvm/nvm.sh
  
2. node 
  - easy to install once you have nvm
  - command: nvm install v4.1.2
  - command: nvm alias default 4.1.2  (to make it use this version as default)
  - note that it will be called nodejs and not node, which can cause problems, so add a soft link, command: sudo ln -s /usr/bin/nodejs /usr/bin/node
  
3. npm  
  - Node Package Manager
  - In this project, used to manage dependencies that are needed for development but not for production
  - command: sudo apt-get install npm
  
4. bower 
  - In this project, used to manage dependencies that are needed for production
  - command: sudo npm install -g bower
  
5. gulp
  - Gulp is used to do basic scripts, very useful, such as running tests or hosting the website and watching for file changes
  - command: sudo npm -g install gulp
 
You should have the following versions:
  - 'npm -v'   - 2.14.4
  - 'node -v'  - 4.1.2
  - 'bower -v' - Both 1.6.2 and 1.7.1 are working 

### Installation 

Now that you have the necessary packages installed, follow the simple steps below. 

1. git clone https://github.com/ubcio/webApp
2. npm install
3. bower install

#File Structure 

Base directory: client/

*Directories end with a '/' , files do not*

Directory / File | Meaning 
-----------------|--------
build/ | when you use gulp commands to build the project, this is where the build will go
client/ | most of the front-end including source code, tests, and images
client/assets/images/ | all images used on the website
client/src/ | all of the source code for the front-end
client/src/app/ | the code for all of 'tabs' of the website, eg. the courses page or the hackathons page
client/src/app/app.js | important file where the app's dependencies are specified as well as configuration
client/src/common/ | all of the code that will be used in multiple tabs of the website. This includes directives, filters, services, and others...
client/src/common/directives/ | all the custom angular directives used in the project. Angular directives are essentially HTML containers to make your HTML more expressive
client/src/common/filters/ | all the custom angular filters used in the project. Angular filters are used in 'pipe-chains'. Eg. someUnsortedList \| sort. (sort is the filter here)
client/src/common/interceptors/ | all the custom angular interceptors used in the project. Useful if you want to do something every time before something else (hence 'intercept'). Eg. before every http request I want to do...
client/src/common/services/ | all the custom angular services used in the project. Angular services act as a middle man for getting data from the API
client/src/common/header.tpl.html | the routing of the website. If you wanna add new 'tabs' to the navbar do that here 
client/src/scss/ | all the Sassy CSS used for the website. If you run gulp serve it will automatically transpile this to css in live time as you make changes!
client/src/scss/main.scss | most of the stylng for the website
client/src/vendor/ | all the front-end modules needed for the website to run. (maintained with bower)
client/test | all the tests
client/index.html | the HTML outline page that everything will be inserted into
node_modules/ | all the modules that are helpful for development, but not needed for production (eg. Gulp). (maintained with npm)
server/ | this will be deleted soon as we are moving our backend 
bower.json | all the dependencies needed for production. Always add to this file if you add new dependencies, and then run: 'bower install'
gulpfile.js | all the gulp scripts that are used for this project
package.json | all the dependencies needed for development. Always add to this file if you add new dependencies, and then run: 'npm install'


#Gulp Tasks 

Command | Effect
--------|--------
gulp | alias for 'gulp serve'
gulp serve | launches the web app locally on port 3000. If changes are made to any of the code, it will watch for this and live update so this is great for development
gulp build | makes a build and puts it in /build/tmp (does not minimize any of your code, not to be used for production)
gulp build:dist | builds the project for production, including minimizing all the code and optimizing the images. You can find the result in build/dist/
gulp serve:dist | serves the project from build/dist/, should be used after 'gulp build:dist' before deploying to make sure that the minimization did not mess up the code
