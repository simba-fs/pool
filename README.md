# pool
Data management, auto remove item after specified time. Just add it to a pool.

## Intall
```
npm i @simba.fs/pool
```

## Usage
```js
const Pool = require('@simba.fs/pool');
const user = new Pool(String);

user.add('Simba');
user.add('Peter');

console.log([...user]);
// [ 'Simba', 'Kenny' ]

user.clear();

console.log([...user]);
// []
```

## API
The `Pool` inherit from [Set](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set)  
All the methods in `Pool` except `add` are the same with those in `Set`  
The new `#add` check if the type of the item is the same with `#type`  
You can access the old `add` method by `#_add`  

> ### Notice
```js
const user = new Pool(String);
user.add(new String('Simba'));
// This won't work, the reason is as follows
console.log(typeof (new String('Simba')), user.type);
// object [Function: String]
// Ok, they are not ths same
```
