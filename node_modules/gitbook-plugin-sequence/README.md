# gitbook-plugin-sequence

[![NPM](https://nodei.co/npm/gitbook-plugin-sequence.png)](https://nodei.co/npm/gitbook-plugin-sequence/)

[js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams) plugin for [GitBook](https://github.com/GitbookIO/gitbook)

## Installation

    $ npm install gitbook-plugin-sequence

book.json add the plugin

```
{
  "plugins": ["sequence"]
}
```

## Features

* Support HTML, PDF, EPUB output(make sure your gitbook support SVG)
* Support ```flow code block quote
* Multi code style support

## Configuration

The default config is ``"theme": "simple"``.

book.json add the js-sequence-diagrams options

```
"pluginsConfig": {
  "sequence": {
    "theme": "simple"
  }
}
```

## Usage


To include a sequence diagram, just wrap your definition in a "sequence" code block. For example:

<pre lang="no-highlight"><code>```sequence
    Title: Here is a title
    A->B: Normal line
    B-->C: Dashed line
    C->>D: Open arrow
    D-->>A: Dashed open arrow
```
</code></pre>

Also you can put in your book block as

```
{% sequence %}
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
{% endsequence %}
```

### Extend the width

```
{% sequence width=770 %}
```

This project learn from:

* [midnightSuyama/gitbook-plugin-flowchart](https://github.com/midnightSuyama/gitbook-plugin-flowchart).
* [midnightSuyama/gitbook-plugin-sequence-diagrams](https://github.com/midnightSuyama/gitbook-plugin-sequence-diagrams).
* [massanek/gitbook-plugin-js-sequence-diagram](https://github.com/gmassanek/gitbook-plugin-js-sequence-diagram).
* [nsdont/gitbook-plugin-new-flowchart](https://github.com/nsdont/gitbook-plugin-new-flowchart).
* [lyhcode/gitbook-plugin-plantuml](https://github.com/lyhcode/gitbook-plugin-plantuml).
