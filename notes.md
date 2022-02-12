---------- server setup --------------
1. create all files and ensure that the client is fully tied together
2. ensure that the server and database are connected properly
-------- post feature branch------------
1. build front end inputs, jquery setup, buttons etc.
2.  - create post on client
    - create post on server side to add data to database
---------- get feature branch ----------------
1. build front end request on client.js to always show the list of items on the dom
2. build back end GET ajax request 

--------- put feature branch ------------------
1. build client side put request
2. build server side put request and ensure it updates the server properly
3. call the get function to update the page once and item was deleted

-----------delete feature branch--------------
1. when a delete button is pressed, delete the item from the database
2. call the get function to update the page once an item was deleted