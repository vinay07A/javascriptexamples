let json = {
    "series": [
          {
              "type": "ColumnSeries",
              "name": "Name",
              "dataFields": {
                  "valueY": "revenue",
                  "categoryX": "name"
              },
              "tooltipText": "[bold]{categoryX}: {valueY.formatNumber('#,###.00a')}[/]"
          }
      ],
    "series2": [
          {
              "type": "ColumnSeries"
          }
      ]
  }
  
  function updateValue(...args){
    let keys = args[0]
    const updateValue = args[1];
     let result = (keys ||[]).reduce((result, targetKey, index) => {
          if(index === keys.length - 1){
            if(Array.isArray(result[targetKey])){
              return 'array';
            }else if(result[targetKey] && typeof result[targetKey] === 'object'){
               return 'json'
            }else{
              return 'keyvalue'
            }
          }
       return result[targetKey] || {}
      }, json)
    return result;
  }
  
  const updatedJsonObj = updateValue(['series','0','dataFields'],"CANADA")
  console.log(updatedJsonObj)