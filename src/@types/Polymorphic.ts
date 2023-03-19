// 향후 custom component의 polymorhic을 위한 type

export type AsProps<T extends React.ElementType> = {
  as?: T;
};

export type PolymorhicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorhicProps<
  T extends React.ElementType,
  Props = {}
> = AsProps<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & { ref?: PolymorhicRef<T> };
