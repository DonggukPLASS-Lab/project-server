<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold">
  <br><br><strong>PLASS 프로젝트 관리 페이이지 서버</strong>
</h1>

![Latest release](https://img.shields.io/github/v/release/DonggukPLASS-Lab/project-client?style=for-the-badge)

---
## 소개[![](./docs/imgs/pin.svg)](#introduction)
**프로젝트 관리 페이이지 클라이언트**라는 프로젝트는 동국대학교 PLASS 연구실 연구원들이 개발하는 프로젝트입니다.

---

## 목차[![](./docs/imgs/pin.svg)](#table-of-contents)
1. [개발 환경](#개발-환경)
2. [실행 방법](#실행-방법)
3. [개발 멤버](#개발-멤버)

---

## 개발 환경[![](./docs/imgs/pin.svg)](#dev-env)
- [Node.js](https://nodejs.org/)

## 실행 방법[![](./docs/imgs/pin.svg)](#install)
```bash

# Clone this repository
git clone `` 

# Go into the repository
cd project-server 

# Install dependencies
npm start

# .env create env file
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_ID=
MYSQL_PASS=
MYSQL_DB=
PORT=
TOKEN= 

# create public folder
mkdir public

# Run the app
$ npm start
```
> 💡 정상적으로 올리는지 확인: `open https://localhost:5110` 명령어를 사용하여 웹브라우저로 접속함 <br>
> 💡 Docker 빌드: `docker build . -t project-server:1.1`

## 개발 멤버[![](./docs/imgs/pin.svg)](#member)
- 동국대학교 PLASS 연구실 연구원

<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;">
END
</h1>