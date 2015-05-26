# react-either

> Higher-order component to conditionally render a component or an alternative component


## Usage

```
$ npm install --save minitrue
```

```js

const either = require('react-either');

either(Component, AltComponent, function(props) {

    // ...

    // return true to render Component; otherwise render AltComponent
    return cond ? true : false;
});
```


## License

MIT
