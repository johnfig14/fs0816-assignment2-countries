const countries = require('world-countries');

module.exports = {

  add(x = 0, y = 0) {
    return x + y;
  },


// all(loadAll = false, index = 0, pageSize = 15) {
//   if(loadAll) return countries;
//
// },

  all(settings = { loadAll: false, index: 0, pageSize: 15 }){
    // check if load all is true
    if (settings.loadAll == true) {
      return countries;
    }
    else {
      const startingIndex = settings.index * settings.pageSize;
      return countries.slice(startingIndex, settings.pageSize);
    }
    
  },
//filter,
//get,
// etc

};
