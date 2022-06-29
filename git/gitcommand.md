# __git__
## __git 명령어 정리__
### 새로운 저장소 생성
* __$ git init__ : .git 하위 디렉토리 생성
### 저장소 복제/다운로드
* __$ git clone <https:.. URL>__ : 기존 소스 코드 다운로드/복제
* __$ git clone /로컬/저장소/경로__ : 로컬 저장소 복제
* __$ git clone 사용자명@호스트:/원격/저장소/경로__ : 원격 서버 저장소 복제
### 추가 및 확정
* __$ git add <파일명>__ : 커밋에 단일 파일의 변경 사항을 포함
* __$ git add *__ : 커밋에 단일 파일의 변경 사항을 포함
* __$ git add -A__ : 커밋에 파일의 변경 사항을 한번에 모두 포함
* __$ git commit -m "커밋 메시지"__ : 	커밋 생성
* __$ git status__ : 파일 상태 확인
### 가지치기 작업
* __$ git branch__ : 브랜치 목록
* __$ git branch <브랜치이름>__ : 새 브랜치 생성
* __$ git checkout -b <브랜치이름>__ : 	브랜치 생성 & 이동
* __$ git checkout master__ : master branch로 되돌아 옴
* __$ git branch -d <브랜치이름>__ : 브랜치 삭제
* __$ git push origin <브랜치이름>__ : 만든 브랜치를 원격 서버에 전송
* __$ git push -u < remote > <브랜치이름>__ : 새 브랜치를 원격 저장소로 push
* __$ git pull < remote > <브랜치이름>__ : 원격에 저장된 git 프로젝트의 현재 상태를 다운받고 + 현재 위치한 브랜치로 병합
### 변경 사항 발행
* __$ git push origin master__ : 변경사항 원격 서버에 업로드
* __$ git push < remote > <브랜치이름>__ : 커밋을 원격 서버에 업로드
* __$ git push -u < remote > <브랜치이름>__ : 	커밋을 원격 서버에 업로드
* __$ git remote add origin <등록된 원격 서버 주소>__ : 클라우드 주소 등록 및 발행
* __$ git remote remove <등록된 클라우드 주소>__ : 클라우드 주소 삭제
### 갱신 및 병합
* __$ git pull__ : 원격 저장소의 변경 내용이 현재 디렉토리에 가져와지고 병합됨
* __$ git push origin <브랜치이름>__ : 만든 브랜치를 원격 서버에 전송
* __$ git push -u < remote > <브랜치이름>__ : 새 브랜치를 원격 저장소로 push
* __$ git pull < remote > <브랜치이름>__ : 원격에 저장된 git 프로젝트의 현재 상태를 다운받고 + 현재 위치한 브랜치로 병합
* __$ git push origin master__ : 변경사항 원격 서버에 업로드
* __$ git push < remote > <브랜치이름>__ : 커밋을 원격 서버에 업로드
* __$ git push -u < remote > <브랜치이름>__ : 	커밋을 원격 서버에 업로드
* __$ git remote add origin <등록된 원격 서버 주소>__ : 클라우드 주소 등록 및 발행
* __$ git remote remove <등록된 클라우드 주소>__ : 클라우드 주소 삭제
* __$ git pull__ : 원격 저장소의 변경 내용이 현재 디렉토리에 가져와지고 병합됨
* __$ git merge <다른 브랜치이름>__ : 현재 브랜치에 다른 브랜치의 수정사항 병합
* __$ git add <파일명>__ : 	각 파일을 병합할 수 있음
* __$ git diff <브랜치이름><다른 브랜치이름>__: 변경 내용 merge 전에 바뀐 내용을 비교할 수 있음
###  태그tag 작업
* __$ git log__ : 현재 위치한 브랜치 커밋 내용 확인 및 식별자 부여됨
### 로컬 변경사항 return 작업
* __$ git checkout -- <파일명>__ : 로컬의 변경 사항을 변경 전으로 되돌림
* __$ git fetch origin__ : 원격에 저장된 git프로젝트의 현 상태를 다운로드