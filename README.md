
# getType v1.0.2 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Returns the type of a given value.

```coffee
getType = require "getType"

getType 0                    # => Number

getType []                   # => Array

# SPECIAL CASES #

getType undefined            # => Void

getType null                 # => Null

getType NaN                  # => Nan

getType Object.create(null)  # => PureObject
```

The types used in special cases:

- [`Void`](https://github.com/aleclarson/Void)

- [`Null`](https://github.com/aleclarson/Null)

- [`Nan`](https://github.com/aleclarson/Nan)

- [`PureObject`](https://github.com/aleclarson/PureObject)
