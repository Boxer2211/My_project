

const dataIn = {
  "data": [
              {"user": "mike@mail.com", "rating": 20, "disabled": false},
              {"user": "greg@mail.com", "rating": 14, "disabled": false},
              {"user": "john@mail.com", "rating": 25, "disabled": true},
              {"user": "aohn@mail.com", "rating": 1, "disabled": false},
              {"user": "bohn@mail.com", "rating": 2, "disabled": true},
              {"user": "vohn@mail.com", "rating": 5, "disabled": false}
            ],

"condition": {
          "exclude": 
          [{"disabled": false}], 
          "sort_by": 
          ["user"]
        }
}

const conditionExclude = dataIn.condition.exclude[0]

const [keyExclude] = Object.keys(conditionExclude)
const [valueExclude] = Object.values(conditionExclude)
const [valueSort] = dataIn.condition.sort_by

const result = dataIn.data.filter(obj => {
  if(keyExclude == "disabled"){
    return obj.disabled == valueExclude
  } else if (keyExclude == "rating"){
    return obj.rating == valueExclude
  } else if (keyExclude == "user"){
    return obj.user == valueExclude
  }
}
)

if (valueSort == "rating"){
  result.sort(function(a, b){
  return a.rating - b.rating;
} 
)} else if (valueSort == "user") {
  result.sort(function(a,b){
    if (a.user > b.user) {
      return 1;
    }
    if (a.user < b.user) {
      return -1;
    }
    return 0;
  })
    
}




let finalResult = {"result": result}
console.log(result)
