import React from 'react';
import BlogLayout from '@/layouts/BlogLayout';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { P, Strong } from '@/components/PostComponents';
import GoogleAd from '@/components/ContentComponents/GoogleAd';

const BlogAboutPage = () => {
  const siteData = {
    pageName: '소개',
    pageURL: '/about',
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-about-page'>
          <Box top='100'>
            <BoxHeader i='f05a' w='900' f='Free'>니힐 블로그에 대해</BoxHeader>
            <P>
              이 블로그는 웹 프로그래밍과 일본어, 그리고 게임 관련된 컨텐츠를 다루는 블로그입니다. 네이버나 티스토리도 운영해봤지만 이번에는 그렇게 하기 싫었습니다. 명색이 프로그래밍을 공부하는 사람인데 정작 자신의 손으로 구축한 블로그 하나 없어서 되겠는가 싶어서 <Strong>Next.js</Strong>로 구축했습니다. 누군가 많이 봐줬으면 하는 것도 맞지만서도 그것 자체보다는 스스로 공부를 하고 일기를 기록하는 느낌으로 운영하려고 노력중입니다.
            </P>
            <P bottom='0'>
              아직도 여러가지 코드를 수정 중에 있고 이제 막 만들어진 블로그지만 이 블로그는 제가 운영했던 다른 블로그들에 비해 더욱 애착이 생길 것도 같습니다. 처음으로 스스로의 손으로 모든 시스템을 구축해본 것은 이것이 처음이거든요. 아무튼 그래서 이 블로그는 프로그래밍을 집중적으로 다룰 것 같고, 그 외의 컨텐츠들도 다룰 예정입니다.
            </P>
          </Box>
          <Box bottom='100'>
            <BoxHeader i='f007' w='900' f='Free'>주인장에 대해</BoxHeader>
            <P>
              주로 사용하는 아이디는 <Strong>NIHILncunia</Strong>이고, 닉네임은 <Strong>니힐</Strong>을 많이 사용합니다. 일본어를 전공했고, 글을 쓰는 것을 좋아해서 오랫동안 글을 쓰고 있는 글쟁이이기도 합니다. 글에 필요한 설정화를 직접 그리기 위해 그림도 조금 배웠으니 그림쟁이 기질도 조금 있습니다. 지금은 프로그래밍에도 손을 대고 있습니다.
            </P>
            <P bottom='0'>
              게임을 하는 시간보다 웹 서핑을 하거나 지금처럼 무언가를 구상하고, 만드는 것을 좋아합니다. 웹 프로그래밍을 공부하기 시작한 이유는 남들이 일본어를 접하기 쉽게 학습 사이트를 하나 만들어서 널리 퍼뜨리기 위해서였...으나 지금은 다른 프로젝트에만 열중하고 있습니다. 이 블로그의 포스트를 보시고 혹시라도 연락할 일이 생긴다면 블로그의 하단에 메일이나 인스타 링크가 있으니 언제든 연락 주시면 감사하겠습니다.
            </P>
          </Box>
          <GoogleAd slot={'6837513463'} margin={'100'} />
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogAboutPage;