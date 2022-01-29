## 설치 방법
    npm install
    npm start
    
    
    

## 파일 구조
📦src
 ┣ 📂components
 ┃ ┣ 📂form
 ┃ ┃ ┣ 📜FormAddImg.js
 ┃ ┃ ┣ 📜FormAddOneImg.js
 ┃ ┃ ┣ 📜FormCheckBox.js
 ┃ ┃ ┣ 📜FormDatePicker.js
 ┃ ┃ ┣ 📜FormImagePreview.js
 ┃ ┃ ┣ 📜FormInput.js
 ┃ ┃ ┣ 📜FormRadio.js
 ┃ ┃ ┣ 📜FormSelect.js
 ┃ ┃ ┣ 📜FormTextArea.js
 ┃ ┃ ┗ 📜FormToggle.js
 ┃ ┗ 📜index.js
 ┣ 📂layout
 ┃ ┣ 📜CommonLayout.js
 ┃ ┗ 📜Tab.js
 ┣ 📂pages
 ┃ ┗ 📂admin
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂exposureNSalesPeriod
 ┃ ┃ ┃ ┃ ┣ 📜ExposureNSalesPeriod.js
 ┃ ┃ ┃ ┃ ┣ 📜ExposureNSalesPeriodStyled.js
 ┃ ┃ ┃ ┃ ┣ 📜ExposureRadio.js
 ┃ ┃ ┃ ┃ ┣ 📜SalesRadio.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂productDelivery
 ┃ ┃ ┃ ┃ ┣ 📜ProductDelivery.js
 ┃ ┃ ┃ ┃ ┗ 📜ProductDeliveryStyled.js
 ┃ ┃ ┃ ┣ 📂productImg
 ┃ ┃ ┃ ┃ ┗ 📜ProductImg.js
 ┃ ┃ ┃ ┣ 📂productInfo
 ┃ ┃ ┃ ┃ ┣ 📜InputBar.js
 ┃ ┃ ┃ ┃ ┗ 📜ProductInfo.js
 ┃ ┃ ┃ ┣ 📂productInfoNotice
 ┃ ┃ ┃ ┃ ┣ 📜ProductInfoNotice.js
 ┃ ┃ ┃ ┃ ┗ 📜ProductInfoNoticeStyled.js
 ┃ ┃ ┃ ┣ 📂productOption
 ┃ ┃ ┃ ┃ ┣ 📜ProductOption.js
 ┃ ┃ ┃ ┃ ┗ 📜ProductOptionStyled.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂containers
 ┃ ┃ ┃ ┣ 📜MoreOption.js
 ┃ ┃ ┃ ┣ 📜OptionItem.js
 ┃ ┃ ┃ ┣ 📜OptionSet.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜Admin.js
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┣ 📜Theme.js
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┣ 📜DataSet.js
 ┃ ┣ 📜Util.js
 ┃ ┗ 📜index.js
 ┣ 📜App.js
 ┗ 📜index.js
 
 
 
## 기능

### 노출 기한 설정

    DEFAULT로 제한없음을 선택 
    달력을 통해 날짜,시간을 선택할수 있음

### 카테고리 지정

    체크박스를 통해 해당 상품에 카테고리를 지정할 수 있어야하며 체크박스 지정해제 또는 선택된 카테고리의 X 버튼을 통해지정을 해제할 수 있음

### 필터 태그 지정

    필터태그 검색창 포커스시 필터태그에 등록되어 있는 모든 태그가 제공됨.
    필터태그 검색시 데이터 텍스트 일치값 순으로 검색결과 제공하며 검색결과가 없는 경우에는 '검색 결과 없음' 으로 보여줌
    검색한 필터태그 TAP 시,해당 필터태그 지정되며 이미 지정되어 있는 태그를 선택시 중복으로 추가되지 않고 기존의 태그를 유지
    지정된 태그는 검색창 아래에 표시되며 태그의 X 버튼을 통해서 지정 해제할 수 있음

### 상품명,상품구성 입력

     상품의 상품명,구성을 설명하는 텍스트를 입력하는 영역

### 상품 썸네일 , 상품 대표 이미지 업로드

    이미지를 업로드 할 수 있는 버튼(썸네일의 경우 최대 1개까지 업로드 가능)
    이미지 첨부 버튼 TAP 후 이미지 업로드 시, 우측에 업로드한 이미지 파일명이 [X]버튼과 함께 노출 이미 이미지가 업로드된 상태에서 추가 첨부 시, 최신업로드 순으로 이미지 파일이 추가됨

### 상품 옵션 등록

### 이미지 추가 컴포넌트

    이미지 첨부 컴포넌트를 공용컴포넌트화 하여, 상단 탭의 텍스트와 input의 id값을 인자로 주어 생성 가능하도록 구현. 

    이미지 첨부 버튼 TAP 후 이미지 업로드 시, 우측에 업로드한 이미지 파일명이 [X]버튼과 함께 노출 되도록 구현.

    Input에 파일 업로드 시, onChange 함수를 실행하며 이벤트를 인자로 받아 파일의 이름을 unshift 하여 추가.

    이미 이미지가 업로드 된 파일이면 배열에서 삭제 후 unshift 로 화면의 상단에 위치하도록 구현.

    [X] 버튼 클릭 시, 파일 이름의 배열에서 filter 메서드를 사용하여 onClick 이벤트의 인자로 전달 된 요소만 삭제 하도록 구현.

### 이미지 단일 추가 컴포넌트

    상품 썸네일 이미지를 업로드 하는 컴포넌트의 경우, 이미지를 업로드 하면 기존 배열의 요소를 삭제하고 추가하도록 구현하여 하나의 파일만 업로드 가능하도록 구현.

### 토글 컴포넌트

    useState를 사용하여 onClick 이벤트를 통해 state 상태값 조작 , state 값을 props 로 전달받아 styled-component 속성값 변경 되도록 구현.

### 상품 정보 고시

    정보고시 제목 옆에 생성 번호 표기
    우측 상단의 정보고시 삭제 버튼 클릭 시 생성 번호 감소 (번호가 1일 경우 '삭제 할 수 없습니다' alert 제공)
    각각의 입력란 제목 고정 및 우측에 입력란 제공
    항목 추가 버튼 클릭 시 정보 고시 항목이 하나씩 추가 항목 추가 후 제목과 내용 입력란 및 삭제 버튼 제공
    추가된 항목의 삭제 버튼 클릭 시 각각의 항목 삭제 구현
    정보고시 추가 버튼 클릭 시 정보 고시 옆 생성 번호 증가 ('정보고시가 추가되었습니다' alert 제공)

### 상품 배송 설정
    사용자 배송일 출발일 지정 버튼 또는 방문 수령 토글 버튼 활성화 시 선주문 예약 배송 토글 버튼 비활성화 기능 구현
    선 주문 예약 배송 토글 버튼 활성화 시 다른 두 개의 토글 버튼 비활성화 기능 구현
    선 주문 예약 배송란에는 달력 제공
    주문 시간을 선택하면 선택한 날짜부터 새벽 배송 및 일반 배송일 설정 가능 (그 전 날짜는 불가능)

### 상품 혜택 허용 설정 
    마일리지 적립란의 토글 버튼은 기본으로 활성화되어 있도록 구현
    토글 버튼 클릭 이벤트 정상 작동

### 기타 설정
    감사카드 제공란의 토글 버튼 제공
    토글 버튼 클릭 이벤트 정상 작동
    

