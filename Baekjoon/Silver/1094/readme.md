# [1094] 막대기

## 문제 설명

길이가 64cm인 막대를 절반으로 자르고 남은 조각들을 활용하여 주어진 길이 Xcm를 만들기 위해 필요한 막대기의 최소 개수를 구하는 문제입니다.

## 문법

### 문자열을 숫자로 만드는 방법

1. **Number(), + 연산자** : 문자열을 숫자로 변환하는 표준 함수, 빈 문자열은 0으로 반환

   ```javascript
   Number("123"); // 123
   Number("123.45"); // 123.45
   Number("abc"); // NaN
   Number(""); // 0 (빈 문자열은 0으로 변환)
   ```

2. **~~ (비트 연산자)** : 소수점 이하를 버리고 정수로 변환합니다.

   - 비트 연산이므로 Math.floor보다 빠르게 실행
   - 숫자만 처리 가능하며, 숫자가 아닌 값을 입력하면 0을 반환

   ```javascript
   console.log(~~"123.45"); // 123
   console.log(parseInt("123.45")); // 123
   ```

3. **parseInt(), parseFloat()** : 문자열이 숫자/실수로 시작하면 변환, 이후 문자는 무시

   - parseInt의 경우 변환하는 진법 명시 가능
   - 문자열이 숫자로 시작하면 변환

   ```javascript
   parseInt("123abc", 10); // 123
   parseInt("   456", 10); // 456
   parseInt("123.45", 10); // 123 (소수점 이하 무시)
   parseInt("abc123", 10); // NaN
   ```

   ```javascript
   parseFloat("123.45"); // 123.45
   parseFloat("123.45abc"); // 123.45
   parseFloat("abc123.45"); // NaN
   ```

4. **Math.floor(), Math.ceil(), Math.round()** : 소수점 처리를 하여 문자열을 정수로 변환
