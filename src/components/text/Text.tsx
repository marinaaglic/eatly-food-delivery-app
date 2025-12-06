import { ITextProps } from './Text.types'
import styles from './Text.module.scss'

export default function Text({
  size,
  children,
  className,
  component = 'span',
  color = 'primary-dark',
  ...rest
}: ITextProps) {
  const Tag = component
  return (
    <Tag className={`${styles[size]} ${styles[color]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
