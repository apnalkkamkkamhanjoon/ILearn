# git merge
깃의 서로 다른 브랜치를 병합하고 싶을 때가있다.<br />
이럴 때 merge를 하고싶은 브랜치로 가 <br />
git merge명령어를 적어준다.<br />
예를 들어 master 브랜치에 dev 브랜치에서 커밋한 내용을 merge하고 싶다<br />
master 브랜치로 git checkout 명령어를 통해 이동한 후<br />
git merge 해주면 된다.
```
> git checkout master
> git merge
```
__이떄 중요한 점은 dev브랜치가 커밋이 되어있어야하는 상황이다.__
