import { useTypewriter } from '../../hooks/useTypewriter'

export default function TypewriterText({
  text,
  speed = 60,
  active = true,
  delay = 0,
  className = '',
  style = {},
  as: Tag = 'span',
}) {
  const { displayed, done } = useTypewriter(text, speed, active, delay)

  return (
    <Tag
      className={`${done ? '' : 'typewriter-cursor'} ${className}`}
      style={style}
    >
      {displayed}
    </Tag>
  )
}
