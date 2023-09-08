export interface ReviewType {
  id: number;
  username: string;
  profileImage: string;
  content: string;
  rate: number;
  answer?: ReviewAnswerType;
}

export interface ReviewAnswerType {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  reviewId: number;
}

export interface PostReviewType {
  userId: number | null;
  shopId: number;
  rate: number;
  content: string;
}

export interface PostReviewAnswerType {
  reviewId: number;
  content: string;
}
