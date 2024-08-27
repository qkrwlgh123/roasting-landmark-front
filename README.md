# ☕ Roasting Landmark Front

[![license](https://img.shields.io/badge/License-GPL-red)](https://en.wikipedia.org/wiki/GNU_General_Public_License)
[![code](https://img.shields.io/badge/Code-Typescript-blue)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/Framework-React-orange)](https://react.dev/)
[![API](https://img.shields.io/badge/API-Kakao_maps-blueviolet)](https://apis.map.kakao.com/)
[![member](https://img.shields.io/badge/Project-Personal-brightgreen)](https://github.com/qkrwlgh123)

> 위치 및 키워드 기반 카페 탐색 & 홍보 플랫폼 👉 https://roasting.kindparks.com/

![스크린샷 2023-11-17 오후 11 33 48](https://github.com/qkrwlgh123/roasting-landmark-front/assets/85853566/334aa583-1e46-496e-9315-d531e664eaec)

## 📖 Description

방문할 카페에 대한 정보를 얻기 위해 지도 앱을 이용할 경우, 여러 긴 후기 글들을 정독해야만 파악이 가능하다는 불편함이 존재했습니다.

이렇게 발생할 수 있는 불편함을 개선하며, 카페의 전반적 특징을 간단한 키워드를 통해 직관적으로 파악할 수 있게 도와줄 플랫폼이 필요하다는 생각이 들었습니다.

그리고 개인 카페 홍보가 필요한 소상공인들에게, 키워드와 사진 등록을 통한 복잡하지 않은 과정을 통해 카페를 홍보할 플랫폼을 제공하고 싶었습니다.

이런 계기를 통해 키워드 기반 카페 탐색 및 홍보 플랫폼인 로스팅 랜드마크를 기획, 개발하게 되었습니다.

## ⭐ Main Feature

### 설정 위치 기반 일정 반경 내 카페 목록 조회

- Geolocation, Kakao maps API 및 Haversine을 활용한 위치 기반 조회 구현

### 로그인

- Kakao social login 이용

### 키워드에 따른 카페 목록 조회

- React hooks인 useState 활용하여 목록 필터링 구현

### 기타 기능

- 카페 등록
- 카페 상세 조회 및 평점, 리뷰 작성

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

## 🔧 Stack

- **Language**: TypeScript
- **Library & Framework** : React.js
- **API** : Kakao maps
- **Deploy**: AWS S3, Cloudfront

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
App.tsx
index.tsx
routes.ts
package.json
```

## 🔨 Architecture

<img src="https://github.com/user-attachments/assets/cdceaa85-4a50-4975-9c67-ff6002aca146" width="1000">

## 👨‍👩‍👧‍👦 Developer

- **박지호** ([qkrwlgh123](https://github.com/qkrwlgh123))
