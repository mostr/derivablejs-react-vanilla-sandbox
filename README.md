###Run 
`npm install && npm start` then in the browser visit default url [http://localhost:3000](http://localhost:3000) for React version or append `?vanilla` ([http://localhost:3000?vanilla](http://localhost:3000?vanilla)) to get vanilla JS version.

### Issue

Both (React and vanilla) versions do the same thing: load list of emails on "load" button click and mark given email as read by clicking on it.

Now, in React version `emailsAsList` derivation calculation is called multiple times (way too many I guess) even on single click, while on vanilla version it works as expected (called once at first - empty list, then when emails get loaded and later on every email click).

##### Why is it so? 
Shouldn't derivation calculations be re-used if not changed in react version too?


