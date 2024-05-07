import { StaticImport } from "next/dist/shared/lib/get-img-props";
export interface ButtonCustomProps {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface FeatureProps {
  id?: number;
  title?: string;
  body?: string;
  link?: string;
}

export interface LandingSection6Props {
  id?: number;
  title?: string;
  content?: string;
  photo?: string;
  slug?: string;
  summary?: string;
  min_read?: number;
  short_link?: string;
  locale: string;
}

export interface CustomSliderProps {
  data: LandingSection6Props[];
  ImageWidth?: number;
  ImageHeight?: number;
  className?: string;
  sliderClass?: string;
  add?: boolean | false;
  locale?: string;
}

export interface SubjectProps {
  title?: string;
  text?: string;
  href?: string;
  locale?: string;
}

export interface SectionTwoProps {
  img?: string;
  name?: string;
  href?: string;
}

export interface UserProps {
  id?: number;
  name?: string;
  email?: string;
  profile?: string;
}

export interface SingleBlogProps {
  id?: number;
  title?: string;
  slug?: string;
  content?: string;
  summary?: string;
  min_read?: number;
  short_link?: string;
  photo?: string | StaticImport;
  author?: UserProps;
  created_at?: string;
}

export interface BlogsProps {
  current_page?: number;
  data?: SingleBlogProps[];
  last_page?: number;
}

export interface CustomBlogProps {
  articleImg: string;
  articleTitle?: string;
  articleSummary: string;
  article_created_at: string;
  min_read: number;
  alt: string;
  authorImg: string | StaticImport;
  authorName: string;
  key: number;
  href: string;
  author?: any;
}

export interface TagsProps {
  id?: number;
  title?: string;
}

export interface CategoriesProps {
  id?: number;
  title?: string;
}

export interface CommentsProps {
  id?: number;
  body?: string;
  status?: string;
}

export interface ArticleProps {
  id?: number;
  title?: string;
  slug?: string;
  content?: string;
  min_read?: number;
  short_link?: string;
  deleted_at?: string;
  created_at?: string;
  comments_count?: number;
  liked_count?: number;
  bookmarks_count?: number;
  photo?: string;
  author?: UserProps;
  tags?: TagsProps[] | undefined;
  categories?: CategoriesProps[];
  comments?: CommentsProps[] | undefined;
}

export interface BlogInfoProps {
  article: ArticleProps;
  locale: string;
  slug: string;
  isLoggedIn?: boolean;
  user?: UserProps | undefined;
  userInfo: { like: number; bookmark: number };
}

interface RepliesProps {
  id?: number;
  body?: string;
  status?: string;
}

export interface CommentsProps {
  id?: number;
  body?: string;
  status?: string;
  replies?: RepliesProps[];
}

export interface ChatBlogProps {
  comments: CommentsProps[];
  setOpenComments: (openComments: boolean) => void;
  openComments?: boolean;
  articleId?: number;
  isLoggedIn?: boolean;
  user?: UserProps;
  article_slug?: string | undefined;
  locale?: string;
}

export interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export interface BackButtonProps {
  label?: string;
  href?: URL | string | undefined;
  className?: string;
}

export interface CardProps {
  href?: string;
  title?: string;
  text?: string;
}

export interface WriteCommentProps {
  articleId?: number;
  user?: UserProps;
  article_slug?: string;
}

export interface CommentInfoProps {
  article: number | undefined;
  user: UserProps | undefined;
  comment: string | undefined;
}

export interface FetchLikeProps {
  id?: number;
  type?: string;
}

export interface FetchGetUserInfoProps {
  articleId?: number;
  token?: string;
}

export interface BlogLikesProps {
  likeNum?: number;
  commentNum?: number;
  setOpenComments: (openComments: boolean) => void;
  openComments?: boolean;
  article: ArticleProps;
}
