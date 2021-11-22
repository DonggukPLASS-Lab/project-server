# 문제은행 서버

해당 프로젝트는 프로젝트 관리 페이지 서버라며 동국대학교 PLASS 연구실 연구원들이 개발하는 프로젝트입니다.

## 개발 화경
> Node.js

## 설치
```bash

# 프로젝트 github에서 받음
git clone `` 
cd problembank-server

# 필요하는 packge 설치
npm start

# .env 파일을 만들어서 환경변수를 추가함
vim .env
======= 
# .env 파일 내용을 다음과 같음.
# DB연결하기 위한 정보
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_ID=
MYSQL_PASS=
MYSQL_DB=


# 서버 PORT
PORT=

# 원하는 signture 입력
TOKEN= 
======

# public 폴더
mkdir public



```
## License
[MIT](https://choosealicense.com/licenses/mit/)