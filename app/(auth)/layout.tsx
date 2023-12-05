import styles from './auth.module.css';
import Paper from '@mui/material/Paper';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.background}>
      <Paper
        sx={{
          width: '100%',
          maxWidth: 450,
          py: 6,
          px: 4,
        }}
      >
        {children}
      </Paper>
    </div>
  );
}
