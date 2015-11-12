var stringifyJSON = function(obj) {
  var jsonObject = [];
  var values = [];
  var keys = [];
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null)
        return obj;
  else if (typeof obj === 'string')
        return '"' + obj + '"';
  else if (Array.isArray(obj)) {
        if (obj[0] === undefined)
            return '[]';
        else {
            obj.forEach(function(arr) {
                values.push(stringifyJSON(arr));
            });
            return '[' + values + ']';
        }
    }
  else if (obj instanceof Object) {
        keys = Object.keys(obj);
        keys.forEach(function(key) {
            var keyOut = '"' + key + '":';
            var keyValOut = obj[key];
            if (keyValOut instanceof Function || typeof keyValOut === undefined)
                jsonObject.push('');
            else if (typeof keyValOut === 'string')
                jsonObject.push(keyOut + '"' + keyValOut + '"');
            else if (typeof keyValOut === 'boolean' || typeof keValOut === 'number' || keyValOut === null)
                jsonObject.push(keyOut + keyValOut);
            else if (keyValOut instanceof Object) {
                jsonObject.push(keyOut + stringifyJSON(keyValOut));
            }
        });
        return '{' + jsonObject + '}';
    }
};
console.log(stringifyJSON({name: "Niti", age: 26, country: "India", colors: ["red", "blue", "pink"]}));