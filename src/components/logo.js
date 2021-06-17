/** @jsxImportSource theme-ui */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, className, label, ...rest }) {
  return (
    <Link
      path="/"
      label = {label}
      sx={{
        variant: `${className !== 'sticky'? 'links.label': 'links.labelAlt'}`,
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
        {
            src && <Image src={src} alt="startup landing logo" />
        }
    </Link>
  );
}
