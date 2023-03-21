# Git 저장소 사용하기

### 파일 스테이지에 올리기
`git add <파일이름>` or `git add .`으로
일부 또는 전체 파일을 추가

만약 잘못 올렸으면
`git reset`이나  `git reset <파일이름>`을 입력해 취소할 수 있다.

### 파일 커밋하기
`git commit -m "<설명>"`을 입력합니다.<br/>
이때 커밋메시지는 영어로 작성하면 좋습니다.

커밋을 취소할려면 `git reset HEAD^`로 커밋을 되돌릴 수 있습니다.

### 원격 저장소에 넣기
`git remote add origin <주소>`로 원격 저장소 위치를 알려줍니다.

`git push origin master`로 원격 저장소에 넣어줍니다.

### 브렌치 만들기
처음 Git을 사용하면 기본적으로 master 브랜치가 생깁니다.<br/>
작업자들은 자신만의 브렌치를 만들어 자신의 브렌치에서 작업을 합니다.<br/>
그리고 작업이 완료되면 master에서 병합(MERGE)를 해줍니다.

`git checkout -b <브랜치 이름>`은 브랜치를 만들고 브렌치로 이동하는 명령어입니다.<br/>
`git checkout -b feature/userProfile` 이런 식으로 카테고리 내 브랜치를 생성할 수도 있다.

