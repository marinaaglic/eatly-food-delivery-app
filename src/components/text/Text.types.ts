export type TextSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'default-strong'
  | 'default-regular'
  | 'medium-strong'
  | 'small-strong'
  | 'label-default'
  | 'label-small'
  | 'tab-active'
  | 'tab-inactive'
  | 'tab'

export type TextComponent = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'

export type TextColor =
  | 'primary-dark'
  | 'primary-light'
  | 'secondary'
  | 'tertiary'
  | 'brand'

export interface ITextProps extends React.HTMLAttributes<HTMLElement> {
  size: TextSize
  children: React.ReactNode
  className?: string
  component?: TextComponent
  color: TextColor
}
