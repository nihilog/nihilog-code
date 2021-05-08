import React from 'react';
import {
  A, Bold, Char,
  Code, Details,
  Dl,
  Em,
  Gray,
  H,
  Image, Kbd,
  Line, Mark, Message, NoteBottom, NoteTop,
  Ol,
  P,
  Prism, Q, Quote,
  Score, Spoiler,
  Strike,
  Strong,
  Ul, Youtube
} from '@/components/PostComponents';

const MDXComponents = {
  h1: props => <H type='1' {...props} />,
  h2: props => <H type='2' {...props} />,
  h3: props => <H type='3' {...props} />,
  h4: props => <H type='4' {...props} />,
  inlineCode: props => <Code {...props} />,
  p: props => <P {...props} />,
  img: props => <Image {...props} />,
  a: props => <A href={props.href} rel={props.rel} type='blog'>{props.children}</A>,
  del: props => <Strike {...props} />,
  strong: props => <Strong {...props} />,
  em: props => <Em {...props} />,
  ol: props => <Ol {...props} />,
  ul: props => <Ul {...props} />,
  pre: props => <Prism {...props} />,
  hr: props => <Line {...props} />,
  H,
  Code,
  A,
  P,
  Image,
  Strong,
  Strike,
  Em,
  Ol,
  Ul,
  Dl,
  Score,
  Gray,
  Details,
  Bold,
  Kbd,
  Char,
  Message,
  NoteTop,
  NoteBottom,
  Q,
  Quote,
  Spoiler,
  Youtube,
  Mark,
  Line,
};

export default MDXComponents;