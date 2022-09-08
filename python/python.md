# Python

### 파이썬의 자료형
> 숫자, 문자열, 불
변수, 리스트, 튜플,
딕셔너리, 집합

<details>
<summary>숫자형</summary>
- 정수형, 실수, 컴퓨터 지수 표현 방식
8진수, 16진수

- 사칙연산
    ```
    a = 3   a + b   a * b    a / b
    b = 4   >>> 7   >>> 12   >>> 0.75
    ```
- 제곱
    ```
    a = 3   a ** b
    b = 4   >>> 81
    ```
- % 연산자
    ```
    7 % 3   3 % 7
    >>> 1   >>> 3
    ```
- / 연산자
    ```
    7 / 4       7 // 4
    >>> 1.75    >> 1
    ```
</details>

<details>
<summary>문자열 자료형</summary>

- 문자열에 따옴표 표함시키기
    ```
    food = "Python's favorite food is kimchi"
    say = '"Python is very easy." he says'
    food = 'Python\'s favorite food is kimchi'
    say = "\"Python is very easy.\" he says"
    ```
- 여러 줄로 이루어진 문자열
    ```
    line = "Life is too short\n You need Python"
    ```
    - 문자열 더해서 연결하기
    ```
    head = "Python"
    tail = "is fun!"
    head + tail
    >>> Python is fun!
    ```
- 문자열 곱하기
    ```
    a = "Python"
    a * 2
    >>> PythonPython
    ```
- 슬라이싱
    ```
    a = "Life is too short, You need Python"
    a[0:4]
    >>> LIFE

    a = "20220714Rainy"
    date = a[:8]
    weather = a[8:]
    >>> 20220714(date값)
    >>> Rainy(weatehr값)
    ```
- 문자열 포매팅
    ```
    "I ate %d apples." % 3
    >>> I ate 3 apples.

    number = 10
    day = "three"
    "I ate %d apples. so I was sick for %s days." % (number, day)
    >>> I ate 10 apples. so I was sick for three days.
    ```
- 정렬과 공백
    ```
    "%3s" % "hi"
    >>>  '   hi'

    "%-3sjoon." % "hi" 
    >>> 'hi   joon."
    ```
- 소수점 표현
    ```
    "0.4f" % 3.15923421
    >>> 3.1592
    ```
- 문자열 개수 세기
    ```
    a = "hobby"
    a.count('b')
    >>> 2
    ```
- 위치 알려주기
    ```
    a = "Python is best choice"
    a.find('b')
    >>> 10
    a.find('k')
    >>> -1
    ```
- 문자열 삽입
    ```
    a = ","
    a.join('abcd')
    >>> a,b,c,d
    ```
- 소문자를 대문자로 바꾸기
    ```
    a = "hi"
    a.upper()
    >>> HI
    ```
- 대문자를 소문자로 바꾸기
    ```
    a = "HI"
    a.lower()
    >>> hi
    ```
- 양쪽 공백 지우기
    ```
    a = " hi "
    a.strip()
    >>> hi
    ```
- 문자열 바꾸기
    ```
    a = "Life is too short"
    a.replace("Life", "Your leg")
    >>> Your leg is too short
    ```
- 문자열 나누기
    ```
    a = "Life is too short"
    a.split()
    >>> ['Life', 'is', 'too', 'short']

    a = "a:b:c:d"
    a.split(':')
    >>> ['a', 'b', 'c', 'd']
    ```
</details>

<details>
<summary>리스트 자료형</summary>
- [ ]로 감싸고 명령어로 수정이 가능하다.

- 인덱싱
    ```
    a = [1, 2, 3]
    a[0]
    >>> 1
    a[0] + a[2]
    >>> 4
    a[-1]
    >>> 3
    ```
- 더하기
    ```
    a = [1, 2, 3]
    b = [4, 5, 6]
    a + b
    >>> [1, 2, 3, 4, 5, 6]
    ```
- 반복
    ```
    a = [1, 2, 3]
    a * 3
    >>> [1, 2, 3, 1, 2, 3, 1, 2, 3]
    ```
- 수정(하나)
    ```
    a = [1, 2, 3]
    a[2] = 4
    >>> [1, 2, 4]
    ```
- 수정(연속)
    ```
    a = [1, 2, 4]
    a[1:2]
    >>> [2]
    a[1:2] = ['a', 'b', 'c']
    a
    >>> [1, 'a', 'b', 'c', 4]
    ```
- 제거(del)
    ```
    t1 = [1, 2, 'a', 'b']
    del t1[0]
    >>> [2, 'a', 'b']
    ```
- 제거([])
    ```
    a = [1, 'a', 'b', 'c', 4]
    a = [1 : 3] = []
    >>> [1, 'c', 4]
    ```
- 추가
    ```
    a = [1, 2, 3]
    a.append(4)
    >>> [1, 2, 3, 4]
    ```
- 정렬
    ```
    a = [1, 4, 3, 2]
    a.sort()
    >>> [1, 2, 3, 4]
    ```
- 뒤집기
    ```
    a = ['a', 'b', 'c']
    a.reverse()
    >>> ['c', 'b', 'a']
    ```
- 위치 반환
    ```
    a = [1, 2, 3]
    a.index(3)
    >>> 2
    a = [1, 2, 3]
    a.index(1)
    >>> 0
    ```
- 삽입
    ```
    a = [1, 2, 3]
    a.inset(0, 4)
    >>> [4, 1, 2, 3]
    ```
- 제거
    ```
    a = [1, 2, 3, 1, 2, 3]
    a.remove(3)
    >>> [1, 2, 1, 2, 3]
    ```
- 끄집어내기
    ```
    a = [1, 2, 3]
    a.pop()
    >>> [1, 2]
    ```
- 개수 세기
    ```
    a = [1, 2, 3, 1]
    a.count(1)
    >>> 2
    ```
- 확장
    ```
    a = [1, 2, 3]
    a.extend([4, 5])
    >>> [1, 2, 3, 4, 5]
    b = [6, 7]
    a.extend(b)
    >>> [1, 2, 3, 4, 5, 6, 7]
    ```
</details>

<details>
<summary>튜플 자료형</summary>
- 리스트 자료형과 같지만 ( )로 감싸고 명령어로 수정이 불가능하다. 고정된 값을 이용할때 사용한다.

```
b = (1, 2, 'a')
```
- 튜플 요소값 삭제시 오류
    ```
    t1 = (1, 2, 'a', 'b')
    del t1[0]
    >>> Traceback (innermost last):
    >>> File "", line 1, in ?del t1[0]
    >>> TypeError: object doesn't support item deletion
    ```
- 튜플 요소값 변경시 오류
    ```
    t1 = (1, 2, 'a', 'b')
    t1[0] = 'c'
    >>> Traceback (innermost last):
    >>> File "", line 1, in ?t1[0] = 'c'
    >>> TypeError: object doesn't support item assignmen
    ```
- 인덱싱
    ```
    t1 = (1, 2, 'a', 'b')
    t1[0]
    >>> 1
    t1[3]
    >>> b
    ```
- 슬라이싱
    ```
    t1 = (1, 2, 'a', 'b')
    t1[1:]
    >>>(2, 'a', 'b')
    ```
- 더하기
    ```
    t1 = (1, 2, 'a', 'b')
    t2 = (3, 4)
    t1 + t2
    >>> (1, 2, 'a', 'b', 3, 4)
    ```
- 곱하기
    ```
    t2 = (3, 4)
    t2 * 3
    >>> (3, 4, 3, 4, 3, 4)
    ```
</details>

<details>
<summary>딕셔너리 자료형</summary>
- 연관 배열(Associative array) 또는 해시(Hash)

```
dic = {'name':'pey', 'phone':'0119993323', 'birth': '1118'}
```

- 딕셔너리 쌍 추가하기
    ```
    a = {1: 'a'}
    a['name'] = "익명"
    >>> {1: 'a', 'name': '익명'}
    ```

- 딕셔너리 요소 삭제하기
    ```
    a = {1: 'a'}
    a['name'] = "익명"
    del a[1]
    >>> {'name': '익명'}
    ```

- 딕셔너리에서 Key 사용해 Value 얻기
    ```
    grade = {'pey': 10, 'julliet': 99}
    grade['pey']
    >>> 10
    grade['julliet']
    >>> 99
    ```

- 딕셔너리 만들 때 주의 사항
    ```
    a = {1:'a', 1:'b'}S
    >>> {1: 'b'}
    ```
- Key 리스트 만들기(keys)
    ```
    a = {'name': 'pey', 'phone': '0119993323', 'birth': '1118'}
    a.keys()
    >> dict_keys(['name', 'phone', 'birth'])
    ```
- Value 리스트 만들기(values)
    ```
    a = {'name': 'pey', 'phone': '0119993323', 'birth': '1118'}
    a.values()
    >>> dict_values(['pey', '0119993323', '1118'])
    ```
<details>