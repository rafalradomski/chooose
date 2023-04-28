import { CSSProperties } from 'react';

export const rootStyles: CSSProperties = {
  borderRadius: '16px',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: 315,
  padding: '0 36px',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

export const contentStyles: CSSProperties = {
  width: '100%',
};

export const titleStyles: CSSProperties = {
  display: 'block',
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',
};

export const subTitleStyles: CSSProperties = {
  display: 'block',
  padding: '0 32px',
  color: '#fff',
  fontSize: 14,
};

export const emissionsStyles: CSSProperties = {
  display: 'flex',
  width: '100%',
  color: '#fff',
  background: '#1d2430',
  padding: '20px 14px',
  borderRadius: '16px',
  justifyContent: 'space-between',
  marginTop: 12,
};

export const ratingStyles: CSSProperties = {
  width: '100%',
  position: 'absolute',
  bottom: 0,
  padding: '0 32px',
};

export const ratingContentStyles: CSSProperties = {
  alignSelf: 'flex-end',
  background: '#fff',
  borderRadius: '8px 8px 0 0',
  padding: '16px 0',
  margin: 'auto',
};
