function encrypt() {
    var inputString = document.getElementById("originalText").value
    var key = document.getElementById("n").value
    var inputArray = inputString.split("")
    var indexPosition = 0;
    var processedArrayGrid  = new Array(10);
    var outputString = "";
    var indexPosition = 0;
    var indexPositionIncreasing = true

    if(key == null || key == 0) {
        alert('key should not be zero/null')
    } else {
        //creating the encryption array
        for(var i = 0; i < inputArray.length; i++) {
            processedArrayGrid[i] = new Array(key.toNumber);
            processedArrayGrid[i][indexPosition] = inputArray[i];
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
        console.table(processedArrayGrid)
        //printing out the ciphertext
        for(var j = 0; j < key; j++) {
            for(var i = 0; i < inputArray.length; i++) {
                outputString += processedArrayGrid[i][j] == undefined  ? "":processedArrayGrid[i][j];
            }
        }

        document.getElementById("encryptedText").value = outputString;
        }
}

function decrypt() {
    //getting the ciphertext
    var cipherText = document.getElementById("encryptedText").value;
    const cipherTextLength = cipherText.length;
    //getting key
    var key = document.getElementById("n").value;
    //splitting into array
    const cipherTextArray = cipherText.split("");
    var decryptedString = "";
    //creating the array
    var decryptedArray = new Array(cipherTextArray.length)
    var indexPosition = 0;
    var indexPositionIncreasing = true

    if(key == null || key == 0) {
        alert('key should not be zero/null')
    } else {
        //filling the decrypted array with placeholders - '*'
        for(var i = 0; i < cipherText.length; i++) {
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
        //creating the array
        var index = 0
        for(var j = 0; j < key; j++) {
            for(var i = 0; i < cipherTextLength; i++) {
                if(decryptedArray[i][j] == '*' && index < cipherTextLength) {
                    decryptedArray[i][j] = cipherTextArray[index];
                    index++;
                }
            }
        }
        //printing out
        for(var i = 0; i < cipherTextLength; i++) {
            for(var j = 0; j < key; j++) {
                decryptedString += decryptedArray[i][j] == undefined ? "":decryptedArray[i][j];
            }
        }
        console.table(decryptedArray)
        document.getElementById("originalText").value = decryptedString;
    }
}