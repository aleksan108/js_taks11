
const resButton = document.getElementById('resButton');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');

const arr1 = ['js', 'css', 'html'];
const arr2 = [0, 1, false, 2, undefined, '', 3, null];
const arr3 = [[[1,2], [1,2,3], [1,2,3,4]]];


resButton.addEventListener("click", getResult);

function getResult(){
    let sortedArr = [];
    for (let i = 0; i < arr2.length; i++){
        if (arr2[i]){
            sortedArr.push(arr2[i]);
        }
    }

    let indexValue = 0;
    for (let i = 0; i < arr3[0].length; i++){
        if (arr3[0][i].length > 3){
            indexValue = i;
            break;
        }
    }


    result1.textContent = 'Первый элемент массива: ' + arr1[0];
    result2.textContent = 'Отфильтрованный массив: ' + sortedArr;
    result3.textContent = 'Индекс, элемента, чья длина >3: ' + indexValue;
}

