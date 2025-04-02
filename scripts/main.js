// html 문서를 조작할 것
// document(화면)에서 'h1' 태그를 찾아서
// text 내용을 변경함
// html이 먼저 출력되고 자바스크립트가 작동되기 때문에
// html 제일 밑에 자바스크립트 넣기

// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!'

// 변수 선언 (시작점은 소문자, 단어가 바뀔 때마다 대문자)
// var myVariable
// 값 할당
// myVariable = 10
// 변수 선언 + 할당
var myVariable = 10
// 개발자도구 - console
console.log(myVariable)

// ES6 이전
var myV1 = 1
// ES6 이후
let myV2 = 2
const myV3 = 3

// 변수를 사용하거나 값을 넣을 때는 앞에 var 안씀
myV1 = 10
// var myV1 = 100

// let 변수는 재선언 X
// myV2 = 20
// let myV2 = 200

// const 변수는 재할당 X, 재선언 X
// 상수값(변화 없는 값)을 쓸 때 const 씀
// myV3 = 30
// const myV3 = 300

let a = 'bob'
let b = 10
let c = true
let d = [1, 2, 3]
// object는 파이썬의 class와 비슷함
let e = {
    'apple': '사과',
}
// console.log(a, b, c, d, e)

// console.log("Hello " + "world!")

let VarA = '10'
let VarB = 10

// == 값만 비교, === 타입까지 비교
console.log(VarA == VarB) 
console.log(VarA === VarB)
console.log(VarA !== VarB)

// Array (데이터 추가 = append와 같음, 제거 가능)
let myArray = []
myArray.push('hello')
myArray.push('world')
console.log(myArray)
myArray.pop()
console.log(myArray)
console.log(myArray[0])

// Object
// 선언은 딕셔너리처럼, 사용은 class와 비슷
let myObject = {
    'apple': '사과',
}
// 키에 접근하기 위해서는 오브젝트명.키값
console.log(myObject.apple)

myObject.grape = '포도'
console.log(myObject)

// 조건문 () 안에는 조건식, {} 안에는 if문 안쪽의 블럭을 표시
let iceCream = 'Vanila'
if (iceCream === 'chocolate'){
    console.log('I love chocolate ice cream!')
} else if (iceCream == 'Vanila') {
    console.log('Vanila')
} else {
    console.log('Awwwww')
}

// 반복문
console.log('---while---')
let i = 0
// i가 5보다 작다면 i를 1 증가시켜주세요.
while (i < 5) {
    console.log(i)
    // i = i + 1 (파이썬 문법)
    i++
}

// () 안에 ; ; 로 세개의 공간 나눔
// 첫번째는 변수 초기화 / 두번째는 조건식 / 세번째는 적용식
console.log('---for1---')
for (let i = 0 ; i<5 ; i++) {
    console.log(i)
}

let arrayA = ['a', 'b', 'c']

console.log('---for2---')
for (let i = 0 ; i < arrayA.length ; i++) {
    console.log(arrayA[i])
}

console.log('---for in---')
// let은 변수를 설정하기 위해 붙여야 함
for (let index in arrayA) {
    console.log(index, arrayA[index])
}

console.log('---for of---')
for (let item of arrayA) {
    console.log(item)
}

console.log('---forEach---')
// arrayA.forEach(함수A)
// ArrayA에 들어간 데이터에 각각 ()안의 함수를 적용 (mab함수와 비슷)
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})



// 함수 -------------------------------------
// def func():
function multiply(num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multiply(2, 3))


// 함수 표현식 : 함수를 만들고 그걸 변수에 넣음, 호출 할 때는 변수명으로 호출
let multiply2 = function(num1, num2) {
    return num1 * num2
}
console.log(multiply2(3, 4))


// 화살표함수 : funtion 대신 => 사용, ()인풋을 가지고 {}를 실행해
let multiply3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply3(2, 5))

// 화살표 함수 생략1
// {}안에 코드가 return 하는 문장 하나만 있다면
// {}, return을 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(5, 3))

// 화살표 함수 생략2
// ()안에 매개변수가 하나만 있다면
// ()를 생략 가능
let cube = num => num ** 3
console.log(cube(10))


// 이벤트 -------------------------------------

// 이벤트 onclick
// document = html파일 자체, querySelector = 특정 조건의 엘리먼트를 찾을 때 쓰는 문법법
// 어디를 클릭해도 alert가 나오도록
// .onclick 클릭 했을 때만 반응
// document.querySelector('html').onclick = function (){
//     alert('hello')
// }


// 이벤트 (이벤트리스너)
let myH1 = document.querySelector('h1')
// <element>.addEventListener('무슨일이 일어났을 때', 무슨행동을 할지 함수로 작성)
// e에는 이벤트가 실행된 순간의 정보가 기록
myH1.addEventListener('click', function(e){
    // alert('hihi')
    console.log(e)
    console.log(e.clientX, e.clientY)
})

// 이미지 태그가 여러개가 있었다면 제일 위에 있는 값을 찾아줄 것
// 여러개가 있는 경우 이미지 태그 안에 class값을 설정해서
// Img.클래스명 으로 지정해줄 수 있음
let myImg = document.querySelector('Img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src')

    if (src === 'images/duck.webp'){
        myImg.setAttribute('src', 'images/firefox-icon.png')
    } else{
            myImg.setAttribute('src', 'images/duck.webp')
        }
})


let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function(e){
    // console.log(e)
    console.log(myInput.value)
    // input박스 안에 있는 값을 출력
    // 연관검색어
})


// 비동기 코드 -------------------------------------
console.log('hi')
setTimeout(function(){console.log('1234')}, 1000)
// 몇 초 이후에 무슨 일을 시킬 때 쓰는 함수 (콜백함수)
console.log('bye')
// 위에서 아래로 동작되지만, 동작이 늦게 나오게 설정한 함수(비동기 함수)가 있다면
// 늦게 나오는 함수를 건너뛰고 다른 함수를 진행하고 그 이후에 비동기 함수 진행행


// request -------------------------------------
// jsonplaceholder
// 뭔말인지 모르겠음
const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// 비동기 처리 방법 1 (promise)
let response = fetch(URL)
    .then(response => response.json())
// fetch().then = ~ 하고나서 ()를 해주세요
    .then(json => console.log(json))
console.log(response)
// ......


// 비동기 처리 방법 2 (asynd await)
async function fetchTodo(url) {
    let res = await fetch(url)
    // await를 쓰려면 async를 앞에 써야함
    // 밑의 코드를 실행하기 전에 현재 코드가 진행될 때까지 기다렸다가.
    let result = await res.json()
    // return result
}
console.log(fetchTodo(URL))



// li태그를 가진 모든 것들을 가져올것
let liArray = document.querySelectorAll('li')
// console.log(liArray)

// li태그 요소를 하나하나 꺼내서 함수 적용
liArray.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e.target)
        // .target 이 이벤트가 발생된 그 엘리먼트
    })
})