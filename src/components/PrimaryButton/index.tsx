import { CSSProperties } from 'react';
import Button from '@mui/material/Button';

type PrimaryButton = React.PropsWithChildren<{
  style?: CSSProperties;
  type: 'submit' | 'button' | 'reset';
  text: string;
}>;

export default (props: PrimaryButton) => {
  const { style, type, text } = props;

  return (
    <Button
      type={type}
      fullWidth
      variant='contained'
      sx={{
        pb: '1rem',
        pt: '1rem',
        backgroundColor: '#5D87FF',
        ':hover': {
          backgroundColor: '#4570EA',
        },
        ...style,
      }}
    >
      {text}
    </Button>
  );
};
