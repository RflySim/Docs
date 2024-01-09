# gitbook-plugin-flow

[![NPM](https://nodei.co/npm/gitbook-plugin-flow.png)](https://nodei.co/npm/gitbook-plugin-flow/)

[flowchart.js](https://github.com/adrai/flowchart.js) plugin for [GitBook](https://github.com/GitbookIO/gitbook)

## Installation

    $ npm install gitbook-plugin-flow

book.json add the plugin

```
{
  "plugins": ["flow"]
}
```

## Features

* Support HTML, PDF, EPUB output(make sure your gitbook support SVG)
* Support ```flow code block quote
* Multi code style support

## Configuration

book.json add the flowchart.js options

```
"pluginsConfig": {
  "flow": {
    "line-color": "red"
  }
}
```

## Usage

To include a sequence diagram, just wrap your definition in a "flow" code block. For example:

<pre lang="no-highlight"><code>```flow
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e

```
</code></pre>


Also you can put in your book block as

```
{% flow %}
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
{% endflow %}
```

In addition you can use these code

```
{% flowchart %}
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
{% endflowchart %}
```

### Extend the width

```
{% flow width=770 %}
```


## Reference and Thanks

This project learn from:

* [midnightSuyama/gitbook-plugin-flowchart](https://github.com/midnightSuyama/gitbook-plugin-flowchart).
* [nsdont/gitbook-plugin-new-flowchart](https://github.com/nsdont/gitbook-plugin-new-flowchart).
* [lyhcode/gitbook-plugin-plantuml](https://github.com/lyhcode/gitbook-plugin-plantuml).