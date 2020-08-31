var ss = SpreadsheetApp.openByUrl("ใส่URL_google sheets");//"https://docs.google.com/spreadsheets/d/1Jk8ASdUeL-x8Y1F5_i08BTrFhyBZLkJ7yJK9y3-fDG8/edit"
var sheet = ss.getSheetByName("ใส่ชื่อแผ่น");//แผ่น10
      var result1 = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line": {
"altText": "Flex Message",
"contents": {
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Name",
            "color": "#ffffff66",
            "size": "sm"
          },
          {
            "type": "text",
            "text": "..........",
            "color": "#ffffff",
            "size": "xl",
            "weight": "bold"
          },
          {
            "type": "image",
            "url": "https://img-ha.mthcdn.com/rOPMh_gTeuPRkRYlFctuKMmhxms=/travel.mthai.com/app/uploads/2016/04/121648qh7dbccgw4ahw6we.jpg",
            "margin": "xl",
            "size": "5xl"
          }
        ]
      }
    ],
    "paddingAll": "20px",
    "backgroundColor": "#FF7D91",
    "spacing": "md",
    "height": "300px",
    "paddingTop": "22px"
  },
  "hero": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": " l ll llll llll llll llll  llllllll l ll llll llll llll llll  llll llll  ",
        "size": "md"
      }
    ]
  },
  "styles": {
    "body": {
      "separator": true
    }
  }
}}
        
   }
  }
 ]
};
        var result2 = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line": {"type": "flex",
"altText": "Flex Message",
"contents": {
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Name",
            "color": "#ffffff66",
            "size": "sm"
          },
          {
            "type": "text",
            "text": "..........",
            "color": "#ffffff",
            "size": "xl",
            "weight": "bold"
          },
          {
            "type": "image",
            "url": "https://mpics.mgronline.com/pics/Images/562000008340701.JPEG",
            "margin": "xl",
            "size": "5xl"
          }
        ]
      }
    ],
    "paddingAll": "20px",
    "backgroundColor": "#FF7D91",
    "spacing": "md",
    "height": "300px",
    "paddingTop": "22px"
  },
  "hero": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": " l ll llll llll llll llll  llllllll l ll llll llll llll llll  llll llll  ",
        "size": "md"
      }
    ]
  },
  "styles": {
    "body": {
      "separator": true
    }
  }
}}
        
   }
  }
 ]
};        
var result3 = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line": {"type": "flex",
"altText": "Flex Message",
"contents": {
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Name",
            "color": "#ffffff66",
            "size": "sm"
          },
          {
            "type": "text",
            "text": "..........",
            "color": "#ffffff",
            "size": "xl",
            "weight": "bold"
          },
          {
            "type": "image",
            "url": "https://travel.mthai.com/app/uploads/2018/03/5ab96b1e83ea88e7008b459f-750-563.jpg",
            "margin": "xl",
            "size": "5xl"
          }
        ]
      }
    ],
    "paddingAll": "20px",
    "backgroundColor": "#FF7D91",
    "spacing": "md",
    "height": "300px",
    "paddingTop": "22px"
  },
  "hero": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": " l ll llll llll llll llll  llllllll l ll llll llll llll llll  llll llll  ",
        "size": "md"
      }
    ]
  },
  "styles": {
    "body": {
      "separator": true
    }
  }
}}
        
   }
  }
 ]
};

var card ={
    "fulfillmentMessages":[
  
  {
    "platform": "line",
    "type": 4,
    "payload" : {
"line": {
    "altText": "Flex Message",
    "contents": {
      "contents": [{
      "type": "bubble",
      "size": "micro",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "image",
            "url": "https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "เลือก",
              "text": "สุ่ม"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "image",
            "url": "https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "เลือก",
              "text": "สุ่ม"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "image",
            "url": "https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "เลือก",
              "text": "สุ่ม"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "image",
            "url": "https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "เลือก",
              "text": "สุ่ม"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "image",
            "url": "https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "เลือก",
              "text": "สุ่ม"
            }
          }
        ]
      }
    }
      
      
      ],
      "type": "carousel"
        
  },
    "type": "flex"
        
      }
    }}
         ]
}
            
function Random(min_val, max_val) {
return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}
function Randoa(){
let a = [result1,result2,result3]
var output = Random(0,a.length-1);


return a[output]}

var aaa = Randoa()
console.log(aaa)

function doPost(e) {
   
  var data = JSON.parse(e.postData.contents)
  var userMsg = data.originalDetectIntentRequest.payload.data.message.text;
  var values = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
for(var i = 0;i<values.length; i++){
    
    if("สุ่ม" == userMsg ){
      
   


    var replyJSON = ContentService.createTextOutput(JSON.stringify(aaa)).setMimeType(ContentService.MimeType.JSON);
    return replyJSON;
}
     else if("หยิบไพ่" == userMsg ){
      
   


    var replyJSON = ContentService.createTextOutput(JSON.stringify(card)).setMimeType(ContentService.MimeType.JSON);
    return replyJSON;
}
  }
}
