/** @jsxImportSource theme-ui */
import { jsx, NavLink as MenuLink, Box, Link as A } from 'theme-ui';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </NextLink>
  );
}
export function Link({ path, label, children, ...rest }) {
  if (path) return (
      <A {...rest} href={path} target="_blank">
    {children && children } {label}
  </A>
  )
  return (
      <Box {...rest} sx={{cursor: 'unset'}}>
        {children && children } {label}
      </Box>
);
}
