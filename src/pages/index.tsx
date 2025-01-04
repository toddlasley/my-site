import styles from '@/pages/index.module.css';

export default function Index() {
  return (
    <div className='about-container'>
      <img className={styles.hero} src='/img/me-hagi-beach.jpg' alt='Todd Lasley' />
      <p>I&apos;m a Seattle-based software engineer that&apos;s just trying to figure it all out, dude, I don&apos;t know.</p>
      <div className={styles.socials}>
        <a href='https://bsky.app/profile/toddlasley.me' target='_blank'>Bluesky</a>
        |
        <a href='https://www.instagram.com/todd_lasley/' target='_blank'>Instagram</a>
        |
        <a href='https://www.linkedin.com/in/toddlasley/' target='_blank'>LinkedIn</a>
        |
        <a href='https://github.com/toddlasley' target='_blank'>GitHub</a>
      </div>
    </div>
  );
}
