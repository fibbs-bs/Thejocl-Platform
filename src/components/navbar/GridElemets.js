import barcocarga from '../../sources/barcocarga.jpg'
import camion from '../../sources/camion.jfif'
import chancador from '../../sources/Chancador giratorio.jfif'
import celdaf from '../../sources/Celda flotacion.jpg'
import cinta from '../../sources/CINTA.jpg'
import espesador from '../../sources/espesador.jpg'
import filtropf from '../../sources/filtropf.jpg'
import harbenero from '../../sources/harbenero.png'
import hidrociclon from '../../sources/Hidrociclon.jpg'
import molienda from '../../sources/Molienda.jpg'
import ph from '../../sources/P&H 4100.png'
import stockpile from '../../sources/Stock pile.png'
import stockpilepuerto from '../../sources/stockpile.jpg'


const titles = ["Extracción","Transporte","Chancado","Cinta a StockPile",
            "Stock Pile","Cinta a Molienda","Molienda","Harneros",
            "Hidrociclones","Celdas flotación","Espesadores","Filtración",
            "Bodega Puerto","Transporte"]

const imgs = [ph,camion,chancador,cinta,stockpile,cinta,molienda,harbenero,hidrociclon,celdaf,espesador,filtropf,stockpilepuerto,barcocarga] 

var elements = []

for (let index = 0; index < imgs.length; index++) {
    elements.push({
        id:index.toString(),
        img_src: imgs[index],
        title: titles[index]
    })
}

export default elements;