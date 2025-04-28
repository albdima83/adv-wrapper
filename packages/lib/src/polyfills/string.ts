if (!String.prototype.trimStart) {
  String.prototype.trimStart = String.prototype.trimLeft;
}
if (typeof String.prototype.endsWith !== "function") {
  String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}
