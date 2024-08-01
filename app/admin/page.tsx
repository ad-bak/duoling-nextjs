import { auth } from "@clerk/nextjs/server";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false });

function AdminPage() {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      {sessionClaims?.metadata.role === "admin" && <h1>Admin Page!!!!!!</h1>}
      <App />
    </>
  );
}

export default AdminPage;
