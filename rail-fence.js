function encrypt() {
    var inputString = document.getElementById("inputString").value
    var n = document.getElementById("n").value
    var inputArray = inputString.split("")
    var indexPosition = 0;
    var processedArrayGrid  = new Array(10);
    var outputString = "";
    var indexPosition = 0;
    var indexPositionIncreasing = true

    //creating the encryption array
    for(var i = 0; i < inputArray.length; i++) {
        processedArrayGrid[i] = new Array(n.toNumber);
        processedArrayGrid[i][indexPosition] = inputArray[i];
        if(indexPositionIncreasing == true) {
            indexPosition += 1;
        } else {
            indexPosition -= 1;
        }
        if(indexPosition == n - 1) {
            indexPositionIncreasing = false;
        } else if(indexPosition == 0) {
            indexPositionIncreasing = true;
        }
        
    }
    console.table(processedArrayGrid)
    //printing out the ciphertext
    for(var j = 0; j < n; j++) {
        for(var i = 0; i < inputArray.length; i++) {
            outputString += processedArrayGrid[i][j] == undefined  ? "":processedArrayGrid[i][j];
        }
    }

    document.getElementById("outputString").innerHTML = outputString;
}

function decrypt() {
    //getting the ciphertext
    var encryptedString = document.getElementById("outputString").innerHTML;
    const encryptedStringLength = encryptedString.length;
    //getting key
    var key = document.getElementById("n").value;
    //splitting into array
    const encryptedStringArray = encryptedString.split("");
    var decryptedString = "";
    //creating the array
    var decryptedArray = new Array(encryptedStringArray.length)
    var indexPosition = 0;
    var indexPositionIncreasing = true

    //filling the decrypted array with placeholder
    for(var i = 0; i < encryptedString.length; i++) {
        decryptedArray[i] = new Array(key.toNumber);
        decryptedArray[i][indexPosition] = '*';
        if(indexPositionIncreasing == true) {
            indexPosition += 1;
        } else {
            indexPosition -= 1;
        }
        if(indexPosition == key - 1) {
            indexPositionIncreasing = false;
        } else if(indexPosition == 0) {
            indexPositionIncreasing = true;
        }
    }
    
    var index = 0
    for(var j = 0; j < key; j++) {
        for(var i = 0; i < encryptedStringLength; i++) {
            if(decryptedArray[i][j] == '*' && index < encryptedStringLength) {
                decryptedArray[i][j] = encryptedStringArray[index];
                index++;
            }
        }
    }
    for(var i = 0; i < encryptedStringLength; i++) {
        for(var j = 0; j < key; j++) {
            decryptedString += decryptedArray[i][j] == undefined ? "":decryptedArray[i][j];
        }
    }
    console.table(decryptedArray)
    document.getElementById("decryptedString").innerHTML = decryptedString;
}