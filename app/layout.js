import Nav from "./(components)/Nav";
import "./globals.css";
import { Providers } from "./(redux)/provider";
import AuthProvider from "./(utils)/SessionProvider";

// import "@fortawesome/fontawesome-svg-core/styles.css";

// config.autoAddCss = false;


export const metadata = {
  title: "Task Manager",
  description: "Task Management System Project",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Providers>
            <div className="flex flex-col h-screen max-h-screen">
              <Nav />
              <div className="flex-grow overflow-y-auto bg-page text-default-text">
                {children}
              </div>
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
