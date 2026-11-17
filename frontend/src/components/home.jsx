import {
  RedirectToSignIn,
  SignedIn,
  UserButton,
} from '@neondatabase/neon-js/auth/react/ui';

export function Home() {
  return (
    <>
      <SignedIn>
        <div>
            <h1 className="Center"> Bienvenidos a {/*NombreEmpresa*/}</h1>
            
            
            <div className='page-shell main-page'>
            {functions.map((item) => (
                <Cards key={item.id} />
            ))}
        </div>

        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            gap: '2rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome!</h1>
            <p>You're successfully authenticated.</p>
            <UserButton />
          </div>
        </div>
      </SignedIn>
      <RedirectToSignIn />
    </>
  );
}

// function Home() {
//     return (
//         <div>
//             <h1 className="Center"> Bienvenidos a {/*NombreEmpresa*/}</h1>
            
            
//             <div className='page-shell main-page'>
//             {functions.map((item) => (
//                 <Cards key={item.id} />
//             ))}
//         </div>
//         </div>
//     )
// }

export default Home