# Assignment 4
**Assignment and Code Blog entry due at 11:59pm on Monday, 11/12/2018**

**This assignment will not be demoed**

The goal of this assignment is to start to use Node.js and some of its built-in modules to build a very simple web server that serves static content.

You are provided with several files in `public/` implementing the Benny's List site we've been working on throughout the course.  If you opened the `index.html` file in your browser, you'd see the site you're familiar with by now, with all of its styling and, if you add your own `index.js` file, its interactions.  In addition to your familiar files, you're also provided with a file `404.html`, whose purpose we'll get to in a bit.

The file `server.js` is the file you'll work on for this assignment.  Your job is to complete that file to implement a very basic Node.js-based web server that satisfies the following requirements:

  * First, add your name and oregonstate.edu email address to the header comment in `server.js`, so the TA grading your assignment knows who you are.

  * The server can only use Node's built-in modules (e.g. `http`, `fs`, `path`, etc.), no third-party modules.  For example, you can't use Express for this assignment.

  * When your server is launched, it should listen for requests on the port specified by the environment variable `PORT`.  If `PORT` is not present in the environment, the server should listen on port 3000 by default.

  * When someone requests a path from your server that corresponds to the name of one of the files in `public/`, your server should respond with the contents of that file and a status code of 200.  For example, if you run your server on port 3000 on your laptop, you should be able to access the following files by entering the following URLs into your browser:
    * `public/index.html` - [http://localhost:3000/index.html](http://localhost:3000/index.html)
    * `public/index.js` - [http://localhost:3000/index.js](http://localhost:3000/index.js)
    * `public/style.css` - [http://localhost:3000/style.css](http://localhost:3000/style.css)
    * `public/404.html` - [http://localhost:3000/404.html](http://localhost:3000/404.html)
    * `public/benny.jpg` - [http://localhost:3000/benny.jpg](http://localhost:3000/benny.jpg)

    Note that if everything is hooked up correctly, your `index.html` and `404.html` pages will automatically have styles and interactions from `style.css` and `index.js` because the browser will see those files referenced from the HTML and make additional requests for those files.

  * When someone requests the root path (i.e. `/`) from your server, it should respond with the contents of `public/index.html` and a status code of 200.  For example, if you run your server on port 3000 on your laptop and visit [http://localhost:3000](http://localhost:3000) in your laptop's browser, your server should send the contents of `public/index.html`.

  * If someone visits a path on your site that does not correspond to the name of any of the files in `public/`, your server should respond with the contents of `public/404.html` and a status code of 404.  For example, if you run your server on port 3000 on your laptop and visit  [http://localhost:3000/thispagedoesnotexist](http://localhost:3000/thispagedoesnotexist) in your laptop's browser, your server should serve the contents of `public/404.html`.

  * Your server should read any given file in `public/` from disk only once.  In other words, the contents of each file should be cached in the server's memory after the first read, and the server should use this cache when responding with a file's contents instead of reading the file a second time.  You should add a `console.log()` statement immediately before each call to read a file to prove to yourself that each file is being read only once.

Note that when you request your page from a browser, in addition to making requests for the page itself, the CSS, and the client-side JS, your browser will also make a request for a file called `favicon.ico`.  This is normal, and you can respond to these requests just as you'd respond to a request for any other page on your site that didn't exist (i.e. by sending a 404 response).  The file `favicon.ico` is used to specify a thumbnail icon to be displayed in the browser tab in which your page is being viewed.  You could add a `favicon.ico` to your project to give it a custom browser tab image.

## Code Blog

Add an entry to your Code Blog reflecting on your experience with this assignment and publish the new entry.  Here are some questions you could answer (though these aren't the only ones):

  * What was challenging about the assignment, and what specific kinds of problems did you have.  How did you solve those problems?

  * What did you learn from the assignment?  Were there any special insights you had?  What did you find that you already knew?

  * What kinds of resources were helpful for completing the assignment?  Specific websites?  Lectures?  The class Piazza forum?  The TAs?  How did you use each of these resources?

  * What are one or two things you had to Google to complete the assignment?

## Submission

As always, we'll be using GitHub Classroom for this assignment, and you will submit your assignment via GitHub.  Just make sure your completed files are committed and pushed by the assignment's deadline to the master branch of the GitHub repo that was created for you by GitHub Classroom.  A good way to check whether your files are safely submitted is to look at the master branch your assignment repo on the github.com website (i.e. https://github.com/OSU-CS290-F18/assignment-4-YourGitHubUsername/). If your changes show up there, you can consider your files submitted.

In addition to submitting your assignment via GitHub, you must submit the URL to your code blog entry (e.g. http://web.engr.oregonstate.edu/~YOUR_ONID_ID/cs290/blog.html) via Canvas by the due date specified above.

## Grading criteria

Only changes to `server.js` will be considered when grading this assignment.  Changes to other files will be ignored, though you should add the contents of your `index.js` from Assignment 3 to `public/index.js` to get the full effect of the assignment (your `index.js` won't actually be graded).  Note also that when grading, we will not run `npm install` to install third-party modules, so if you used third-party modules in your solution, it probably won't work, and you'll get a bad grade.

The assignment is worth 100 points total:

  * 10 points: server listens on the port specified by the environment variable `PORT` or 3000 by default.

  * 50 points: server serves files from `public/` with status 200 when corresponding URL path is visited.

  * 10 points: server serves `public/index.html` with status 200 when the root URL path (`/`) is visited.

  * 20 points: server serves `public/404.html` with status 404 when a URL path not corresponding to any file in `public/` is visited.

  * 10 points: server reads files in `public/` exactly once and caches them.

In addition to your programming assignment grade, you will receive a pass/fail grade for your code blog entry, included in the code blog portion of your grade.
