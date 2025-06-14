export type SocialIconType = 'github' | 'twitter' | 'facebook';

// Re-export component types
export * from './components';

export interface Section {
  title: string;
  link: string;
  blank?: boolean;
  icon?: SocialIconType;
}

export interface Work {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  mainvisual: {
    url: string;
  };
  body?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  keyVisual: {
    url: string;
  };
  tags?: string[];
  content?: string;
}

// MicroCMS API Response Types
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface MicroCMSDetailResponse<T> extends T {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}
