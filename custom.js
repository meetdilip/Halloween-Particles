tsParticles.load("tsparticles", {
    "fullScreen": {
      "zIndex": 1
    },
    "emitters": {
      "position": {
        "x": 50,
        "y": 100
      },
      "rate": {
        "quantity": 1,
        "delay": 0.15
      }
    },
    "particles": {
      "color": {
        "value": [
          "#1E00FF",
          "#FF0061",
          "#E1FF00",
          "#00FF9E"
        ]
      },
      "move": {
        "decay": 0.05,
        "direction": "top",
        "enable": true,
        "gravity": {
          "enable": true
        },
        "outModes": {
          "top": "none",
          "default": "destroy"
        },
        "speed": {
          "min": 50,
          "max": 100
        }
      },
      "number": {
        "value": 0
      },
      "opacity": {
        "value": 1
      },
   
      "size": {
        "value": 3,
        "animation": {
          "enable": true,
          "startValue": "min",
          "count": 1,
          "speed": 16,
          "sync": true
        }
      },

      "shape": {
        "type": [
          
          "image"
        ],
        "options": {
          "image": [
            {
              "src": "/bat.png",
              "width": 32,
              "height": 32,
              "particles": {
                "size": {
                  "value": 16
                }
              }
            },                      
         

            {
              "src": "pumpkin.png",
              "width": 32,
              "height": 32,
              "particles": {
                "size": {
                  "value": 16
                }
              }
            },



            {
              "src": "candle.png",
              "width": 32,
              "height": 32,
              "particles": {
                "size": {
                  "value": 16
                }
              }
            },
          
          ]
        }
      }
    },
    "responsive": [
      {
        "maxWidth": 1024,
        "options": {
          "particles": {
            "move": {
              "speed": {
                "min": 33,
                "max": 66
              }
            }
          }
        }
      }
    ]
  });