## Description
### :penguin: :penguin: :penguin:

### Express REST example

RESTful API example with [Express](http://expressjs.com/)  

## Deploy

Run locally in develop mode:  
`npm install`  
`gulp`  
And test a browser-sync proxied version on `localhost:9000`  

Alternatively you can:  
`npm run serve` or `npm run serve:debug`  
And play at `localhost:8000`

## API
Here are the default routes:  

Route | Type | Return | Payload | Description
--- | --- | --- | --- | ---
*/*       | **[GET]**     | Object  | n/a | Returns an object with a responseText holding HTML markup
*/*       |  **[POST]**   | Object  | {postVar: *string*} | Returns an object with a responseText holding HTML markup (returns an error if postVar = null)
*/*       | **[ALL OTHER VERBS]**       | Object  | n/a | Returns an error object with a responseText holding HTML markup

### Result examples
Return object structure on success:
```js
{
 readyState: 4, 
 responseText: "<div><p>Your language is: en-US,en,fr-CA,fr</p><p>You sent a: GET</p></div>", 
 status: 200, 
 statusText: "OK"
}
```  

Return object structure on error:
```js
{
 readyState: 4, 
 responseText: "<div><p>No postVar passed!</p></div>", 
 status: 501, 
 statusText: "Not Implemented"
}
```

## License
The MIT License (MIT)
Copyright (c) 2016 Samuel Cousin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
