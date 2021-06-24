 import React from "react";
 


function Home(){

  const estilo = {
    backgroundColor: "black"
  }

    return(
      <>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={estilo}>
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <center><img src="https://a-static.mlcdn.com.br/618x463/camiseta-anime-naruto-pp-tradiscional-cod-43-cr-sublime/crsublime/917635844c6411eb8bd24201ac1850d0/57c36fc4c6856acf41461904e6f707c6.jpg" alt="Camisa"/></center>
            </div>
            <div class="carousel-item">
              <center><img src="http://s2.glbimg.com/q6q3LztBVZPTXDecQVPnqCx2jiA=/695x0/s.glbimg.com/po/tt2/f/original/2015/01/12/melhores-jogos-naruto-shippuden.jpg" alt="Jogo"/></center>
            </div>
            <div class="carousel-item">
              <center><img src="https://images.tcdn.com.br/img/img_prod/693516/pulseira_naruto_87_2_20190422141220.jpg" alt="Acessórios"/></center>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
          </a>
        </div>

        
      </>

    );
}
    export default Home;