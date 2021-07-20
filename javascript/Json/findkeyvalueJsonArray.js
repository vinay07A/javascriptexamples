


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
  function getJsonData(configuration){
          for(let prop in configuration) {
              if(Array.isArray(configuration[prop])){
                getJsonData(configuration[prop])
              }
              else if(configuration[prop] && typeof(configuration[prop]) == "object"){
                  getJsonData(configuration[prop])
              } else {
                 console.log(prop,"----",configuration[prop])
              }
          }
  }
  
  
  getJsonData(json);