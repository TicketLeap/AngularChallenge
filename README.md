# AngularChallenge

Welcome to the Angular Challenge for Ticketleap.  Here at Ticketleap we've rolled our own custom issue tracker, called Sherlock, to try and deal with some of the problems we had with existing issue trackers.  In this repo, you'll find a stripped down version of the front-end portion of the application, along with some sample issue data sourced in part from the Sherlock API.  

## Getting Started

The first thing you'll need is `git`.  Chances are since you've made it this far in the git repo you have at least some familiarity with git.  If you need some help, though, you can check out [this](http://rogerdudler.github.io/git-guide/) slightly profane guide to getting started.  

To get going once you've cloned into the repo, make sure you have both `nodejs`, `npm` and `bower` on your system.  From the challenge directory, run: 

```
npm install 
```
And make sure everything runs smoothly.  This will get angular installed for you.  Once all is well, run 

```
npm start 
```

to get a lightweight server going to test your project out.  Going to `localhost:8000/sherlock/` in your browser should bring up your work. **If you have trouble getting off the ground** let us know.  We're not testing how well you can debug an installation process, and we haven't tested this setup on every system out there.  

## The Challenge
We've provided a bare-bones version of our search page, where typing in queries will dump raw JSON of matching issues/tickets (we use the terms interchangeably) from the sample data to the page.  The full version connects to a search backend within our site, but this version just draws from a fixture file in the repo.  

**Your first task** is to take these search results and make them more presentable.  Ideally there will be a table of results, with headers corresponding to the headers in the JSON file.  The table should be sortable and filterable, and should handle things like empty or misformed data gracefully.   

***Hint:*** At Ticketleap, we refer to issues/tickets by their project short code (i.e. our new Ticketleap product's short code is TLE) and their number, rather than the system id.  For example, the ticket in sample data with `id: 25` is the fourteenth ticket in the 'TLX' project, so we'd call it **TLX-14**.   


**Your second task** is to give us a detail view for when you click on a ticket in the results table.  It should nicely display all the details given on the given ticket, and have a way to enter comments on the ticket.  Don't worry about making the comments stick around after a page refresh (that would require some work on the server-side), but multiple comments entered on a single ticket should appear in the order they're submitted.

## Turning it in

Once you have something you're happy with, the easiest way to turn it in is to create a private repo using either GitHub (if you have a plan that allows for private repos), BitBucket (who allows unlimited private repos), or any other code hosting solution.   [This documentation](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) might come in handy if you are having trouble switching around your remote origins. 

### Additional info
The boilerplate for this app is from the angular-seed project and is a good example of an angular application structure.  That said, it has a bunch of stuff in it that's overkill for this challenge.  Don't worry about any of the end-to-end or unit test code for this challenge, or feel like you have to edit every file. 

At the end of the day this is about seeing how you solve open-ended problems, so even if you can't get everything 100% of the way there we still want to see what you've done.  Have an idea to make it work even better? Go ahead!  Explore, tweak, or show-off as much as you'd like.  

**Important!** It's okay to use external packages or get ideas from StackOverflow and similar sites, we do it all the time.  It's not, however, okay to blindly copy and paste snippets from any source into your code.  If you get ideas from somewhere else, be sure to leave a comment in the code telling us where you got it from.  If you use an external package or library, be prepared to defend why you think it's necessary.  

