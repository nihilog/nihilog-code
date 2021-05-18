import React from 'react';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import BlogLayout from '@/layouts/BlogLayout';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { P } from '@/components/PostComponents/P';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import Link from 'next/link';
import PostContents from '@/components/LayoutComponensts/PostContents';
import getUTC9 from '@/utils/getUTC9';
import { css } from '@emotion/react';
import GoogleAd from '@/components/ContentComponents/GoogleAd';

const CategoryPostsPage = ({ posts, category, }) => {
  const totalCount = posts.length;
  
  const style = css`
    margin-bottom: 100px;
  `;

  const siteData = {
    pageName: `"${category}" 관련 포스트`,
    pageURL: `/blog/tags/${category}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <div id='blog-tag-page' css={style}>
          <Box>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {category} &rdquo; 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 카테고리들을 보려면 상단 메뉴에서 카테고리 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd slot={'7775831240'} top={'true'} margin={'30'} />
          <div id='blog-post-list'>
            {posts.map(({ frontMatter, filePath, }, index) => (
              <Box key={index + filePath.replace('.mdx', '')}>
                <PostHeader i='f27a' w='900' f='Free'>
                  <Link href={`/blog/post/${filePath.replace('.mdx', '')}`}>
                    <a>{frontMatter.title}</a>
                  </Link>
                </PostHeader>
                <div className={'illust-item-info'}>
                  <div className={'item-left'}>
                    <img src={frontMatter.coverImage} alt={`${frontMatter.title} 썸네일`} />
                  </div>
                  <PostContents>
                    <p>
                      <span className='info-name'>포스트 설명</span><br />
                      <span className='info-description'>
                        {frontMatter.description}
                      </span>
                    </p>
                    <p>
                      <span className='info-name'>작성 날짜</span>
                      <span className='info-time'>{getUTC9(frontMatter.createdAt)}</span>
                    </p>
                    <p>
                      <span className='info-name'>카테고리</span>
                      {frontMatter.categories.map((category, index) => (
                        <Link href={`/blog/categories/${String(category)}`} key={index + category}>
                          <a className='info-category'>{category}</a>
                        </Link>
                      ))}
                    </p>
                    <p>
                      <span className='info-name'>태그</span>
                      {frontMatter.tags.map((tag, index) => (
                        <Link href={`/blog/tags/${String(tag)}`} key={index + tag}>
                          <a className='info-tag'>{tag}</a>
                        </Link>
                      ))}
                    </p>
                  </PostContents>
                </div>
              </Box>
            ))}
          </div>
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const categories = await getTagsAndCategories('categories');

  return {
    paths: categories.map(category => {
      return {
        params: {
          category: category.categoryName,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('post').filter(({ frontMatter, }) => {
    return frontMatter.categories.includes(params.category);
  });

  return {
    props: {
      posts,
      category: params.category,
    },
  };
};

export default CategoryPostsPage;