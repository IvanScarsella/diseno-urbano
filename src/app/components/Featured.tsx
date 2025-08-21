const featured = [
   "Remeras",
   "Camperas",
   "Camisas"
]

export default function Featured() {
   return (
      <div className="h-[92px] text-2xl font-merriweather m-4">
         <p className=" pb-4">Los más buscados</p>
         <ul className="flex flex-row overflow-auto">
            {featured.map((item) => (
               <li key={item} className="mx-1 border-2 rounded-[25px] py-2 px-4 cursor-pointer">{item}</li>
            ))}
         </ul>
      </div>
   )
}