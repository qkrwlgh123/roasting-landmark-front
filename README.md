# ☕ Roasting Landmark Front

<br/>

[![license](https://img.shields.io/badge/License-GPL-red)](https://en.wikipedia.org/wiki/GNU_General_Public_License)
[![code](https://img.shields.io/badge/Code-Typescript-blue)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/Framework-React-orange)](https://react.dev/)
[![API](https://img.shields.io/badge/API-Kakao-blueviolet)](https://developers.kakao.com/)
[![member](https://img.shields.io/badge/Project-Personal-brightgreen)](https://github.com/qkrwlgh123)

<br/>

> 위치 및 키워드 기반 카페 탐색 & 홍보 플랫폼 👉 https://roasting.kindparks.com/

<br/>

![스크린샷 2023-11-17 오후 11 33 48](https://github.com/qkrwlgh123/roasting-landmark-front/assets/85853566/334aa583-1e46-496e-9315-d531e664eaec)

## 📖 Description

방문할 카페에 대한 정보를 얻기 위해 장소 정보 제공 플랫폼을 이용할 경우, 여러 후기 및 평점들을 참고한 뒤에야 카페의 전반적인 특징 파악이 가능했었습니다.

이렇게 불편함을 발생시킬 수 있는 사항을 개선하며, 카페의 특장점과 분위기를 간단한 키워드를 통해 직관적으로 파악할 수 있게 도와줄 플랫폼이 필요하다는 생각이 들었습니다.

그리고 개인 카페 홍보가 필요한 소상공인들에게, 간단한 절차를 통해 카페를 홍보할 플랫폼을 제공하고 싶었습니다.

이러한 동기로 키워드 기반 카페 탐색 및 홍보 플랫폼인 로스팅 랜드마크를 기획, 개발하게 되었습니다.

<br/>

## ⭐ Main Feature

### 설정 위치 기반 일정 반경 내 카페 목록 조회

- Geolocation, Kakao maps API 및 Haversine을 활용한 위치 기반 조회 구현

### 로그인

- Kakao social login API를 이용하여 카카오 소셜 로그인 구현

### 키워드에 따른 카페 목록 조회

- React hooks인 useState를 활용하여 목록 필터링 구현

### 기타 기능

- 카페 등록
- 카페 상세 조회 및 평점, 리뷰 작성

<br/>

## 💻 Getting Started

### Installation

```
npm install
```

### Develop Mode

```
npm start
```

### Production

```
npm run build
```

<br/>

## 🔧 Stack

- **Language**: TypeScript
- **Library & Framework** : React.js, Styled-component, Recoil
- **API** : Kakao maps
- **Deploy**: AWS S3, Cloudfront

<br/>

## :open_file_folder: Project Structure

```markdown
public
src
├── assets
│   ├── images
│   ├── svg
├── components
├── pages
├── recoil
├── styles
├── types
├── utils
├── App.tsx
├── index.tsx
├── routes.ts
package.json
```

<br/>

## 🔨 Architecture

<img src="https://github.com/user-attachments/assets/8edebcbd-0fed-4e38-a728-fee2325764b9" width="1000">

<br/>

## 👨‍👩‍👧‍👦 Developer

- **박지호** ([qkrwlgh123](https://github.com/qkrwlgh123))
