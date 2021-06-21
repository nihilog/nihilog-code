import React, { useCallback } from 'react';
import getPages from '@/utils/getPages';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import BlogConfig from '@/data/blog.config';
import BlogLayout from '@/layouts/BlogLayout';
import Box from '@/components/LayoutComponensts/Box';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import Link from 'next/link';
import PostContents from '@/components/LayoutComponensts/PostContents';
import getUTC9 from '@/utils/getUTC9';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import Pagination from '@/components/Pagination';
import GoogleAd from '@/components/ContentComponents/GoogleAd';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { P } from '@/components/PostComponents';

const BlogNoticeListNumberPage = ({ currentPage, prevPage, nextPage, posts, totalPages, PostsPages, }) => {
  const getCount = useCallback(() => {
    let length = 0;
    
    for (let i = 0; i <= PostsPages.length - 1; i++) {
      length += PostsPages[i].length;
    }
    
    return length;
  }, []);
  
  const totalCount = getCount();
  
  const siteData = {
    pageName: `공지 목록 (${currentPage} 페이지)`,
    pageURL: `/blog/notice/page/${currentPage}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <div id='blog-notice-pages'>
          <Box>
            <BoxHeader i='f0f3' w='900' f='Free'>전체 공지 {totalCount}건</BoxHeader>
            <P bottom='0'>일반 포스트, 일러스트를 제외한 모든 포스트의 목록을 확인할 수 있습니다. 일반 포스트와 일러스트는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <GoogleAd slot={'7775831240'} top={'true'} margin={'30'} />
          <div id='blog-post-list'>
            {posts.map(({ frontMatter, filePath, }, index) => (
              <Box key={index + filePath.replace('.mdx', '')}>
                <PostHeader i='f0f3' w='900' f='Free'>
                  <Link href={`/blog/notice/${filePath.replace('.mdx', '')}`}>
                    <a>{frontMatter.title}</a>
                  </Link>
                </PostHeader>
                <div className={'illust-item-info'}>
                  <div className={'item-left'}>
                    <img src={frontMatter.coverImage} alt={`${frontMatter.title} 썸네일`} />
                  </div>
                  <PostContents>
                    <p>
                      <span className='info-name'>공지 설명</span><br />
                      <span className='info-description'>
                      {frontMatter.description}
                    </span>
                    </p>
                    <p>
                      <span className='info-name'>작성 날짜</span>
                      <span className='info-time'>{getUTC9(frontMatter.createdAt)}</span>
                    </p>
                  </PostContents>
                </div>
              </Box>
            ))}
          </div>
        </div>
        <GoogleAd slot={'6837513463'} margin={'30'} />
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='notice' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllYearPosts('notice');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);
  
  return {
    paths: PostsPages.map((page, index) => {
      return {
        params: {
          pageNumber: String(index + 1),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('notice');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);

  const prevPage = parseInt(params.pageNumber) === 1
    ? null
    : parseInt(params.pageNumber) - 1;

  const nextPage = parseInt(params.pageNumber) === PostsPages.length
    ? null
    : parseInt(params.pageNumber) + 1;
  
  return {
    props: {
      PostsPages,
      posts: PostsPages[parseInt(params.pageNumber) - 1],
      prevPage,
      nextPage,
      currentPage: parseInt(params.pageNumber),
      totalPages: PostsPages.length,
    },
  };
};

export default BlogNoticeListNumberPage;