## 문제 풀이

**1. 올바르지 못했던 풀이**

```js
console.log(parseInt(binary, 2).toString(8));
```

- **문제 상황** : 입력 길이가 1,000,000에 달하는 경우, JavaScript의 숫자 범위를 초과하게 되어 정확한 계산이 불가능하다.
- JavaScript에서 숫자는 IEEE 754 부동소수점 형식을 사용하며, 안전하게 표현할 수 있는 정수의 범위는 약 53비트
- 입력 길이가 1,000,000에 달하는 경우, 정수의 범위는 1비트 ~ 2^{1,000,000} - 1비트

**2. 올바른 풀이**

- 2진수를 3자리씩 묶어서 직접 8진수로 변환하기
- BigInt로 변환하여 풀이

## 학습한 문법

### 진법 표현을 위한 접두사

- 0b : 2진수
- 0o : 8진수
- 0x : 16진수

### padStart()

padStart는 **문자열의 길이를 지정된 길이로 맞추기 위해**, 문자열의 앞쪽에 특정 문자를 추가합니다.

**문법** : `string.padStart(targetLength, padString)`

- **targetLength**: 문자열이 맞춰질 최종 길이
- **padString**: (선택 사항) 문자열의 앞에 채워질 문자. 기본값은 " "(공백)

**예제**

```js
"123".padStart(5, "0"); // "00123"
"abc".padStart(6, "x"); // "xxxabc"
```

### match

match는 정규식을 사용하여 문자열에서 **패턴을 찾고, 매칭된 부분들을 배열로 반환**합니다.

**문법** : `string.match(regex);`

**예제**

```js
const binary = "110111001011";
const result = binary.match(/.{3}/g);
console.log(result); // ["110", "111", "001"]
```

> **매칭의 동작 원리**
>
> 1. 정규식 매칭은 문자열의 **처음부터 차례로 읽으며 패턴을 찾습니다.**
> 2. 매칭된 부분은 "그룹"으로 추출되며, 그 이후의 문자열부터 다시 매칭을 시도합니다.
> 3. {n,m}은 "최소 n개, 최대 m개"의 문자를 포함하도록 그룹을 설정합니다.
> 4. g 플래그는 문자열 전체에서 이 작업을 반복합니다.

### toString()

숫자, 객체, 배열 등을 문자열로 변환합니다. 10진수 숫자의 경우 **진법(base)**을 지정하여 문자열로 변환할 수 있습니다.

```js
const num = 255;

console.log(num.toString()); // "255" (기본값: 10진수)
console.log(num.toString(2)); // "11111111" (2진수)
console.log(num.toString(8)); // "377" (8진수)
console.log(num.toString(16)); // "ff" (16진수)
```

```js
const obj = {};
console.log(obj.toString()); // "[object Object]"

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

const date = new Date();
console.log(date.toString()); // "Mon Dec 19 2024 21:34:00 GMT+0900 (KST)"
```

### parseInt()

문자열을 **10진수로 해석**하여 숫자로 변환합니다.

**문법** : `parseInt(string, radix);`

- radix를 설정하면 radix진수 문자열을 10진수로 변환함

**예제**

**1. 문자열을 10진수로 변환**

```js
console.log(parseInt("42")); // 42
console.log(parseInt("   42abc")); // 42 (숫자가 아닌 부분은 무시)
console.log(parseInt("abc42")); // NaN (숫자로 시작하지 않음)
```

**2. 문자열을 특정 진법으로 변환**

```js
// 2진수 문자열을 10진수로 변환
console.log(parseInt("1101", 2)); // 13

// 8진수 문자열을 10진수로 변환
console.log(parseInt("377", 8)); // 255

// 16진수 문자열을 10진수로 변환
console.log(parseInt("ff", 16)); // 255
```
