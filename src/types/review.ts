export interface ReviewType {
  username: string;
  profileImage: string;
  content: string;
  rate: number;
}

export interface PostReviewType {
  userId: number | null;
  shopId: number;
  rate: number;
  content: string;
}
