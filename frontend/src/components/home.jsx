export function Home() {
  return (
    <>
      <div>
        <h1 className="Center"> Bienvenidos a {/*NombreEmpresa*/} </h1>


        <div className='page-shell main-page'>
          {functions.map((item) => (
            <Cards key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home