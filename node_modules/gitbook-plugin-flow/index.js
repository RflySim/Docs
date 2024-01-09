var path = require('path');
var phantom = require('phantom');
var Q = require('q');

function processBlock(blk) {
  var deferred = Q.defer();

  var book = this;
  var code = blk.body;
  var config = book.config.get('pluginsConfig.flow', {});

  var width = blk.kwargs['width'];

  phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
      var pagePath = path.join(__dirname, 'renderer.html');
      page.open(pagePath).then(function(status) {
        var result = page.evaluate(function(code, config, width) {
          return render(code, config, width);
        }, code, config, width);
        ph.exit();
        deferred.resolve(result);
      });
    });
  });

  return deferred.promise;
}

module.exports = {
  blocks: {
    flow: {
      process: processBlock
    },
    flowchart: {
      process: processBlock
    }
  },
  hooks: {
    // Init plugin and read config
    "init": function() {
      if (!Object.keys(this.book.config.get('pluginsConfig.flow', {})).length) {
        this.book.config.set('pluginsConfig.flow', {});
      }
    },
    // Before parsing markdown
    "page:before": function(page) {
      // Get all code texts
      flows = page.content.match(/^```flow((.*\n)+?)?```$/igm);
      // Begin replace
      if (flows instanceof Array) {
        for (var i = 0, len = flows.length; i < len; i++) {
          page.content = page.content.replace(
            flows[i],
            flows[i].replace(/^```flow/, '{% flow %}').replace(/```$/, '{% endflow %}'));
        }
      }
      return page;
    }
  }
};