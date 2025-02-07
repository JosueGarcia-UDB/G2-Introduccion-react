import Button from '../components/Button';

const Equipos = ({equipos}) => {return (
  <div className="pt-6 mx-0 border-0 border-t border-gray-500 mt-2">
    {equipos.map((equipo) => 
      <div key={equipo.id}>
        <section className="grid grid-cols-3 gap-12 grid-auto-rows-auto mb-16">
          <h3 className="text-center text-4xl col-span-3">{equipo.nombre}</h3>
          {equipo.plantilla.map((jugador) =>(
            <div className="p-4 mb-1 flex justify-center w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md " key={jugador.id}>
              <div className="relative -mt-8 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={`${jugador.imagen}`} alt={jugador.nombre} className="w-full h-full object-cover"></img>
              </div>
              <div className="flex flex-col items-center ">
                <strong className="text-center text-xl py-2">{jugador.nombre}</strong>
                <div className="flex flex-row gap-4 p-2">
                  <Button>Altura: {jugador.Altura}m </Button>
                  <Button>Peso: {jugador.Peso}</Button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>  
    )}
  </div>
);
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      id: 1,
      nombre: "Barcelona",
      plantilla: [
        {"id": 1, "nombre": "Lamine Yamal", "Altura":"1.81", "Peso": "80Kg", "imagen": "https://assets.goal.com/images/v3/blt89b8d3ce74e9b510/Lamine_Yamal_Barcelona_2023-24_(3).jpg"},
        {"id": 2, "nombre": "Pedri Gónzales", "Altura": "1.71", "Peso": "75Kg", "imagen": "https://e-noticies.cat/filesedc/uploads/image/post/pedri-ojo_1600_1067.jpg"},
        {"id": 3, "nombre": "Lionel Messi", "Altura": "1.70", "Peso": "81Kg", "imagen": "https://imagenes.elpais.com/resizer/v2/K5XEN4IGMVG6HFA6SI5PKAFL7Y.jpg?auth=4c99e3d6cb69ff0ef4a83a5443e2e1c448faf3af739072f6fb73526b2b9e1fd3&width=414"}
      ]
    },
    {
      id: 2,
      nombre: "Real Madrid",
      plantilla: [
        {"id": 1, "nombre": "Vinicius Jr.", "Altura":"1.75", "Peso": "74Kg", "imagen": "https://www.clarin.com/2024/06/10/BbuGLPXHD_720x0__1.jpg"},
        {"id": 2, "nombre": "Kylian Mbappe", "Altura": "1.78", "Peso": "81Kg", "imagen": "https://assets.goal.com/images/v3/getty-2174748031/GettyImages-2174748031.jpg?auto=webp&format=pjpg&width=3840&quality=60"},
        {"id": 3, "nombre": "Cristiano Ronaldo", "Altura": "1.85", "Peso": "81Kg", "imagen": "https://c.files.bbci.co.uk/5985/production/_102471922_gettyimages-962792890.jpg"}
      ]
    },
    {
      id: 3,
      nombre: "Manchester City",
      plantilla: [
        {"id": 1, "nombre": "Kevin de bruyne", "Altura":"1.81", "Peso": "77Kg", "imagen": "https://images.daznservices.com/di/library/DAZN_News/a9/f3/kevin-de-bruyne-manchester-city-31021_n9ruwu3wh2j1oqlnmob93gwv.jpg?t=2064433164"},
        {"id": 2, "nombre": "Erling Haaland", "Altura": "1.90", "Peso": "85Kg", "imagen": "https://media.tycsports.com/files/2024/04/11/702314/erling-haaland-manchester-city_862x485.webp"},
        {"id": 3, "nombre": "Bernardo Silva", "Altura": "1.65", "Peso": "70Kg", "imagen": "https://fifpro.org/media/om2a4pmo/bernardo-silva_city.jpg?rxy=0.5210683500883063,0.10088769530172481&width=1600&height=1024&rnd=133581790007770000"}
      ]
    },
    {
      id: 4,
      nombre: "Liverpool",
      plantilla: [
        {"id": 1, "nombre": "Mohamed Salah", "Altura":"1.71", "Peso": "75Kg", "imagen": "https://assets.goal.com/images/v3/blt4c5d4b5f2b781355/Mohamedo-Salah.jpeg?auto=webp&format=pjpg&width=3840&quality=60"},
        {"id": 2, "nombre": "Mac Allister", "Altura": "1.75", "Peso": "76Kg", "imagen": "https://merseysportlive.co.uk/wp-content/uploads/2024/10/Alexis-MacAllister-Alamy.jpg"},
        {"id": 3, "nombre": "Alison Becker", "Altura": "1.87", "Peso": "85Kg", "imagen": "https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2024-09/alisson-200924.webp?itok=dbJnLp-p"}
      ]
    },
  ];
  return (
    <main className="flex flex-col justify-between items-center p-4 min-h-screen">
      <div>
        <h3 className="text-center text-4xl">Mi Aplicación de Fútbol</h3>
        <Equipos equipos = {equiposData}/>
      </div>
    </main>
  );
}
