define(["struct"], function(struct){
  "use strict";

  var format2 = function(input) {
    if(!this.parse(input)) {
      input = input || {};
      input.format = 2;
      this.fill(input);
    }
  };

  format2.prototype = new struct("cmap format 2", [
    ["format", "USHORT", "subtable format"]
  ]);

  return format2;
});
