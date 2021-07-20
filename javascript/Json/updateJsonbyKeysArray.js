

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
              result[targetKey] = updateValue;
              return result[targetKey]
          }
  
          return result[targetKey] || {}
      }, json)
    console.log("updatedjson--->",json)
  }

updateValue(['series','0','dataFields'],"CANADA")
