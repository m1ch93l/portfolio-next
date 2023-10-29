import { SocialIcon } from 'react-social-icons'

export default function Page() {
  return (
    <div className="header">Hello, I'm Michael Bañaria
      <div className="subheader">Your Future Innovator</div>
      
      <SocialIcon url="www.facebook.com" />
      <SocialIcon url="www.twitter.com" />
      <SocialIcon url="www.instagram.com" />
      <SocialIcon url="www.github.com/m1ch93l" />
    </div>
  )
}