# AngularChallenge

Welcome to the Angular Challenge for Ticketleap.  Here at Ticketleap we've rolled our own custom issue tracker, called Sherlock, to try and deal with some of the problems we had with existing issue trackers.  In this repo, you'll find a stripped down version of the front-end portion of the application, along with some sample issue data sourced in part from the Sherlock API.  

## The Challenge
We've provided a bare-bones version of our search page, where typing in queries will dump raw JSON of matching issues from the sample data to the page.  The full version connects to a search backend within our site, but this version just draws from a fixture file in the repo.  

**Your first task** is to take these search results and make them more presentable.  Ideally there will be a table of results, with headers corresponding to the headers in the JSON file.  The table should be sortable and filterable, and should handle things like empty or misformed data gracefully.  


**Your second task** is to give us a detail view for when you click on a ticket in the results table.  It should nicely display all the details given on the ticket, 


### Additional info
The boilerplate for this app is from the angular-seed project and is a good example of an angular application structure.  That said, it has a bunch of stuff in it that's overkill for this challenge.  Don't worry about any of the end-to-end or unit test code for this challenge, or feel like you have to edit every file. 

At the end of the day this is about seeing how you solve open-ended problems, so even if you can't get everything 100% of the way there we still want to see what you've done.  Have an idea to make it work even better? Go ahead!  Explore, tweak, or show-off as much as you'd like.  

**Important!** It's okay to use external packages or get ideas from StackOverflow and similar sites, we do it all the time.  It's not, however, okay to blindly copy and paste snippets from any source into your code.  If you get ideas from somewhere else, be sure to leave a comment in the code telling us where you got it from.  If you use an external package or library, be prepared to defend why you think it's necessary.  
