describe("El juego...", function() {
  var miJuego;
  var us1, us2, partida;

  beforeEach(function(){
    miJuego=new Juego();
    miJuego.agregarUsuario("pepe");
    miJuego.agregarUsuario("luis");

    let res = miJuego.jugadorCreaPartida("pepe");
    miJuego.jugadorSeUneAPartida("luis", res.codigo);
    us1=miJuego.obtenerUsuario("pepe");
    us2=miJuego.obtenerUsuario("luis");
    partida=miJuego.obtenerPartida(res.codigo);
  });

  it("inicialmente", function() {
    //let lista=miJuego.obtenerPartidas();
    //expect(lista.length).toEqual(0);
    expect(us1.nick).toEqual("pepe");
    expect(us2.nick).toEqual("luis");


    //comprobar que los usuarios están en la partida
    //comprobar que cada usuario tiene 2 tableros de 5x5
    //que contienen agua (esAgua())
    //comprobar que cada usuario tiene 1 flota de 2 barcos
    //de tamaño 4 y 2
    //comprobar que la partida esta en fase jugando
  });

  xit("crear partida", function() {
    let codigo=us1.crearPartida();
    expect(miJuego.partidas[codigo]).toBeDefined();
    let partida=miJuego.partidas[codigo];
    expect(partida.owner,nick).toEqual(us1.nick);
    expect(partida.jugadores[0].nick).toEqual(us1.nick);
    expect(partida.codigo).toEqual(codigo); //antes ponia partidas, le he borrado la "s"
  });

  xit("el usuario luis se une a la partida", function(){
    let codigo=us1.crearPartida();
    let partida=miJuego.partidas[codigo];
    usr2.unirseAPartida();
    expect(partida.jugadores.length).toEqual(2);
    expect(partida.jugadores[1].nick).toEqual(us2.nick);
  });

  it("usuarios en partida", function(){
    expect(partida.estoy(us1.nick));
    expect(partida.estoy(us2.nick));
  })

  it("comprobar tableros de los usuarios",function(){
    expect(us1.tableroPropio).toBeDefined();
    expect(us1.tableroPropio.esTablero()).toBeTrue(); //no se si haría falta poner el toBeTrue()
    expect(us1.tableroPropio.casillas.length).toEqual(5);
    expect(us1.tableroPropio.casillas[0].length).toEqual(5);
    //comprobamos que las casillas son agua
    for (i=0;i<5;i++){
      for (j=0;j<5;j++){
        expect(us1.tableroPropio.casillas[i][j].esAgua());
      }
    }
  })


});
