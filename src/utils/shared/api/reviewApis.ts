import { PostReviewType } from '../../../types/review';
import { FieldValues } from 'react-hook-form';
import { authInstance, defaultInstance } from './axiosInstance';

// 리뷰 등록
export const postReview = async (postInfo: PostReviewType) => {
  try {
    await authInstance.post('review/submit', postInfo);
    alert('등록되었습니다.');
  } catch (err) {
    console.log(err);
  }
};

// 리뷰 목록 조회
export const getReviewList = async (shopId: number) => {
  try {
    const resultData = await defaultInstance.get('review/list', {
      params: {
        shopId,
      },
    });
    return resultData;
  } catch (err) {
    console.log(err);
  }
};
