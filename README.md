## Additional considerations if I had more time

- Obviously the next order of business would be the buttons. The reddit api gave me more trouble than I anticipated and simply ran out of time for them.
- After that I think I would move the useEffect hook I'm currently using to get the posts into context and limit it to around 100.
- Then I would bring in some kind of pagination logic like react-paginate and browse through that with the previous and next buttons limiting the display to 4. I think this will ultimately be more efficient than multiple small calls to the API every time we want to look at 4 new posts.
