## 배포 주소
<a href="https://deploy-preview-38--vibrant-mahavira-12a410.netlify.app/">어드민 페이지</a>


## 💻 설치 방법

    npm install
    npm start
    
    
    

## 📂 파일 구조
  
src.           
┣ components       
┃ ┣ form        
┃ ┃ ┣ FormAddImg.js        
┃ ┃ ┣ FormAddOneImg.js        
┃ ┃ ┣ FormCheckBox.js     
┃ ┃ ┣ FormDatePicker.js        
┃ ┃ ┣ FormImagePreview.js       
┃ ┃ ┣ FormInput.js       
┃ ┃ ┣ FormRadio.js       
┃ ┃ ┣ FormSelect.js       
┃ ┃ ┣ FormTextArea.js       
┃ ┃ ┗ FormToggle.js       
┃ ┗ index.js        
┣ layout      
┃ ┣ CommonLayout.js       
┃ ┗ Tab.js       
┣ pages                      
┃ ┗ admin                    
┃ ┃ ┣ components       
┃ ┃ ┃ ┣ exposureNSalesPeriod                   
┃ ┃ ┃ ┃ ┣ ExposureNSalesPeriod.js       
┃ ┃ ┃ ┃ ┣ ExposureNSalesPeriodStyled.js      
┃ ┃ ┃ ┃ ┣ ExposureRadio.js      
┃ ┃ ┃ ┃ ┣ SalesRadio.js       
┃ ┃ ┃ ┃ ┗ index.js        
┃ ┃ ┃ ┣ productDelivery              
┃ ┃ ┃ ┃ ┣ ProductDelivery.js      
┃ ┃ ┃ ┃ ┗ ProductDeliveryStyled.js        
┃ ┃ ┃ ┣ productImg        
┃ ┃ ┃ ┃ ┗ ProductImg.js                 
┃ ┃ ┃ ┣ productInfo     
┃ ┃ ┃ ┃ ┣ InputBar.js       
┃ ┃ ┃ ┃ ┗ ProductInfo.js       
┃ ┃ ┃ ┣ productInfoNotice            
┃ ┃ ┃ ┃ ┣ ProductInfoNotice.js        
┃ ┃ ┃ ┃ ┗ ProductInfoNoticeStyled.js       
┃ ┃ ┃ ┣ productOption       
┃ ┃ ┃ ┃ ┣ ProductOption.js        
┃ ┃ ┃ ┃ ┗ ProductOptionStyled.js       
┃ ┃ ┃ ┗ index.js       
┃ ┃ ┣ containers       
┃ ┃ ┃ ┣ MoreOption.js       
┃ ┃ ┃ ┣ OptionItem.js      
┃ ┃ ┃ ┣ OptionSet.js       
┃ ┃ ┃ ┗ index.js       
┃ ┃ ┗ Admin.js      
┣ styles       
┃ ┣ GlobalStyle.js      
┃ ┣ Theme.js       
┃ ┗ index.js       
┣ utils               
┃ ┣ DataSet.js       
┃ ┣ Util.js            
┃ ┗ index.js       
┣ App.js      
┗ index.js      


## 📝 기능

### 대시보드 페이지 HTML 구조 작업

- 대시보드 페이지의 기본 HTML 구조 설계
- 여섯 개의 견적 요청 카드는 컴포넌트로 분리해 각각의 카드에 해당하는 데이터를 화면에 보여줄 수 있도록 작업

### 대시보드 페이지 기본 스타일 적용

- 주어진 Figma 파일을 토대로 페이지의 스타일 적용

### 모달 컴포넌트

- UseState 를 사용하여 state 값에 따라 열리고 닫히는 모달창 구현.
- 아이콘 클릭 시 백그라운드가 어두워지고 메뉴화면이 좌측에서 등장하도록 구현.
- 백그라운드 클릭 시 닫히도록 구현.
- 모달창 활성화 시 스크롤이 동작하지 않도록 구현.

### 반응형 컴포넌트

- Media query 를 사용하여 지정한 width 값 미만 일 때 styled-component 속성을 변경하여 반응형 구현.
