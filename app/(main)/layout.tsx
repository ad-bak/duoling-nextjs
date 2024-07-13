function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="pl-[256px] h-full">
        <div className="bg-red-500">{children}</div>
      </main>
    </>
  );
}

export default MainLayout;
