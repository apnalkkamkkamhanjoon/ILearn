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