{"changed":true,"filter":false,"title":"js.js","tooltip":"/static/script/js.js","value":"function calculateGST() {\n    var wtStr =document.form.weight.value;\n    if (!wtStr)\n        wtStr = '0';\n    var htStr = document.form.height.value;\n    if (!htStr)\n        htStr = '0';\n    var weight = parseFloat(wtStr);\n    var height = parseFloat(htStr);\n    document.form.BodyMassIndex.value = weight + height;","undoManager":{"mark":20,"position":23,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":28},"action":"insert","lines":["alert(\"I am an alert box!\");"],"id":1}],[{"start":{"row":0,"column":28},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":2,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["function calculateGST() {","    var priceStr =document.newItemForm.price.value;","    if (!priceStr)","        priceStr = '0';","    var price = parseFloat(priceStr);","    document.newItemForm.gst.value = price / 11;","}"],"id":3}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":38},"action":"remove","lines":["newItemForm"],"id":4},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["f"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["o"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["r"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["m"]}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":37},"action":"remove","lines":["price"],"id":5},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["f"]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["e"]},{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":13},"action":"remove","lines":["price"],"id":6},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["f"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["e"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":14},"action":"remove","lines":["price"],"id":7},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["f"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["e"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":13},"action":"remove","lines":["price"],"id":8},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["f"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["e"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":13},"action":"remove","lines":["price"],"id":9},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["f"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["e"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":30},"action":"remove","lines":["price"],"id":10},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["f"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["e"]},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":24},"action":"remove","lines":["newItemForm"],"id":11},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["f"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["o"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["r"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["m"]}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"remove","lines":["e"],"id":12},{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"remove","lines":["c"]},{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"remove","lines":["i"]},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"remove","lines":["r"]},{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"remove","lines":["p"]}],[{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["f"],"id":13},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["e"]},{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"remove","lines":["1"],"id":14},{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"remove","lines":["1"]}],[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["0"],"id":15},{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":[","]},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["0"]}],[{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"remove","lines":["0"],"id":16},{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"remove","lines":[","]}],[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":[","],"id":17}],[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"remove","lines":[","],"id":18}],[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["."],"id":19},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["0"]},{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":["7"]}],[{"start":{"row":3,"column":0},"end":{"row":7,"column":41},"action":"remove","lines":["    var feeStr =document.form.fee.value;","    if (!feeStr)","        feeStr = '0';","    var fee = parseFloat(feeStr);","    document.form.gst.value = fee / 0.07;"],"id":20},{"start":{"row":2,"column":25},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":25},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["alert(\"I am an alert box!\");","","function calculateGST() {","    ","}"],"id":22},{"start":{"row":0,"column":0},"end":{"row":9,"column":56},"action":"insert","lines":["function calculateBMI() {","    var wtStr =document.form.weight.value;","    if (!wtStr)","        wtStr = '0';","    var htStr = document.form.height.value;","    if (!htStr)","        htStr = '0';","    var weight = parseFloat(wtStr);","    var height = parseFloat(htStr);","    document.form.BodyMassIndex.value = weight + height;"]}],[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"remove","lines":["I"],"id":23},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"remove","lines":["M"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"remove","lines":["B"]}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["G"],"id":24},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["S"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["T"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":21},"end":{"row":0,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1569306682427}