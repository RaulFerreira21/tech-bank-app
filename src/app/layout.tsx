import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css'

 export default function RootLayout(props) {
   return (
     <html lang="pt-BR">
       <body className='layout'>
        <AppRouterCacheProvider>
           {props.children}
        </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
