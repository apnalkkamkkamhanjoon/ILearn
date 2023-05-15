# REST API
> REST의 원리를 따르는 API

## 규칙
1. URI는 동사보다는 명사를, 대문자보다는 소문자를 사용하여야 한다.
```
BAD : https://github.com/apnalkkamkkamhanjoon/Test
GOOD : https://github.com/apnalkkamkkamhanjoon/test
```
2. 마지막에 슬래시 (/)를 포함하지 않는다.
```
BAD : https://github.com/apnalkkamkkamhanjoon/test/
GOOD : https://github.com/apnalkkamkkamhanjoon/test
```
3.  언더바 대신 하이폰을 사용한다.
```
BAD : https://github.com/apnalkkamkkamhanjoon/test_today
GOOD : https://github.com/apnalkkamkkamhanjoon/test-today
```
4. 파일확장자는 URI에 포함하지 않는다.
```
BAD : https://github.com/apnalkkamkkamhanjoon/photo.jpg
GOOD : https://github.com/apnalkkamkkamhanjoon/photo
```
5. 행위를 포함하지 않는다.
```
BAD : https://github.com/apnalkkamkkamhanjoon/delete-post/1
GOOD : https://github.com/apnalkkamkkamhanjoon/post/1
```