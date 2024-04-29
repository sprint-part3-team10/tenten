# SP4 Synergy(The Julge) Project-TenTen(Team10)

![logo](https://github.com/sprint-part3-team10/tenten/assets/79882248/65511083-87a4-4680-a4a5-35cd21e446c5)

> 코드잇 스프린트 : 프론트 엔드 4기 Part3 - 10팀(tenten)
>
> 프로젝트명 : Synergy(The Julge)
>
> 개발 기간: 2024.4.15 ~ 5.1
>
> URL: https://sp4-team16-rolling.netlify.app

### 💡팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ggjiny">
      <img width=200px src="https://github.com/Hooni07/tenten_the_julge/assets/79882248/23ae1cc3-185d-44ba-90b6-0a716749c4b9" alt="이모지_예진"/><br />
      <sub><b>[팀장] 김예진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/eugene9851">
      <img width=200px src="https://github.com/Hooni07/tenten_the_julge/assets/79882248/4ec1fc5d-417b-43b1-89b8-8b441ae01b5e" alt="이모지_유진"/><br />
      <sub><b>[팀원] 이유진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/mynameJS">
      <img width=200px src="" alt="이모지_재성"/><br />
      <sub><b>[팀원] 이재성</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/forestream">
      <img width=200px src="https://github.com/Hooni07/tenten_the_julge/assets/79882248/35f79daf-4658-42b0-8593-52a81061502e" alt="이모지_한빈"/><br />
      <sub><b>[팀원] 조한빈</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/Hooni07">
      <img width=200px src="https://github.com/Hooni07/tenten_the_julge/assets/79882248/725fce17-c230-49e6-9402-b5d22cdce2ef" alt="이모지_태훈"/><br />
      <sub><b>[팀원] 하태훈</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 💡 기술 스택

| 분류                         | 기술                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 프레임워크                   | ![Next.js](https://img.shields.io/badge/Next.js-4B32C3?style=for-the-badge&logo=next.js&logoColor=white) ![App Router](https://img.shields.io/badge/App%20Router-CA4245?style=for-the-badge&logo=react%20router&logoColor=white)                                                                                                                                                                                  |
| 언어                         | ![TypeScript](https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)                                                                                                                                                                                                                                                                                                 |
| Styles                       | ![CSS Modules](https://img.shields.io/badge/CSS%20Modules-4B32C3?style=for-the-badge&logo=CSSModules&logoColor=white) ![SCSS](https://img.shields.io/badge/SCSS-cc6699?style=for-the-badge&logo=Sass&logoColor=white)                                                                                                                                                                                             |
| HTTP                         | ![Fetch](https://img.shields.io/badge/Fetch-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                                                                                                                                                                                                                                |
| 코드 컨벤션                  | ![Eslint](https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white) ![Stylelint](https://img.shields.io/badge/Stylelint-263238?style=for-the-badge&logo=Stylelint&logoColor=white)                                                                                  |
| 협업 Tools                   | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white) ![Github](https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white) |
| 배포                         | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white)                                                                                                                                                                                                                                                                                                             |
| 라이브러리 및 추가 Extension | ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=white) ![ClassNames](https://img.shields.io/badge/ClassNames-4285f4?style=for-the-badge&logo=googledocs&logoColor=white) ![React Date Picker](https://img.shields.io/badge/React%20Date%20Picker-FF4154?style=for-the-badge&logo=React&logoColor=white)                               |

## 💡 폴더 구조

![폴더구조1](https://github.com/Hooni07/tenten_the_julge/assets/79882248/b969ef80-2ce6-496e-8338-49b5f87ac77f) ![폴더구조2](https://github.com/Hooni07/tenten_the_julge/assets/79882248/9a3ef664-31b7-4c24-8264-39eb68f63a7a)

## 💡 역할분담

### 🎾 김예진(팀장)

#### 🖥️ 페이지 & 컴포넌트 구현 내용

##### <공고 리스트 페이지>

- 전체 공고 개수 표시, 공고 호버시 box-shadow
- **관련 기능**

  - **맞춤 공고**

    - 로그인하지 않은 상태거나 사장일 경우 보여주지 않음
    - 알바로 로그인했을 때 내 프로필을 등록하지 않았을 경우, 선호 지역을 선택하지 않았을 경우 내 프로필로 이동해 등록할 수 있게 박스 표시
    - 선호 지역이 있을 경우 해당하는 지역 공고 중 마감되지 않은 공고를 최대 8개를 보여주지만 8개가 채워지지 않았을 경우 인근 지역 데이터도 보여줌
    - 인근 지역에도 공고가 없을 경우 공고가 없다는 문구 표시
    - 한 번에 3개가 보이고 시간이 지나면 하나씩 넘어간다(테블릿, 모바일에서는 한번에 2개보여줌)

  - **정렬 및 상세 필터**

    - **정렬**
      - 4가지로 정렬 가능
    - **상세 필터**
      - 위치, 시작일, 금액에 값을 입력하면 그에 해당하는 데이터를 보여주고 선택한 필터 개수에 따라 버튼에 개수 표시
      - 자유로운 주소 선택, 삭제. 선택한 주소는 표시해서 구분
      - 사용자 경험을 고려해 시작일은 오늘로 설정 되어있고, 초기화해서 지난 공고를 볼 수도 있음

  - **페이지네이션**
    - offset, limit 값을 받아와서 페이지 번호를 누를 때마다 데이터를 받아온다
    - 사용자 입장을 고려해 화살표를 눌렀을 시 다음 섹션(최대 7개의 페이지를 보여줄 경우 1~7에서 화살표를 누르면 8로)으로 이동한다
    - 페이지 이동시 공고의 상단으로 이동해 사용자가 보기 편하도록 설정

##### <공고 검색 페이지>

- 검색창에 값을 입력하고 엔터를 누르면 쿼리값을 이용해 검색어에 해당하는 공고를 보여주는 페이지

##### <추가 구현 사항>

- **스피너**
  - 사용자 입장을 고려해 로딩되는 동안 나타나는 화면요소 구현

### 🎾 이유진

#### 🖥️ 페이지 & 컴포넌트 구현 내용

##### <내 프로필 페이지>

- 프로필데이터, 알바의 신청내역 GET
- userId, token이 없거나, userType이 employee가 아닐 경우 메인페이지로 redirect
  - 등록된 프로필이 없으면 '프로필을 등록하세요' 렌더링
  - 프로필은 있으나 신청 내역이 없으면 '신청내역이 없어요' 렌더링
- **사용 컴포넌트 및 기능**

##### <공고 상세보기 페이지(사장)>

- 사장의 지원자 내역 GET
- 지원자가 있으면 table 렌더링, 없으면 신청자가 없어요 렌더링

##### <공통 컴포넌트>

- **AlarmSet, AlarmContainer Component**
  - 알람 데이터 GET, 알람 읽으면 읽음처리 PUT
  - 알람 읽거나, 알람아이콘을 누르면 클라이언트 사이드에서 재렌더링
  - 알람 데이터에서 알바 본인이 취소한 알람은 filter
  - 읽지 않은 알람 유무에 따라 알람 아이콘 다르게 구현
  - getFromTime함수 구현
- **Label Component**
  - 위치라벨과 상태라벨을 공통 컴포넌트로 추상화
- **NoList Component**

##### <추가 사항>

- **ApplyTable Component**

  - 반응형 구현
  - userType에 따른 데이터 다루기
  - 사장이 승인하기/거절하기 버튼 누르면 모달 띄우기, 모달의 ‘예’ 누르면 status 바꾸기
    - 클라이언트 사이드에서 바로 바뀌도록 구현
  - 사장이 승인하기 버튼 누르면 pending중인 다른 지원들은 거절 라벨로 보이도록 구현
    - 클라이언트 사이드에서 바로 바뀌도록 구현
  - 페이지네이션 연결

- **MyProfile Component**

### 🎾 이재성

#### 🖥️ 페이지 & 컴포넌트 구현 내용

- react-hook-form 라이브러리를 활용한 입력값 관리

##### <내 프로필 등록 및 수정 페이지>

##### <내 가게 등록 및 수정 페이지>

##### <내 가게 공고 등록 및 수정 페이지>

##### <공통 컴포넌트>

- **Header Component**

### 🎾 조한빈

#### 🖥️ 페이지 & 컴포넌트 구현 내용

##### <내 가게, 공고 상세보기(알바) 페이지>

- 가게상세와 공고상세에 공통적으로 쓰일 Box 구현
  - 버튼 갯수나 쓰임새의 경우의 수가 많아서 버튼을 children으로 배치
  - 로그인을 통해 저장된 cookie를 바탕으로 하여, 유저 종류 및 가게의 마감 여부 등에 따라 버튼을 렌더링 하도록 조건식 작성
- 등록한 공고는 무한스크롤 방식으로 로드
  - Intersection Observer 사용, 클라이언트 컴포넌트화

##### <공통 컴포넌트>

- **Modal Component**

##### <추가 사항>

- 프로젝트 배포 및 배포 시 발생하는 오류 검토

### 🎾 하태훈

#### 🖥️ 페이지 & 컴포넌트 구현 내용

##### <로그인, 회원가입 페이지>

- react-hook-form을 활용하여 로그인, 회원가입 페이지 제작
- **setCookies 생성**
  - 로그인 시, u_id(userID), s_id(shopID), userType, token이 cookie에 자동으로 설정할 수 있도록 setCookies 생성
    - 기본 쿠키(알바생, 사장님 공통) : u_id, userType, token 생성
    - userType === employer : 내 가게 등록 여부에 따라 cookie에 s_id 추가

##### <공통 컴포넌트>

- **Input Component**
  - label 등 설정 가능
  - label의 내용에 따라 input box에 ‘원’, ‘시간’ 단위 추가
  - type === password : eyeIcon 추가, 비밀번호가 보이도록 설정 가능
- **Button Component**
  - props에 색상, 크기, 내용, button type 설정 가능
- **TypeSelector Component**
  - 회원가입에서 userType 설정
  - 알바생 : employee, 사장님 : employer
- **Toast Component**
  - 로그인, 회원가입에서 성공, 경고 여부 출력
  - 기본 Toast 유지 시간 : 1.5초
- **Footer Componet**
  - 반응형 동작 구현

##### <추가 사항>

- Header에서 로그아웃 시, 로그아웃 진행
  - 로그아웃 버튼 클릭 시, modal 화면을 통하여 다시한번 로그아웃 여부 확인
- 로그인 시 Header 구성 요소 조건 추가
  - userType, token 쿠키를 받아와서 token 존재 여부 및 userType에 따라 버튼 결정
- 검색 후 다른 페이지 접근 시 검색창의 내용 초기화
  - usePathname() 사용
- README 파일 작성

## 👀 페이지 preview

#### 메인 페이지

- 로그인 x

- 알바생 로그인

- 사장님 로그인

#### 로그인 및 회원가입 페이지

#### 롤링페이퍼 만들기 페이지

#### 롤링페이퍼 페이지

#### 롤링페이퍼 수정 페이지

#### 롤링페이퍼 메세지 페이지

#### 메세지 수정 페이지

## 🎚️ 기능별 preview

#### 이모지 추가, 정렬

## ⚠️ 트러블 슈팅
