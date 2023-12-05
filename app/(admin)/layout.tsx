export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <h1>Halo</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
