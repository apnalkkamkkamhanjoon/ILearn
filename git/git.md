# __git__
## __git의 정의__
#### _-깃(Git)은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다._<br>
## __git 명령어__
<details>
<summary>새로운 저장소 생성</summary>

```
$ git init
```
</details>

<details>
<summary>저장소 복제/다운로드</summary>

```
$ git clone <https:.. URL>	
$ git clone /로컬/저장소/경로
$ git clone 사용자명@호스트:/원격/저장소/경로
```
</details>

<details>
<summary>추가 및 commit</summary>

```
$ git add <파일명>
$ git add *
$ git add -A
$ git commit -m "커밋 메시지"
$ git status
```
</details>

<details>
<summary>branch 작업</summary>

```
$ git branch
$ git branch <브랜치이름>
$ git checkout -b <브랜치이름>
$ git checkout master
$ git branch -d <브랜치이름>
$ git push origin <브랜치이름>
$ git push -u < remote > <브랜치이름>
$ git pull < remote > <브랜치이름>
```
</details>

<details>
<summary>변경 사항 발행</summary>

```
$ git push origin master
$ git push < remote > <브랜치이름>
$ git push -u < remote > <브랜치이름>
$ git remote add origin <등록된 원격 서버 주소>
$ git remote remove <등록된 클라우드 주소>
```
</details>
<details>
<summary>갱신 및 병합</summary>

```
$ git pull
$ git merge <다른 브랜치이름>
$ git add <파일명>
$ git diff <브랜치이름><다른 브랜치이름>
```
</details>

<details>
<summary>tag 작업</summary>

```
$ git log
```
</details>

<details>
<summary>로컬 변경사항 return 작업</summary>

```
$ git checkout -- <파일명>
$ git fetch origin
```
</details>
