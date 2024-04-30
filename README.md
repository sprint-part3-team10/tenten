# SP4 Synergy(The Julge) Project-TenTen(Team10)

![logo](https://github.com/sprint-part3-team10/tenten/assets/79882248/65511083-87a4-4680-a4a5-35cd21e446c5)

> 코드잇 스프린트 : 프론트 엔드 4기 Part3 - Tenten(10팀)
>
> 프로젝트명 : Synergy(The Julge)
>
> 프로젝트 소개 : 급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스
>
> 개발 기간: 2024.4.15 ~ 5.1
>
> URL: https://synergy10.vercel.app/

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
      <img width=200px src="https://github.com/Hooni07/tenten_the_julge/assets/79882248/ece23e6d-0bdf-40f9-b586-a312cdf99520" alt="이모지_재성"/><br />
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

### 🐶 김예진(팀장)

#### 🖥️ 페이지 & 컴포넌트 구현 내용

##### <공고 리스트 페이지>

- 전체 공고 개수 표시하고, 공고 내용 호버시 box-shadow 애니메이션 적용
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

##### <추가 사항>

- **스피너**
  - 사용자 입장을 고려해 로딩되는 동안 나타나는 화면요소 구현

### 😺 이유진

#### 🖥️ 페이지 & 컴포넌트 구현 내용

##### <내 프로필 페이지>

- 프로필 데이터, 알바의 신청내역 데이터를 GET Method를 통해 받아들임
- userId, token이 없거나, userType이 employee가 아닐 경우 메인페이지로 redirect
  - 등록된 프로필이 없으면 '프로필을 등록하세요' 렌더링
  - 프로필은 있으나 신청 내역이 없으면 '신청내역이 없어요' 렌더링

##### <공고 상세보기 페이지(사장)>

- 사장의 지원자 내역 데이터를 GET Method를 통해 받아들임
- 지원자가 있으면 table 렌더링, 없으면 '신청자가 없어요' 요소 렌더링

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

### 🐺 이재성

#### 🖥️ 페이지 & 컴포넌트 구현 내용

- react-hook-form 라이브러리를 활용한 입력값 관리

##### <내 프로필 등록 및 수정 페이지>

- 입력값 리스트 : 이름, 연락처, 선호지역, 자기소개
  1. 필수 입력값을 설정하지 않고 제출 시 에러 메세지 노출
  2. 연락처의 경우 010-0000-0000 의 형식을 지키지 않을 시 에러 메세지 노출
  3. 선호지역의 경우 Dropdown 형식으로 UI 구성
  4. 자기소개의 경우 글자 수를 제한하여 초과할 시 텍스트 입력을 막음
- 내 프로필 등록 및 수정 페이지는 같은 페이지를 공유하며 url의 쿼리값으로 등록, 수정 여부를 판단
  1. 등록 페이지 (/myprofile/register), 수정 페이지(/myprofile/register/?action=edit)
  2. 수정 페이지로 판단 될 시 기존 유저의 정보를 fetch 하여 입력창의 기본값으로 설정
  3. 수정 페이지 진입 시 유저 정보가 fetch 되기 전까지 spinner를 구현하여 유저 편의성 고려
- 모든 입력값을 준수하고 제출 시 API 성공 여부에 따라 확인 모달창에 메세지 노출
- 내 프로필 등록이 되어 있는데 url로 등록 페이지 접근 시 ‘/’ 루트 페이지로 redirect 되도록 구현

##### <내 가게 등록 및 수정 페이지>

- 입력값 리스트 : 가게이름, 분류, 주소, 상세주소, 가게이미지, 기본시급, 가게설명
  1. 필수 입력값을 설정하지 않고 제출 시 에러 메세지 노출
  2. 기본 시급의 경우 24년 기준 최저임금 이하로 입력 시 에러메세지 노출
  3. 가게 이미지
     1. S3 외부 클라우드 저장소를 이용하여 이용자가 첨부한 사진 파일을 이미지 url로 변환하여 사용
     2. 가게 이미지 Box를 클릭하면 display: none; 으로 설정되어있던 file type의 input의 Ref를 참조하여 click 이벤트가 발생하게 구현
  4. 자기소개의 경우 글자 수를 제한하여 초과할 시 텍스트 입력을 막음
  5. 가게 분류와 주소는 Dropdown 형식으로 UI 구성
- 내 가게 등록 및 수정 페이지는 같은 페이지를 공유하며 url의 쿼리값으로 등록, 수정 여부를 판단
  1. 등록 페이지(/myshop/register), 수정 페이지(myshop/register/?action=edit)
  2. 수정 페이지로 판단 될 시 기존 가게 정보를 fetch 하여 입력창의 기본값으로 설정
  3. 수정 페이지 진입 시 가게 정보가 fetch 되기 전까지 spinner를 구현하여 유저 편의성 고려
- 모든 입력값을 준수하고 제출 시 API 성공 여부에 따라 확인 모달창에 메세지 노출
- 내 가게가 등록되어 있는데 url로 등록 페이지 접근 시 ‘/’ 루트 페이지로 redirect 되도록 구현

##### <내 가게 공고 등록 및 수정 페이지>

- 입력값 리스트 : 시급, 시작일시, 업무시간, 공고 설명
  1. 필수 입력값을 설정하지 않고 제출 시 에러 메세지 노출
  2. 시급의 경우 가게 정보를 등록할 때의 기본 시급보다 낮은 금액은 설정하지 못하도록 구현
  3. 시작일시
     1. react-datePicker 라이브러리를 사용하여 시작일시 값을 선택할 수 있도록 구현
     2. react-hook-form과 연결하기 위해 제공되는 Controller 컴포넌트를 사용하여 react-datePicker 라이브러리와 연동하였음
     3. 날짜와 시간대를 선택할 수 있음
     4. 현재 시간보다 이전 시간을 선택할 경우 에러 메세지 노출
  4. 공고 설명의 경우 글자 수를 제한하여 초과할 시 텍스트 입력을 막음
- 내 가게 공고 등록 및 수정 페이지는 같은 페이지를 공유하며 url의 쿼리값으로 등록, 수정 여부를 판단
  1. 공고 등록 페이지(/myshop/register/notice), 공고 수정 페이지(/myshop/register/notice?noticeId=${noticeId})
  2. 수정 페이지로 판단 될 시 기존 공고 정보를 fetch 하여 입력창의 기본값으로 설정
  3. 수정 페이지 진입 시 공고 정보가 fetch 되기 전까지 spinne를 구현하여 유저 편의성 고려
- 모든 입력값을 준수하고 제출 시 API 성공 여부에 따라 확인 모달창에 메세지 노출
- 공고 수정 완료 시 작성된 공고 상세 페이지로 이동
- 공고 등록 시 내 가게 페이지로 이동하여 생성된 공고 리스트 노출

##### <공통 컴포넌트>

- **Header Component**
  - 로고, 검색창 및 내 가게(내 프로필), 로그아웃, 로그인 및 회원가입 버튼으로 구성되어 있는 상단 고정 component

### 🦝 조한빈

#### 🖥️ 페이지 & 컴포넌트 구현 내용

##### <내 가게, 공고 상세보기(알바) 페이지>

- **가게상세와 공고상세에 공통적으로 쓰일 Box 구현**
  - 버튼 갯수나 쓰임새의 경우의 수가 많아서 버튼을 children으로 배치
  - 로그인을 통해 저장된 cookie를 바탕으로 하여, 유저 종류 및 가게의 마감 여부 등에 따라 버튼을 렌더링 하도록 조건식 작성
- **시급 인상율 뱃지 제작**
  - 카드에서 보여질 때와 페이지에서 보여질 때 디자인 구별
  - 시급이나 인상율 텍스트가 길어져서 생략될 경우 (text-overflow) 호버 시 전제 텍스트 표시
- **등록한 공고는 무한스크롤 방식으로 로드**

  - Intersection Observer 사용, 클라이언트 컴포넌트화

- **내 가게 페이지**

  - '/myshop' layout 단계에서 유저타입 검사 후 사장이 아니면 루트 페이지로 리다이렉트

- **공고 상세보기 페이지(알바)**
  - 최근에 본 공고를 로컬스토리지에 JSON 객체로 저장
  - 중복을 없애고, 최신순 정렬하기 위한 로직 구현

##### <내 가게 페이지>

##### <공통 컴포넌트>

- **Modal Component**
  - 경고, 로그아웃 등의 경고 및 알림을 나타내기 위한 컴포넌트

##### <추가 사항>

- 프로젝트 배포 및 배포 시 발생하는 오류 검토

### 🐻 하태훈

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

## 👀 페이지 preview

#### 메인 페이지

- 로그인 x
  ![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/c55a8af9-ee5c-4ba8-8f38-0a0fc2bb2de8)

- 알바생 로그인(프로필 등록 O, 맞춤 공고 추가)
  ![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/1a4dd132-ed78-4f29-bede-5209f6581e55)

#### 로그인, 회원가입 페이지

- 로그인 페이지
  ![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/ca0a9da7-8ca9-41bc-a029-abfc141464e7)

- 회원가입 페이지
  ![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/3ea6dcae-9551-49f2-8305-628822076f7d)

#### 가게 상세 페이지

![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/fb20e5c7-05d2-4611-a4c1-9bbb72f27b8b)

#### 내 가게 페이지

![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/27e25588-8410-4b05-84b8-d4e24969f2fd)

#### 내 프로필 페이지

![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/83c9dc04-770d-4414-9612-d1632905ea27)

#### 프로필 생성(편집) 페이지

![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/35b32956-a8c0-49ba-b337-1108862f1bbc)

#### 가게 정보(편집) 페이지

![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/2c2d303f-387d-42f3-a715-95d585dc96cd)

#### 가게 공고 등록 페이지

- 등록 후 페이지
  ![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/7539df00-3db0-4695-b2e1-f7ba8b87d1cc)
- 등록 편집 페이지
  ![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/1ebfcb65-0ec4-41ef-bf82-3ca12deb7865)

#### 404 페이지

![image](https://github.com/sprint-part3-team10/tenten/assets/79882248/e8e906c3-2099-4464-8137-55cde4069023)

## 🎚️ 기능별 preview

#### 로그인

![로그인](https://github.com/sprint-part3-team10/tenten/assets/79882248/fe8e5939-f2ba-4b2e-9502-0770099b3d63)

#### 가게 검색

![검색](https://github.com/sprint-part3-team10/tenten/assets/79882248/c6068b8b-6641-42dc-921b-1c6874526ac4)

## ⚠️ 트러블 슈팅

### 1. 로그인 시, 로그인 한 사람이 누구인지 구분하는 문제 및 userType 파악에 대한 문제

#### 해결방법

- 로그인할 때 쿠키에 저장되는 값(userType)으로 알바생, 사장님 구분
- 각 페이지에서 쿠키 값을 가져와 조건부 렌더링으로 구현

### 2. useRouter, useEffect는 CSR에서만 가능, 쿠키 값 참조는 SSR에서만 가능하던 문제

#### 해결방법

- 각 페이지에서는 쿠키 값 참조를 위해 SSR로 구현
- 데이터 변화 시 리렌더링을 위해 컴포넌트 분리 후 CSR로 설정
  - 쿠키 값은 props로 넘겨받음

### 3. React-hook-form을 처음 사용하면서 register, submit 관련하여 어려움

- 입력 필드에 register 함수를 적용했음에도 입력 값이 제대로 등록되지 않음
- onSubmit 이벤트를 처리하면서, 폼 제출 시 사용자 입력 데이터를 올바르게 처리하지 못함

#### 해결방법

- form 태그의 props에서 handleSubmit을 활용함으로 문제 해결
- input field에 React Hook Form과 연결하고, 폼 제출 시 입력 값을 검색할 수 있도록 적용
