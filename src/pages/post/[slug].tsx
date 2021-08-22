import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps } from 'next';
import getAllYearMdx from '@/utils/mdx/getAllYearMdx';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import getUTCString from '@/utils/getUTCString';
import BlogLayout from '@/layouts/BlogLayout';
import MDXComponents from '@/components/MDXComponents';
import PostNavigation from '@/components/PostNavigation';
import { CommentGuideMessage, Line } from '@/components/PostComponents';
import { GoogleAd } from '@/components/ContentComponents';
import { PostContent, PostInfo, Utterances } from '@/components/LayoutComponensts';
import { IPostsProps, ISiteData } from '@/types';

const BlogPostPage = ({ post, prev, next, }: IPostsProps) => {
  const { frontMatter, slug, source, } = post;

  const siteData: ISiteData = {
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: frontMatter.tags.join(', '),
    pageURL: `/post/${slug}`,
    pageType: 'article',
    pageImage: frontMatter.coverImage ? frontMatter.coverImage : '',
    pageTag: frontMatter.tags.join(', '),
    pageSection: frontMatter.categories.join(', '),
    pageCreated: getUTCString(frontMatter.createdAt),
    pageUpdated: getUTCString(frontMatter.updatedAt),
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <article id='blog-post-page'>
          <PostInfo top='100' frontMatter={frontMatter} type='post' />
          <PostContent idName='blog-post-content' frontMatter={frontMatter}>
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <CommentGuideMessage postType='' />
            <GoogleAd pos='bottom' />
            <Utterances />
          </PostContent>
        </article>
        <PostNavigation prev={prev} next={next} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllYearMdx('post');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.filePath.replace('.mdx', ''),
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const posts = getAllYearMdx('post');
  const postIndex = posts.findIndex((post) => post.filePath.replace('.mdx', '') === params.slug);
  const prev = posts[postIndex + 1] || null;
  const next = posts[postIndex - 1] || null;
  const post = await getPostBySlug('post', params.slug);

  return {
    props: {
      post,
      prev,
      next,
    },
  };
};

export default BlogPostPage;