const bigIntToJSON = async (item) => {
  if (!Number.isSafeInteger(item)) {
   BigInt.prototype.toJSON = function() { return this.toString()  }
  }
}

module.exports = {
  bigIntToJSON: bigIntToJSON 
}