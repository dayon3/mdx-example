import Post from '../../components/post'
import Markdown from './next-and-mdx.md'
import components from '../../lib/components'

export default () => (
  <Post post="next-and-mdx">
    <Markdown components={components} />
  </Post>
)
