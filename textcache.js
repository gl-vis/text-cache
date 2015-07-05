'use strict'

module.exports = textGet

var vectorizeText = require('vectorize-text')

var globals = window || process.global || {}
var __TEXT_CACHE  = globals.__TEXT_CACHE || {}
globals.__TEXT_CACHE = {}

function textGet(font, str) {
  var fontcache = __TEXT_CACHE[font]
   if(!fontcache) {
     fontcache = __TEXT_CACHE[font] = {}
   }
   var mesh = fontcache[text]
   if(!mesh) {
     mesh = fontcache[text] = vectorizeText(text, {
       triangles: true,
       font: font,
       textAlign: 'center',
       textBaseline: 'middle'
     })
   }
   return mesh
}
