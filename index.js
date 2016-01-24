var svg2png = require('svg2png')

module.exports = setup
module.exports.consumes = ['importexport']
function setup(plugin, imports, register) {
  var ie = imports.importexport
  
  ie.registerExportProvider('image/svg+xml', 'image/png', function* (document, snapshot) {
    // convert snapshot to html
    var svg = yield ie.export(snapshot.id, 'image/svg+xml')
      , buffer = new Buffer(svg, 'utf8')
    return yield svg2png(buffer)
  })
  
  register()
}