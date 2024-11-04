const Contact = ({handleShowModal}) => {

  return (
    <section className="w-[88%] h-[82%] bg-dark-blue rounded-lg p-5 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-medium">Contactame</h2>
          <p>No dudes de enviarme un correo o escríbeme en mis redes sociales.</p>
        </div>
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label>Nombre</label>
            <input type="text" className="text-black rounded-md px-2 py-1 text-[15px]"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Apellido</label>
            <input type="text" className="text-black rounded-md px-2 py-1 text-[15px]"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Correo</label>
            <input type="text" className="text-black rounded-md px-2 py-1 text-[15px]"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Nombre</label>
            <textarea name="" id="" className="text-black rounded-md px-2 py-1 text-[15px] resize-none" rows={4}></textarea>
          </div>
          <div className="flex justify-center">
            <button className="h-10 bg-green-600 rounded-md w-28">Enviar</button>
          </div>
        </form>
        <div className="w-full flex justify-end">
          <button onClick={handleShowModal} className="h-10 bg-light-blue rounded-md w-28">Cerrar</button>
        </div>
    </section>
  )
}
export default Contact