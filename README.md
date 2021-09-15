# hugo-solstice-theme

## Getting Started

Dependencies:


| Program | Version |
|---------|---------|
| node.js | ~ 12.22.0 |
| npm | ~ 7.11 |
| Hugo | > 0.76 |
| Git | > 2.31 |
| Make | > 4.3 |


Install dependencies, build assets and start a webserver:

```bash
make run
```

To run yarn watch and hugo server at the same time:

In one terminal:

```bash
yarn run watch
```

Once above process is done, in another terminal:

```bash
make run
```

### Getting Started (Windows)

To install our dependencies on Windows, replace the previous `npm install`  with this one:

```bash
set NODE_ENV=production && npm install
```

#### Alternative Solution

Install [win-node-en](https://github.com/laggingreflex/win-node-env) globally and then install our dependencies by following the steps from our [Getting Started](https://github.com/EclipseFdn/hugo-solstice-theme#getting-started) section.

```bash
yarn add -g win-node-env
```

### Known Issues

Versions of Hugo 0.60 and beyond do not support raw HTML in markdown files by default. To enable this feature, unsafe HTML rendering can be enabled in the Goldmark engine in the site configuration. This is not recommended as it exposes rendered content vulnerable to injected content on the site.


## Documentation

- <https://eclipsefdn-hugo-solstice-theme.netlify.com/>

## Bugs and Feature Requests

Have a bug or a feature request? Please search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/eclipsefdn/hugo-solstice-theme/issues/new).

## Author

**Christopher Guindon (Eclipse Foundation)**

- <https://twitter.com/chrisguindon>
- <https://github.com/chrisguindon>

## Trademarks

* Jakarta and Jakarta EE are Trademarks of the Eclipse Foundation, Inc.
* Eclipse® is a Trademark of the Eclipse Foundation, Inc.
* Eclipse Foundation is a Trademark of the Eclipse Foundation, Inc.

## Copyright and License

Copyright 2018-2020 the [Eclipse Foundation, Inc.](https://www.eclipse.org) and the [hugo-solstice-theme authors](https://github.com/eclipsefdn/hugo-solstice-theme/graphs/contributors). Code released under the [Eclipse Public License Version 2.0 (EPL-2.0)](https://github.com/jakartaee/jakartaee.github.io/blob/src/LICENSE).
